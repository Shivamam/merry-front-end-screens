import React from 'react';
import Home from './components/Home';
import Admin from './components/Registration/Admin';
import Member from './components/Registration/Member';
import Caregiver from './components/Registration/Caregiver';
import Volunteer from './components/Registration/Volunteer';
import Partner from './components/Registration/Partner';
import Nav from './components/Navbar';
import { Routes, Route, Link } from 'react-router-dom';
import AdminLogin from './components/Login/AdminLogin';
import MemberLogin from './components/Login/MemberLogin';
import PartnerLogin from './components/Login/PartnerLogin';
import CaregiverLogin from './components/Login/CaregiverLogin';
import VolunteerLogin from './components/Login/VolunteerLogin';
import AdminProfile from './components/Profile/AdminProfile';
import MemberProfile from './components/Profile/MemberProfile';
import PartnerProfile from './components/Profile/PartnerProfile';
import CaregiverProfile from './components/Profile/CaregiverProfile';
import VolunteerProfile from './components/Profile/VolunteerProfile';
import PartnerMenu from './components/Menu/PartnerMenu';
import PartnerMenuOrder from './components/Menu/PartnerMenuOrder';
import SelectPartner from './components/SelectPartner';
const App = () => {
  return (
    <div className='App'>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/AdminLogin' element={<AdminLogin />} />
        <Route path='/MemberLogin' element={<MemberLogin />} />
        <Route path='/PartnerLogin' element={<PartnerLogin />} />
        <Route path='/CaregiverLogin' element={<CaregiverLogin />} />
        <Route path='/VolunteerLogin' element={<VolunteerLogin />} />
        <Route path='/RegAdmin' element={<Admin />} />
        <Route path='/RegMember' element={<Member />} />
        <Route path='/RegCaregiver' element={<Caregiver />} />
        <Route path='/RegVolunteer' element={<Volunteer />} />
        <Route path='/RegPartner' element={<Partner />} />
        <Route path='/AdminProfile' element={<AdminProfile />} />
        <Route path='/MemberProfile' element={<MemberProfile />} />
        <Route path='/PartnerProfile' element={<PartnerProfile />} />
        <Route path='/CaregiverProfile' element={<CaregiverProfile />} />
        <Route path='/VolunteerProfile' element={<VolunteerProfile />} />
        <Route path='/PartnerMenu' element={<PartnerMenu />} />
        <Route path='/PartnerMenuOrder' element={<PartnerMenuOrder />} />
        <Route path='/SelectPartner' element={<SelectPartner />} />
      </Routes>
    </div>
  );
};

export default App;
