import './App.css';
import Header from './components/header/header.component';
import Homepage from './pages/homepage/homepage.component';
import { Route, Routes, Link } from "react-router-dom"
import ServicesPage from './pages/servicespage/services.component';
import PortfolioPage from './pages/portfolio/portfolio.component';
import PricingPage from './pages/pricing/pricing.component';
import SEOPage from './pages/seo/seo.component';
import SocialPage from './pages/social/social.component';
import CustomCodePage from './pages/custom-code/custom-code.component';
import AboutPage from './pages/about/about.component';

import Footer from './components/footer/footer.component';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faBars, faCheckSquare, faCoffee, faTimes } from '@fortawesome/free-solid-svg-icons'
import WebsiteManagementPage from './pages/website-management/websitemanagement.component';
import 'bootstrap/dist/css/bootstrap.min.css';

library.add(fab, faCheckSquare, faCoffee, faTimes, faBars)

function App() {
  
  return (
      <div>
        <Header/>
        <Routes>
          <Route exact path='/' element={<Homepage/>} />
          <Route exact path='/services' element={<ServicesPage/>} />
          <Route exact path='/portfolio' element={<PortfolioPage/>} />
          <Route exact path='/pricing' element={<PricingPage/>} />
          <Route exact path='/seo' element={<SEOPage/>} />
          <Route exact path='/site-manager' element={<WebsiteManagementPage/>} />
          <Route exact path='/social' element={<SocialPage/>} />
          <Route exact path='/custom' element={<CustomCodePage/>} />
          <Route exact path='/about' element={<AboutPage/>} />
        </Routes>
        <Footer/>
     </div>
  );
}

export default App;
