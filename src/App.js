import './App.css';
import Header from './components/header/header.component';
import Homepage from './pages/homepage/homepage.component';
import { Route, Routes, Link } from "react-router-dom"
import ServicesPage from './pages/servicespage/services.component';
import PortfolioPage from './pages/portfolio/portfolio.component';
import Footer from './components/footer/footer.component';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee)

function App() {
  
  return (
      <div>
        <Header/>
        <Routes>
          <Route exact path='/' element={<Homepage/>} />
          <Route exact path='/services' element={<ServicesPage/>} />
          <Route exact path='/portfolio' element={<PortfolioPage/>} />
        </Routes>
        <Footer/>
     </div>
  );
}

export default App;
