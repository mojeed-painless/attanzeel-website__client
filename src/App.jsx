import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ScrollToTop from './components/ScrollToTop.jsx';

import MainLayout from './pages/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Academics from './pages/Academics';
import Activity from './pages/Activity';
import Gallery from './pages/Gallery';
import BasicSection from './pages/BasicSection';
import CollegeSection from './pages/CollegeSection';
import BoardingSection from './pages/BoardingSection';
import EnquiryForm from './pages/EnquiryForm';
import RoleBaseDashboard from './components/RoleBaseDashboard';
import NotFound from './pages/NotFound';

function App() {


  const [currentRole, setCurrentRole] = useState('');

  function handleRoleSet(userRole) {
    setCurrentRole(userRole);
  }

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout handleRoleSet={handleRoleSet}/>}>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/academics' element={<Academics />} />
          <Route path='/activity' element={<Activity />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/basic' element={<BasicSection />} />
          <Route path='/college' element={<CollegeSection />} />
          <Route path='/boarding' element={<BoardingSection />} />
          <Route path='/enquiry-form' element={<EnquiryForm />} />

        </Route>
        
        <Route path='/portal' element={<RoleBaseDashboard currentUser={currentRole}/>} />

        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
