import "./App.css"
import "./components/portfolio/portfolio.css"
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Portfolio from "./components/portfolio/Portfolio";
import About from "./components/About";
import Services from "./components/Services";
import Footer from "./components/footer";


function App () { 
  return (
    <div>
      <Header/>
      <Portfolio/>
      <Navbar/>
      <About/>
      <Services/>
      <Footer/>
    </div>
  )
}

export default App;