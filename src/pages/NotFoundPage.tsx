import { useLocation } from "react-router-dom"
import Seo from "../components/Seo"
import { Button, Container } from "../components/ui"

export default function NotFoundPage() {
  const { pathname } = useLocation()

  return (
    <>
      <Seo
        title="Page not found | B&H Proscaff"
        description="This page is not on the B&H Proscaff Engineering Limited website."
        path={pathname}
        noindex
      />
      <section className="py-24">
        <Container>
          <p className="eyebrow">404</p>
          <h1 className="h-display mt-4 max-w-xl text-5xl">That page is not on this site.</h1>
          <p className="mt-5 max-w-lg text-lg text-ink/75">
            The address may be mistyped. The services, photographs, and Salasala phone numbers are still here.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button to="/">Back to the start</Button>
            <Button to="/contact" variant="ghost">
              Contact
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}
