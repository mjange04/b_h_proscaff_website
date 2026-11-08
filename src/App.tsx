import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./components/Layout"
import ScrollToTop from "./components/ScrollToTop"
import AboutPage from "./pages/AboutPage"
import ApproachPage from "./pages/ApproachPage"
import ContactPage from "./pages/ContactPage"
import HomePage from "./pages/HomePage"
import NotFoundPage from "./pages/NotFoundPage"
import PrivacyPage from "./pages/PrivacyPage"
import ProjectsPage from "./pages/ProjectsPage"
import ServiceDetailPage from "./pages/ServiceDetailPage"
import ServicesPage from "./pages/ServicesPage"

function Root() {
  return (
    <>
      <ScrollToTop />
      <Layout />
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "services", element: <ServicesPage /> },
      { path: "services/:slug", element: <ServiceDetailPage /> },
      { path: "projects", element: <ProjectsPage /> },
      { path: "approach", element: <ApproachPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "privacy", element: <PrivacyPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
