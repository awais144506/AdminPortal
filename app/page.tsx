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
            </Route>
          </Routes>
        </AuthProvider>
      </Router>


    </>
  );
}

export default App;