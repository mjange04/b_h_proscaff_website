import { Route, Routes } from "react-router-dom"
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

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="services/:slug" element={<ServiceDetailPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="approach" element={<ApproachPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="privacy" element={<PrivacyPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  )
}
