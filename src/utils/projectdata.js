// importing the images 

import RealChatthumbnail from '../media/projects/Pictures/realtime-chatapp.png';
import Chatbotthumbnail from '../media/projects/Pictures/chatbot.png';
import Netflixthumbnail from '../media/projects/Pictures/Netflix.png';
import Restaurentthumbnail from '../media/projects/Pictures/Restaurant.png';
import Forestthumbnail from '../media/projects/Pictures/Forest.png';
import SpaceInvaderthumbnail from '../media/projects/Pictures/SpaceInvader.png';
import Mazethumbnail from '../media/projects/Pictures/maze.png';
import Housethumbnail from '../media/projects/Pictures/House.png';
import VMthumbnail from '../media/projects/Pictures/Vm.png';
import Shoesthumbnail from '../media/projects/Pictures/Shoe_website.png';
import Coffeethumbnail from '../media/projects/Pictures/coffee.png';
import Busthumbnail from '../media/projects/Pictures/bus.png';



//importing the Vidoes

import RealChatVideo from '../media/projects/Vedios/Chat-app.mp4';
import ChatBotVideo from '../media/projects/Vedios/chatbot.mp4';
import NetflixVideo from '../media/projects/Vedios/NetFlix-clone.mp4';
import RestaurentVideo from '../media/projects/Vedios/Restaurant.mp4';
import ForestVideo from '../media/projects/Vedios/Forest.mp4';
import SpaceInvaderVideo from '../media/projects/Vedios/Invader Game.mp4';
import MazeVideo from '../media/projects/Vedios/Maze.mp4';
import HouseVideo from '../media/projects/Vedios/3DH.mp4';



const projectData = [
    {
        name: 'Netflix-clone',
        title: 'Netflix-clone',
        thumbnail: Netflixthumbnail,
        video: NetflixVideo, // Video link added
        isVideo: true, // New field to identify if it's a video
        url: 'https://realtimechatapp-five.vercel.app',
        git_url: 'https://github.com/Rajbin-BK',
        description: 
            `The Netflix Clone App is a full-stack MERN application that replicates key features of Netflix. It includes secure authentication, movie and TV show streaming from APIs, a responsive UI for mobile and desktop, advanced search functionality, and integrated trailer playback. Users can also view their search history. This project demonstrates my skills in full-stack development and API integration.\n\nTech Stack: React.js, Node.js, Express.js, MongoDB, and Tailwind CSS.`,

        
    },
    {
        name: 'Chatapp',
        title: 'Chat-App',
        thumbnail: RealChatthumbnail,
        video: RealChatVideo, // Video link added
        isVideo: true, // New field to identify if it's a video
        url: 'https://realtimechatapp-five.vercel.app',
        git_url: 'https://github.com/Rajbin-BK',
        description: 
            `The Real-Time Chat Application is a full-stack solution built with Next.js 13. It features instant messaging powered by Upstash Redis for seamless communication, a friendship system for managing connections, and Google Authentication for secure access. Enhanced with TypeScript, this application showcases a robust approach to real-time chat, focusing on performance and user experience.\n\nTech Stack: Next.js, React, Tailwind CSS, Upstash Redis, and TypeScript.`,
        
    },
    {
        name: 'Chat-Bot',
        title: 'Chat-Bot',
        thumbnail: Chatbotthumbnail,
        video: ChatBotVideo, // Video link added
        isVideo: true, // Mark it as an image-based project
        url: 'https://aichatbot-rosy.vercel.app/',
        git_url: 'https://github.com/Rajbin-BK',
        description: 
            `This customer support chatbot is a full-stack solution built with Next.js, utilizing OpenAI's ChatGPT for real-time interactions. It provides instant responses to user queries, ensuring an engaging experience.\n\nSecurity is prioritized with Upstash's rate-limited API routes, while optimistic UI updates enhance responsiveness. With robust error handling and TypeScript for reliability, this project exemplifies the application of advanced technology in customer service.\n\nTech Stack: Next.js, OpenAI's ChatGPT, Upstash, and TypeScript.`,
        
    },
    {
        name: 'Restaurent Odering App',
        title: 'Restaurent Odering App',
        thumbnail: Restaurentthumbnail,
        video: RestaurentVideo, // Video link added
        isVideo: true, // Mark it as an image-based project
        url: 'https://www.jotform.com/app/230568101023240',
        git_url: 'https://github.com/Rajbin-BK',
        description: 
            `Built with Jotform, this custom restaurant app provides a seamless experience for users to browse the menu, place orders, and manage their accounts. Key features include:\n\n- Interactive Menu: View detailed food options with descriptions and prices.\n- Order Placement: Easily add items to the cart and place orders quickly.\n- Service Information: Discover the restaurant’s services and specialties.\n- Contact Options: Directly call or email for inquiries or reservations.\n- User Authentication: Secure login and account creation to save order history and preferences.\n- Online Payments: Secure payment gateway for hassle-free checkout.\n\nThis app enhances customer interaction and streamlines restaurant operations.`,
        
    },

    {
        name: 'Space Invader',
        title: 'Space Invader',
        thumbnail: SpaceInvaderthumbnail,
        video: SpaceInvaderVideo, // Video link added
        isVideo: true, // Mark it as an image-based project
        url: 'https://github.com/Rajbin-BK/git-repo',
        git_url: 'https://github.com/Rajbin-BK/git-repo',
        description: 
            `This project is a 3D space shooter game developed with Three.js, enabling immersive gameplay directly in web browsers. Key features include:\n\n- Cannon Control: Players shoot lasers at alien adversaries.\n- Automatic Shooting: Continuous engagement without manual firing.\n- Obstacle Blocks: Adds challenge and strategy to the gameplay.\n- Real-Time Scoring: Tracks player performance.\n\nThis project showcases Three.js' capabilities for creating interactive 3D games, delivering visually compelling experiences in the browser.`,
        
    },

    {
        name: 'Forest Using Three.Js',
        title: 'Forest Using Three.Js',
        thumbnail: Forestthumbnail,
        video: ForestVideo, // Video link added
        isVideo: true, // Mark it as an image-based project
        url: 'https://github.com/Rajbin-BK/Forest',
        git_url: 'https://github.com/Rajbin-BK/Forest',
        description: 
            `This project utilizes Three.js to create a dynamic 3D scene featuring a lush environment. Key elements include:\n\n- Spherical Skydome: A panoramic texture provides a realistic backdrop.\n- Circular Ground Plane: A repeating grass texture demonstrates texture mapping.\n- Procedurally Generated Trees: Various types and sizes are randomly placed, each with detailed trunks and foliage.\n- Lighting: Enhances visual depth and realism.\n\nThis project showcases Three.js' ability to render complex 3D environments with interactive elements in the browser, delivering a visually compelling user experience.`,
        
    },

    {
        name: '3D Maze Runner',
        title: '3D Maze Runner',
        thumbnail: Mazethumbnail,
        video: MazeVideo, // Video link added
        isVideo: true, // Mark it as an image-based project
        url: 'https://github.com/Rajbin-BK/3D-Maze-Runner',
        git_url: 'https://github.com/Rajbin-BK/3D-Maze-Runner',
        description: 
            `Maze Adventure is a first-person 3D maze exploration game developed with Three.js. It features a detailed maze with textured floors and walls, dynamic lighting effects, and various interactive 3D models like stones and plants imported using GLTFLoader and OBJLoader. Players navigate the maze from a first-person perspective using intuitive keyboard controls, providing an immersive gameplay experience.\n\nThis project showcases the capabilities of Three.js in creating engaging and visually rich 3D environments.`,
        
    },

    {
        name: '3D House',
        title: '3D House',
        thumbnail: Housethumbnail,
        video: HouseVideo, // Video link added
        isVideo: true, // Mark it as an image-based project
        url: 'https://github.com/Rajbin-BK/3DHouse',
        git_url: 'https://github.com/Rajbin-BK/3DHouse',
        description: 
            `This project creates a detailed 3D environment using Three.js, featuring a dynamic water surface with realistic reflections and waves from the Water2.js class. It employs a first-person perspective with a movable sphere that the camera follows. The scene includes a skydome with textures for day, sunset, and night, along with a house and detailed interiors imported using GLTFLoader. Lighting is managed with ambient, directional, and spotlights for added realism. User interaction is enabled through keyboard controls, allowing movement and rotation, and changing the skydome phase for an immersive experience.\n\nThis project demonstrates the potential of Three.js in crafting interactive 3D environments.`,
        
    },

    {
        name: 'Shoe Website',
        title: 'Shoes Website',
        thumbnail: Shoesthumbnail,
        video: "", // Video link added
        isVideo: false, // Mark it as an image-based project
        url: 'https://shoes-website-three.vercel.app/',
        git_url: 'https://github.com/Rajbin-BK/shoes_website',
        description: 
            `This project is a shoes website that showcases the Air Jordan 6 Retro SP, designed to provide a seamless shopping experience. It features a dynamic navigation bar with sections for new releases, men's, women's, and kids' shoes, as well as customization options. The main section highlights the product with engaging animations and detailed descriptions.\nThe website utilizes AOS (Animate On Scroll) for smooth transitions, enhancing user interaction. Key functionalities include interactive size selection and an "Add to Cart" button for quick purchasing.\nThis project demonstrates effective web design and user experience strategies, creating an engaging platform for shoe enthusiasts.`,
        
    },

    {
        name: 'Coffee Website',
        title: 'Coffee Website',
        thumbnail: Coffeethumbnail,
        video: "", // Video link added
        isVideo: false, // Mark it as an image-based project
        url: 'https://coffee-website-virid.vercel.app/',
        git_url: 'https://github.com/Rajbin-BK/coffee_website',
        description: 
            `This project is a coffee shop website designed to highlight the exceptional quality of the coffee offerings. It features a clean and engaging layout with a navigation bar that includes links to the menu, gallery, and reservation sections.\nThe main content section emphasizes the brand's mission to provide sustainably sourced, hand-picked coffee through engaging animations. Key highlights include an attention-grabbing headline, a brief description of the coffee philosophy, and interactive icons showcasing tasty coffee and a video option.\nThe website utilizes AOS (Animate On Scroll) for smooth transitions and animations, enhancing the overall user experience. This project demonstrates effective web design principles and a focus on user engagement in promoting a coffee shop.`,
        
    },

    {
        name: 'Bus Traveling',
        title: 'Bus Traveling',
        thumbnail: Busthumbnail,
        video: "", // Video link added
        isVideo: false, // Mark it as an image-based project
        url: 'https://bus-booking-two.vercel.app/',
        git_url: 'https://github.com/Rajbin-BK/bus_booking',
        description: 
            `This project is a ticket booking website titled "Poribohon," designed to facilitate safe travel journeys. The site features a straightforward navigation bar with links to various sections, including Home, About, Services, Case Studies, Blog, and Contact.\nThe main content section conveys the mission of ensuring safe travel, highlighted by an engaging headline and a brief description. A prominent call-to-action button invites users to "GET YOUR TICKET," encouraging engagement.\nThe website employs AOS (Animate On Scroll) for smooth animations, enhancing the user experience. This project showcases effective web design principles focused on clarity, usability, and promoting travel services.`,
        
    },

    {
        name: 'VMs Allocation using Genetic Algorithm',
        title: 'VMs Allocation using Genetic Algorithm',
        thumbnail: VMthumbnail,
        video: "", // Video link added
        isVideo: false, // Mark it as an image-based project
        url: 'https://github.com/Rajbin-BK/vm-allocation-ga',
        git_url: 'https://github.com/Rajbin-BK/vm-allocation-ga',
        description: 
            `This project optimizes the allocation of Virtual Machines (VMs) to Cloud Service Providers (CSPs) using a genetic algorithm implemented in Java. It dynamically assigns 7 VMs across 8 CSPs by evaluating factors like cost, reliability, and latency. The genetic algorithm iteratively refines the allocation through population initialization, fitness evaluation, selection, crossover, and mutation. This multi-objective approach enhances cloud resource allocation efficiency, showcasing improvements in deployment strategy.\n\nThis project illustrates the effectiveness of genetic algorithms in optimizing complex allocation problems.`,
        
    },
];

// Dynamically assign the id based on index
const projects = projectData.map((project, index) => ({
    id: index + 1, // Dynamically generate id based on index
    ...project, // Spread the rest of the project properties
}));

export default projects;
