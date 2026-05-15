import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"
import Home from "./pages/Home"
import ScrollToTop from "./components/ui/ScrollToTop"
import PageLoader from "./components/ui/PageLoader"

export default function App() {
  return (
    <BrowserRouter>
      <PageLoader />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
      <ScrollToTop />
    </BrowserRouter>
  )
}