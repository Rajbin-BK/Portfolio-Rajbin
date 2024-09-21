import { useEffect } from "react";
import Navbar from "../components/Navbar";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from '../components/Footer';
import ProjectList from "../components/ProjectList"; //import the ProjectList component
import projects from "../utils/projectdata"; // Import the projects data
import BackToTopButton from "../components/Arrow";

const Project = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className='bg-mine relative '>
      <div className='relative text-white '>
        <Navbar />
        <BackToTopButton/>
        <h2
          data-aos="fade-up"
          data-aos-duration="600"
          className="text-center text-4xl md:text-5xl font-extrabold block text-transparent bg-clip-text leading-tight bg-gradient-to-r from-blue-700 to-blue-100">
          Projects
        </h2>

        <p className='text-center block text-lg md:text-xl'>
          <span className="block w-full py-2 text-gray-300 lg:inline">
          Explore my web, app, and game projects, where creativity meets code to bring ideas to life with dynamic and engaging experiences..
          </span>
        </p>
      </div>
      <div className='min-h-screen flex items-center justify-center'>

        {/* Pass projects data to the ProjectList component */}
        <ProjectList projects={projects} />

      </div>

      <Footer />
    </div>
  );
};

export default Project;
