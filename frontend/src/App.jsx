import Navbar from "./components/layout/Navbar"
import LandingPage from "./pages/LandingPage"
import { BrowserRouter } from "react-router"
import Footer from "./components/layout/Footer"
function App() {
  return (

    <BrowserRouter>
        <Navbar/>
        <LandingPage/>
        <Footer/>
    </BrowserRouter>

  )
}

export default App
