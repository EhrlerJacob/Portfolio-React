import Experience from "./components/Experience"
import Portfolio from "./components/Portfolio"
import About from "./components/About"
import Contact from "./components/Contact"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import SocialLinks from "./components/SocialLinks"


function App() {

  return (
    <div>
      <Navbar/>
      <Home/>
      <SocialLinks/>
      <About/>
      <Portfolio/>
      <Experience/>
      <Contact/>
    </div>
  )
}

export default App
