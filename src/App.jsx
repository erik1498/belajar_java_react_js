import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import TahunAkademik from "./pages/TahunAkademik"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tahun_akademik" element={<TahunAkademik />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
