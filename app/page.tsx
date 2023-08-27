"use client"
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Home from './pages/home';
import { AuthProvider } from './utils/AuthContext';
import PrivateRoutes from './utils/PrivateRoutes';
import Departments from './components/Departments';
import ComputerScience from './pages/ComputerScience';
import Semester7 from './ComputerScienceSem/Semester7';
import ClassRoom from './ComputerScienceSem/ClassRoom';

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
