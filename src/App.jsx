import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import MainLayout from './pages/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Activity from './pages/Activity';
// import StudentLogin from './pages/StudentLogin';
// import NewStudentLogin from './pages/NewStudentLogin';
// import StaffLogin from './pages/StaffLogin';
import BasicSection from './pages/BasicSection';
import CollegeSection from './pages/CollegeSection';
import BoardingSection from './pages/BoardingSection';
import EnquiryForm from './pages/EnquiryForm';
// import StudentDashboard from './pages/StudentDashboard';
// import StaffWorkflow from './pages/StaffWorkflow';
import RoleBaseDashboard from './components/RoleBaseDashboard';
import NotFound from './pages/NotFound';

function App() {

  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/activity' element={<Activity />} />
          {/* <Route path='/login' element={<StudentLogin />} /> */}
          {/* <Route path='/new-student-login' element={<NewStudentLogin />} /> */}
          {/* <Route path='/staff-login' element={<StaffLogin />} /> */}
          <Route path='/basic' element={<BasicSection />} />
          <Route path='/college' element={<CollegeSection />} />
          <Route path='/boarding' element={<BoardingSection />} />
          <Route path='/enquiry-form' element={<EnquiryForm />} />

        </Route>
        
        <Route path='/portal' element={<RoleBaseDashboard />} />

        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
