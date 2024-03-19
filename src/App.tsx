import { BrowserRouter } from "react-router-dom"
import { Navbar, Router } from "./shared"
import { Footer, ScrollToTop } from "./components"

function App() {

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar/>
        <Router />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
