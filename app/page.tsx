"use client"
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Page';
import Home from './pages/Home/HomePage';
import { AuthProvider } from './pages/api/auth/nextauth';
import PrivateRoutes from './pages/api/auth/PrivateRoutes';
import Departments from './pages/Departments/Departments';
import ComputerScience from './pages/Departments/ComputerScience/ComputerScience';
import Semester7 from './pages/Departments/ComputerScience/Semester7/Semester7';
import ClassRoom from './pages/Departments/ComputerScience/Semester7/ClassRoom';

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
              <Route path="/Semester7" element={<Semester7 />} />
              <Route path="/ClassRoom" element={<ClassRoom />} />
            </Route>
          </Routes>
        </AuthProvider>
      </Router>


    </>
  );
}

export default App;