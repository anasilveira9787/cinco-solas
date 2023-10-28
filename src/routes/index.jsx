import { Routes, Route } from 'react-router-dom'
import Home from '../Components/Home'
import SolaFide from '../Components/SolaFide'
import SolaGratia from '../Components/SolaGratia'
import SoliDeoGloria from '../Components/SoliDeoGloria'
import SolusChristus from '../Components/SolusChristus'
import SolaScriptura from '../Components/SolaScriptura'

function AppRoutes() {
 

    return (
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/solafide" element={<SolaFide />} />
      <Route path="/solagratia" element={<SolaGratia />} />
      <Route path="/solascriptura" element={<SolaScriptura />} />
      <Route path="/soluschristus" element={<SolusChristus />} />
      <Route path="/solideogloria" element={<SoliDeoGloria />} />
      </Routes>    
  
    )
  }
  
  export default AppRoutes