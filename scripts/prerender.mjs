import { spawn } from "node:child_process"
import { mkdir, writeFile } from "node:fs/promises"
import net from "node:net"
import path from "node:path"
import { fileURLToPath } from "node:url"

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const dist = path.join(root, "dist")
const chrome = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

const routes = [
  "/",
  "/about",
  "/services",
  "/services/scaffolding",
  "/services/scaffold-event-stages",
  "/services/cradle",
  "/services/scissor-platforms",
  "/services/surface-coatings",
  "/services/formwork",
  "/projects",
  "/approach",
  "/contact",
  "/privacy",
]

function waitForPort(port, timeoutMs = 20000) {
  const started = Date.now()
  return new Promise((resolve, reject) => {
    const attempt = () => {
      const socket = net.connect(port, "127.0.0.1")
      socket.once("connect", () => {
        socket.end()
        resolve()
      })
      socket.once("error", () => {
        socket.destroy()
        if (Date.now() - started > timeoutMs) {
          reject(new Error(`Preview server did not open port ${port}`))
          return
        }
        setTimeout(attempt, 200)
      })
    }
    attempt()
  })
}

function dumpDom(url) {
  return new Promise((resolve, reject) => {
    const child = spawn(
      chrome,
      [
        "--headless=new",
        "--disable-gpu",
        "--no-sandbox",
        "--virtual-time-budget=12000",
        "--timeout=20000",
        "--dump-dom",
        url,
      ],
      { stdio: ["ignore", "pipe", "pipe"] },
    )
    let stdout = ""
    let stderr = ""
    child.stdout.on("data", (chunk) => {
      stdout += chunk
    })
    child.stderr.on("data", (chunk) => {
      stderr += chunk
    })
    child.on("error", reject)
    child.on("close", (code) => {
      const start = stdout.indexOf("<!DOCTYPE")
      const htmlStart = start === -1 ? stdout.indexOf("<html") : start
      if (htmlStart === -1) {
        reject(new Error(`Chrome did not return HTML for ${url} (exit ${code}): ${stderr.slice(0, 400)}`))
        return
      }
      resolve(stdout.slice(htmlStart))
    })
  })
}

const port = 47269

const preview = spawn(
  "npx",
  ["vite", "preview", "--host", "127.0.0.1", "--port", String(port), "--strictPort"],
  { cwd: root, stdio: "inherit" },
)

let previewFailed = false
preview.on("exit", (code) => {
  if (code && code !== 0) previewFailed = true
})

try {
  await waitForPort(port)
  if (previewFailed) {
    throw new Error(`Preview server on port ${port} exited before prerender`)
  }
  for (const route of routes) {
    const html = await dumpDom(`http://127.0.0.1:${port}${route}`)
    if (!html.includes("B&amp;H Proscaff") && !html.includes("B&H Proscaff")) {
      throw new Error(`Refusing to write ${route}: rendered page is not B&H Proscaff`)
    }
    const directory = route === "/" ? dist : path.join(dist, route)
    await mkdir(directory, { recursive: true })
    await writeFile(path.join(directory, "index.html"), html)
    const title = html.match(/<title>([^<]*)<\/title>/)?.[1] ?? "(no title)"
    console.log(`${route} → ${title}`)
  }
} finally {
  preview.kill("SIGTERM")
}
