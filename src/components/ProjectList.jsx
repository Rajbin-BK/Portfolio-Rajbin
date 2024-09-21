import { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {Github, LucideRadioTower } from 'lucide-react';
import PropTypes from 'prop-types';

const Projectlist = ({ projects }) => {
    const [hoveredProject, setHoveredProject] = useState(null);

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className='pt-10 max-h-full w-full text-white'>
            {projects.map((project) => (
                 <div
                 key={project.id}
                 className="project-list-item"
             >
                 <div
                     className={`flex flex-col md:max-w-6xl mx-auto items-center justify-center px-4 md:px-2 mb-10
                     ${project.id % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                 >
                     {/* Thumbnail or Video */}
                     <div
                         data-aos={project.id % 2 === 0 ? "fade-right" : "fade-left"}
                         data-aos-duration="800"
                         data-aos-delay="200"
                         className='flex-1 relative'
                         onMouseEnter={() => setHoveredProject(project.id)}
                         onMouseLeave={() => setHoveredProject(null)}
                     >
                         {hoveredProject === project.id && project.isVideo ? (
                             <video
                                 src={project.video}
                                 autoPlay
                                 muted
                                 loop
                                 className='lg:ml-2 md:ml-2 rounded-3xl w-full max-w-lg'
                             >
                                 Your browser does not support the video tag.
                             </video>
                         ) : (
                             <img
                                 src={project.thumbnail}
                                 alt={project.title}
                                 className='lg:ml-2 md:ml-2 rounded-3xl w-full max-w-lg'
                             />
                         )}
                     </div>
 
                     <div className="m-2"></div>
 
                     {/* Project Title and Description */}
                     <div className='flex-1 text-center md:text-left mt-4 md:mt-0 md:ml-4 lg:ml-16'>
                         <h3 
                             data-aos="fade-down"
                             data-aos-duration="800"
                             data-aos-delay="200"
                             className="text-[5vw] md:text-[3vw] lg:text-[3vw] font-semibold mb-5 py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-blue-200 to-blue-800">
                             {project.title}
                         </h3>
 
                         <p
                             data-aos={project.id % 2 === 0 ? "fade-left" : "fade-right"}
                             data-aos-duration="800"
                             data-aos-delay="200"
                             className='text-[4vw] md:text-[1.2vw] lg:text-[1.2vw] text-justify text-gray-200 mt-4'
                             style={{ whiteSpace: 'pre-line' }}>
                             {project.description}
                         </p>
 
                         {/* Buttons for Demo and GitHub */}
                         <div className="mt-4 flex justify-center gap-4">
                             <a
                                 data-aos="fade-down"
                                 data-aos-duration="800"
                                 data-aos-delay="200"
                                 href={project.url}
                                 target="_blank"
                                 rel="noopener noreferrer"
                                 className="inline-flex bg-blue-800 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
                             >
                                 Demo 
                                 <LucideRadioTower className="mx-2"/>
                             </a>
                             <a
                                 data-aos="fade-up"
                                 data-aos-duration="800"
                                 data-aos-delay="200"
                                 href={project.git_url}
                                 target="_blank"
                                 rel="noopener noreferrer"
                                 className="inline-flex bg-gray-700 text-white py-2 px-4 rounded hover:bg-gray-800 transition duration-300"
                             >
                                 GitHub
                                 <Github  className="mx-2" />
                             </a>
                         </div>
                     </div>
                 </div>
 
                 {/* this is the end */}
             </div>
            ))}
        </div>
    );
};

Projectlist.propTypes = {
    projects: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
            git_url: PropTypes.string.isRequired,
            thumbnail: PropTypes.string.isRequired,
            video: PropTypes.string,
            isVideo: PropTypes.bool,
        })
    ).isRequired,
};

export default Projectlist;
