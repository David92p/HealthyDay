import { BrowserRouter } from "react-router-dom"
import { Navbar, Router } from "./shared"

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Router />
      </BrowserRouter>
    </>
  )
}

export default App
