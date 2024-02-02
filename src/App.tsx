import { BrowserRouter } from "react-router-dom"
import { Navbar, Router } from "./shared"
import { Footer } from "./components"

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Router />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
