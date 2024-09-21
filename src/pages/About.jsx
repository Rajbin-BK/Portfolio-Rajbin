import AOS from 'aos';
import "aos/dist/aos.css";

import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import BackToTopButton from '../components/Arrow';


const About = () => {

  useEffect(() => {
    AOS.init();
  }, []);


  return (
    <div className="bg-mine min-h-screen  overflow-x-hidden">
      <div data-aos="fade-down" className="relative bg-transparent text-white">
        <Navbar />
        <BackToTopButton />
        <div
          className="w-full lg:mb-0 z-[1] flex flex-col lg:flex-col md:justify-around items-center ">
          <div className=" flex flex-col md:flex-row lg:flex-row md:justify-around items-center">
            {/* Image Section */}
            <div
              data-aos="fade-right"
              data-aos-duration="1500"
              className="w-full lg:w-[30%] flex justify-center items-start ml-7"
            >
              <div className='relative'>
                <img src='/about.pic.png' alt='Profile' className='rounded-lg mt-4 z-20 relative max-w-[300px] md:max-w-[400px] lg:max-w-[400px]' />
              </div>
            </div>

            {/* Text Section */}
            <div className=" lg:w-[70%] flex flex-col justify-center items-center px-6 lg:px-10">
              <h2 data-aos="fade-up"
                data-aos-duration="600"
                className="text-center text-4xl md:text-5xl font-extrabold block text-transparent bg-clip-text leading-tight bg-gradient-to-r from-blue-200 to-blue-700">
                About Me
              </h2>

              <br />

              {/* Education and Experience Section */}
              {/* <div
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-delay="600"
                className="text-center flex flex-row lg:flex-row justify-center items-stretch mt-6 lg:space-x-8"
              >
                <div
                  className="font-bold text-2xl lg:text-4xl text-center rounded-[20px] border-blue-900 border-r-2 border-b-2 hover:border-r-4 hover:border-b-4 px-6 py-4 flex flex-col justify-start items-center text-blue-700 hover:text-gray-300 transition duration-300 bg   w-full lg:w-[45%] min-h-[220px] flex-grow">
                  <img src='/icons/badge.png' alt="Experience icon" className="icon mb-2 w-12 h-12" />
                  <p className="text-blue-400 text-lg">Experience</p>
                  <p className="font-thin text-gray-200 text-base">
                    2+ years<br />Frontend Development
                  </p>
                  <p className="font-thin text-gray-200 text-base">
                    1 year<br />Backend Development
                  </p>
                </div>

                <div className="font-bold text-2xl lg:text-4xl text-center rounded-[20px] border-blue-900 border-r-2 border-b-2 hover:border-r-4 hover:border-b-4 px-6 py-4 flex flex-col justify-start items-center text-blue-700 hover:text-gray-300 transition duration-300 bg-transparent w-full lg:w-[45%] min-h-[220px] flex-grow">
                  <img src='/icons/educa.png' alt="Education icon" className="  w-14 h-14" />
                  
                  <p className="text-blue-400 text-lg">Education</p>
                  <p className="font-thin text-gray-200 text-base">
                  Bachelor's Degree in Computer Science
                  </p>
                  <p className="font-semibold text-blue-200 text-base">
                    Algoma University
                  </p>
                </div>
              </div> */}

              <br />

              <div className="lg:text-left flex flex-col justify-center items-center">
                <p
                  data-aos="flip-up"
                  data-aos-duration="1000"
                  data-aos-delay="400"
                  className="text-gray-200 text-justify text-[2.vw] md:text-[1.5vw] lg:text-lg w-[95%] lg:w-[100%] leading-relaxed mb-2"
                >
                  Hello! I&apos;m <span className="font-bold text-blue-500">Rajbin BK</span>, and I&apos;m passionate about building solutions that enhance lives through the web. My journey into web development started with my early experiments in HTML and CSS, where I quickly discovered the potential of code to create engaging, interactive experiences.
                  <br /><br />

                  Today, as a Computer Science student at <span className="font-bold text-blue-500">Algoma University</span>, I&apos;ve sharpened my skills in both front-end and back-end development, and earned awards for my academic achievements, including the prestigious President’s Award. I specialize in developing web applications that focus on accessibility, inclusivity, and user-friendly design, ensuring every solution not only meets but exceeds expectations.
                  <br /><br />

                  In recent projects, I’ve delved deeper into cloud computing and interactive 3D web applications, integrating technologies like Next.js, Three.js, and Upstash Redis to bring innovative solutions to life. From building 3D architectural visualizations to real-time chat applications, my work demonstrates a focus on high performance, security, and creating intuitive user experiences.
                  <br /><br />
                  Let&apos;s connect and explore how we can create something amazing together!
                </p>

              </div>


            </div>
          </div>

          {/* separator */}
          <div className='h-6 w-full' aria-hidden='true' />

          {/* Skills Section */}
          <div
            className="flex flex-col md:flex-col lg:flex-col md:justify-around items-center">
            {/* Text Section */}
            <div className="lg:w-[90%] flex flex-col justify-center items-center px-6 lg:px-10">
              <h2 data-aos="fade-up"
                data-aos-duration="600"
                className="text-center text-4xl md:text-5xl font-extrabold m-5 block py-2 text-transparent bg-clip-text leading-tight bg-gradient-to-r from-blue-200 to-blue-700">
                Professional Skills
              </h2>
            </div>

            {/* Container for skills */}
            <div data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="600"
              className="skills-grid">
              <div className="skill-item">
                <img src="icons/html.png" alt="HTML" />
                <p>HTML</p>
              </div>
              <div className="skill-item">
                <img src="icons/css.webp" alt="CSS" />
                <p>CSS</p>
              </div>
              <div className="skill-item">
                <img src="./icons/js.webp" alt="JavaScript" />
                <p>JavaScript</p>
              </div>
              <div className="skill-item">
                <img src="icons/react.png" alt="React" />
                <p>React</p>
              </div>

              <div className="skill-item">
                <img src="icons/threejs.png" alt="Three.js" />
                <p>Three.js</p>
              </div>

              <div className="skill-item">
                <img src="icons/python.png" alt="Python" />
                <p>Python</p>
              </div>

              <div className="skill-item">
                <img src="icons/java.png" alt="java" />
                <p>Java</p>
              </div>
              <div className="skill-item">
                <img src="icons/typescript-logo.webp" alt="Typrscript" />
                <p>TypeScript</p>
              </div>
              <div className="skill-item">
                <img src="icons/mysql.png" alt="MySQL" />
                <p>MySQL</p>
              </div>
              <div className="skill-item">
                <img src="icons/aws.png" alt="AWS" />
                <p>AWS</p>
              </div>

              <div className="skill-item">
                <img src="icons/php.png" alt="PHP" />
                <p>PHP</p>
              </div>

              <div className="skill-item">
                <img src="icons/mongodb.png" alt="mongoDB" />
                <p>Mongo DB</p>
              </div>

              <div className="skill-item">
                <img src="icons/redis.png" alt="redis" />
                <p>Redis</p>
              </div>

              <div className="skill-item">
                <img src="icons/nodejs.png" alt="nodejs" />
                <p>Node JS</p>
              </div>

              <div className="skill-item">
                <img src="icons/nextjs.png" alt="NEXT.js" />
                <p>NEXT.js</p>
              </div>
              <div className="skill-item">
                <img src="icons/azure.png" alt="Azure" />
                <p>Azure</p>
              </div>
              <div className="skill-item">
                <img src="icons/git.png" alt="GitHub" />
                <p>Github</p>
              </div>

              <div className="skill-item">
                <img src="icons/c.png" alt="C programming" />
                <p>C </p>
              </div>
            </div>
            <br />
          </div>


          {/* separator */}
          <div className='h-6 w-full' aria-hidden='true' />

          {/* Skills Section */}
          <div
            className="flex flex-col md:flex-col lg:flex-col md:justify-around items-center">
            {/* Text Section */}
            <div className=" lg:w-[90%] flex flex-col justify-center items-center px-6 lg:px-10">
              <h2 data-aos="fade-up"
                data-aos-duration="600"
                className="text-center text-4xl md:text-5xl font-extrabold m-5 block  py-2 text-transparent bg-clip-text leading-tight bg-gradient-to-r from-blue-700 to-blue-200">
                Tools I Use
              </h2>
            </div>

            {/* Container for tools */}
            <div data-aos="zoom-out"
              data-aos-duration="1000"
              data-aos-delay="600" className="skills-grid">
              <div className="skill-item">
                <img src="icons/vscode.png" alt="VS Code" />
                <p>VS Code</p>
              </div>
              <div className="skill-item">
                <img src="icons/render.png" alt="Render" />
                <p>Render</p>
              </div>
              <div className="skill-item">
                <img src="./icons/postman.png" alt="POST Man" />
                <p>Post Man</p>
              </div>
              <div className="skill-item">
                <img src="icons/vercel.png" alt="Vercel" />
                <p>Vercel</p>
              </div>
              <div className="skill-item">
                <img src="icons/slack.webp" alt="Slack" />
                <p>Slack</p>
              </div>
              <div className="skill-item">
                <img src="icons/blender.png" alt="Blender" />
                <p>Blender</p>
              </div>
              <div className="skill-item">
                <img src="icons/vm.png" alt="Virtual Machine" />
                <p>Oracel VM</p>
              </div>
            </div>
            <br />
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default About;
