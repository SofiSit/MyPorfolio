import { BrowserRouter, Route, Routes } from "react-router-dom"
import { About, Contact , Experience, Hero, Navbar, Tech, Works, StarsCanvas } from "./components"
import './components/about.css'
const App = () => {
  return(
    <BrowserRouter>
    <div className="
    relative z-0  bg-primary about">
     
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
      <Navbar />
      <Hero />
      </div>
      <StarsCanvas />
    
      <About/>
      <Experience/>
      <Tech/>
      <Works/>
      <div className="relative z-0">
        <Contact/>
      <StarsCanvas />
       
      </div>
      
    </div>
    </BrowserRouter>
  )

} 
export default App
