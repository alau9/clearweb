import './App.css';
import Header from './components/header/header.component';
import Homepage from './pages/homepage/homepage.component';
import { Route, Routes, Link } from "react-router-dom"
import ServicesPage from './pages/servicespage/services.component';


function App() {
  
  return (
      <div>
        <Header/>
        <Routes>
          <Route exact path='/' element={<Homepage/>} />
          <Route exact path='/services' element={<ServicesPage/>} />
        </Routes>
     </div>
  );
}

export default App;
