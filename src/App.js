import React from 'react';
import Home from './components/Home';
import Member from './components/Registration/Member';
import Caregiver from './components/Registration/Caregiver';
import Volunteer from './components/Registration/Volunteer';
import Partner from './components/Registration/Partner';
import Nav from './components/Navbar';
import { Routes, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import MemberLogin from './components/Login/MemberLogin';
import PartnerLogin from './components/Login/PartnerLogin';
import CaregiverLogin from './components/Login/CaregiverLogin';
import VolunteerLogin from './components/Login/VolunteerLogin';
import MemberProfile from './components/Profile/MemberProfile';
const App = () => {
  return (
    <div className='App'>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/MemberLogin' element={<MemberLogin />} />
        <Route path='/PartnerLogin' element={<PartnerLogin />} />
        <Route path='/CaregiverLogin' element={<CaregiverLogin />} />
        <Route path='/VolunteerLogin' element={<VolunteerLogin />} />
        <Route path='/RegMember' element={<Member />} />
        <Route path='/RegCaregiver' element={<Caregiver />} />
        <Route path='/RegVolunteer' element={<Volunteer />} />
        <Route path='/RegPartner' element={<Partner />} />
        <Route path='/MemberProfile' element={<MemberProfile />} />
      </Routes>
    </div>
  );
};

export default App;
