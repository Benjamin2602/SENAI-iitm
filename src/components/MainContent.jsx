import Card from "./Card"
import Hero from "./Hero"
import Navbar from "./Navbar"
import "../css/mainContent.css";


const MainContent = () => {
  return (
    <div className="main-bg">
    <Navbar/>
    <Hero/>
    <Card/>
    
      
    </div>
  )
}

export default MainContent
