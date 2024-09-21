import './index.css';
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import ProjectPage from "./pages/Project";


import { Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/home' element={<Navigate to='/' replace />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/project' element={<ProjectPage />} />
        <Route path='/contact' element={<ContactPage />} />

        {/* Redirect any undefined routes to the home page */}
        <Route path="*" element={<Navigate to='/' replace />} />
      </Routes>
    </>
  );
}

export default App;
