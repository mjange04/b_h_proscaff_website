import { useLocation, Outlet } from "react-router-dom"
import Footer, { WhatsAppFloat } from "./Footer"
import Header from "./Header"

export default function Layout() {
  const { pathname } = useLocation()

  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[70] focus:bg-navy focus:px-4 focus:py-2 focus:text-paper"
      >
        Skip to content
      </a>
      <Header />
      <main id="content" className="flex-1">
        <Outlet key={pathname} />
      </main>
      <Footer />
      {pathname === "/contact" ? null : <WhatsAppFloat />}
    </div>
  )
}
