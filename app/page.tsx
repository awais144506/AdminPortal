"use client"
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Page';
import Home from './pages/Home/HomePage';
import { AuthProvider } from './pages/api/auth/nextauth';
import PrivateRoutes from './pages/api/auth/PrivateRoutes';
import Departments from './pages/Departments/Departments';
import ComputerScience from './pages/Departments/ComputerScience/ComputerScience';
import ClassRoom from './pages/Departments/ComputerScience/Semester7/ClassRoom';
import Website from './pages/Website/Website';
import Events from './pages/Website/pages/Events';
import News from './pages/Website/pages/News';
import TimeTable from './pages/Website/pages/TimeTable';
import DateSheets from './pages/Website/pages/DateSheets';
import Calender from './pages/Website/pages/Calender';
import RoadMaps from './pages/Website/pages/RoadMaps';
import Prospectus from './pages/Website/pages/Prospectus';
import MeritLists from './pages/Website/pages/MeritLists';
import Faculty from './pages/faculty/teachers/page';
import Staff from './pages/Staff/page';
function App() {
  return (
    <>
      <Router >
        <AuthProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route element={<PrivateRoutes />}>
              <Route path="/" element={<Home />} />
              <Route path="/Departments" element={<Departments />} />
              <Route path="/ComputerScience" element={<ComputerScience />} />
              <Route path="/ClassRoom" element={<ClassRoom />} />
              <Route path="/Website" element={<Website />} />
              <Route path="/Events" element={<Events/>} />
              <Route path="/News" element={<News/>} />
              <Route path="/TimeTable" element={<TimeTable/>} />
              <Route path="/DateSheets" element={<DateSheets/>} />
              <Route path="/Calender" element={<Calender/>} />
              <Route path="/RoadMaps" element={<RoadMaps/>} />
              <Route path="/Prospectus" element={<Prospectus/>} />
              <Route path="/MeritLists" element={<MeritLists/>} />
              <Route path="/Faculty" element={<Faculty />} />
              <Route path="/Staff" element={<Staff />} />
            </Route>
          </Routes>
        </AuthProvider>
      </Router>


    </>
  );
}

export default App;