import emailjs from '@emailjs/browser';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from "../components/Navbar"
import { useRef, useState } from 'react';
import Footer from '../components/Footer';
import { SendHorizontal } from 'lucide-react';

const Contact = () => {
  AOS.init({ offset: 0, })

  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [subject, setSubject] = useState()
  const [message, setMessage] = useState()
  const [success, setSuccess] = useState(false)

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_cw4fz1j', 'template_119cb4g', form.current, {
        publicKey: 'x72pDf3OX4J63T88e',
      })
      .then(
        () => {
          setSuccess(true)
          setTimeout(() => {
            setSuccess(false);
          }, 4000);
          setName("")
          setEmail("")
          setSubject("")
          setMessage("")
          window.location.reload()
        },
        (error) => {
          alert("Failed: Message not sent", error)
        },
      );
  };

  return (
    <div className='bg-mine relative overflow-x-hidden'>
      <div data-aos="fade-down" className='relative text-white '>
        <Navbar />
        <h2
          data-aos="fade-up"
          data-aos-duration="600"
          className="text-center text-4xl md:text-5xl font-extrabold block text-transparent bg-clip-text leading-tight bg-gradient-to-r from-blue-700 to-blue-100">
          Got a Project? Lets Talk
        </h2>


        <div className='max-h-full w-full text-white'>
          <div data-aos="fade-left" data-aos-duration="1500" className='py-10 text-white bg-transparent'>
            <div className='flex max-w-6xl mx-auto items-center justify-center flex-col md:flex-row px-4 md:px-2'>


              {/* left */}
              <div className='flex-1 text-center md:text-left ml-4 lg:ml-16'>

                <h2 data-aos="fade-right" className="text-3xl md:text-5xl font-semibold mb-5 py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-blue-200 to-blue-800 lg:inline">Lets Chat
                  <br />
                  Tell me about your project
                </h2>

                <p data-aos="fade-right" className='font-thin block  py-2  text-base md:text-xl  text-gray-200'>
                  Lets discuss your project and create someting extraoridinary.
                </p>

                <div>
                  <div className="bg-transparent w-full  h-auto py-3 flex items-center justify-start ml-10 md:ml-16 gap-8 flex-wrap">
                    <button
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      data-aos-delay="500"
                      className="w-10 h-10 flex items-center justify-center rounded-full relative overflow-hidden bg-transparent shadow-md shadow-gray-200 group transition-all duration-500 aos-init aos-animate">
                      <a href="https://www.instagram.com/rajbin_shen/" target="_blank">
                        <svg className=" relative z-10 transition-all duration-500 fill-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 51 51" fill="none">
                          <path d="M17.4456 25.7808C17.4456 21.1786 21.1776 17.4468 25.7826 17.4468C30.3875 17.4468 34.1216 21.1786 34.1216 25.7808C34.1216 30.383 30.3875 34.1148 25.7826 34.1148C21.1776 34.1148 17.4456 30.383 17.4456 25.7808ZM12.9377 25.7808C12.9377 32.8708 18.6883 38.618 25.7826 38.618C32.8768 38.618 38.6275 32.8708 38.6275 25.7808C38.6275 18.6908 32.8768 12.9436 25.7826 12.9436C18.6883 12.9436 12.9377 18.6908 12.9377 25.7808ZM36.1342 12.4346C36.1339 13.0279 36.3098 13.608 36.6394 14.1015C36.9691 14.595 37.4377 14.9797 37.9861 15.2069C38.5346 15.4342 39.1381 15.4939 39.7204 15.3784C40.3028 15.2628 40.8378 14.9773 41.2577 14.5579C41.6777 14.1385 41.9638 13.6041 42.0799 13.0222C42.1959 12.4403 42.1367 11.8371 41.9097 11.2888C41.6828 10.7406 41.2982 10.2719 40.8047 9.94202C40.3112 9.61218 39.7309 9.436 39.1372 9.43576H39.136C38.3402 9.43613 37.5771 9.75216 37.0142 10.3144C36.4514 10.8767 36.1349 11.6392 36.1342 12.4346ZM15.6765 46.1302C13.2377 46.0192 11.9121 45.6132 11.0311 45.2702C9.86323 44.8158 9.02993 44.2746 8.15381 43.4002C7.27768 42.5258 6.73536 41.6938 6.28269 40.5266C5.93928 39.6466 5.53304 38.3214 5.42217 35.884C5.3009 33.2488 5.27668 32.4572 5.27668 25.781C5.27668 19.1048 5.3029 18.3154 5.42217 15.678C5.53324 13.2406 5.94248 11.918 6.28269 11.0354C6.73736 9.86816 7.27888 9.03536 8.15381 8.15976C9.02873 7.28416 9.86123 6.74216 11.0311 6.28976C11.9117 5.94656 13.2377 5.54056 15.6765 5.42976C18.3133 5.30856 19.1054 5.28436 25.7826 5.28436C32.4598 5.28436 33.2527 5.31056 35.8916 5.42976C38.3305 5.54076 39.6539 5.94976 40.537 6.28976C41.7049 6.74216 42.5382 7.28536 43.4144 8.15976C44.2905 9.03416 44.8308 9.86816 45.2855 11.0354C45.6289 11.9154 46.0351 13.2406 46.146 15.678C46.2673 18.3154 46.2915 19.1048 46.2915 25.781C46.2915 32.4572 46.2673 33.2466 46.146 35.884C46.0349 38.3214 45.6267 39.6462 45.2855 40.5266C44.8308 41.6938 44.2893 42.5266 43.4144 43.4002C42.5394 44.2738 41.7049 44.8158 40.537 45.2702C39.6565 45.6134 38.3305 46.0194 35.8916 46.1302C33.2549 46.2514 32.4628 46.2756 25.7826 46.2756C19.1024 46.2756 18.3125 46.2514 15.6765 46.1302ZM15.4694 0.932162C12.8064 1.05336 10.9867 1.47536 9.39755 2.09336C7.75177 2.73156 6.35853 3.58776 4.9663 4.97696C3.57406 6.36616 2.71955 7.76076 2.08097 9.40556C1.46259 10.9948 1.04034 12.8124 0.919069 15.4738C0.795795 18.1394 0.767578 18.9916 0.767578 25.7808C0.767578 32.57 0.795795 33.4222 0.919069 36.0878C1.04034 38.7494 1.46259 40.5668 2.08097 42.156C2.71955 43.7998 3.57426 45.196 4.9663 46.5846C6.35833 47.9732 7.75177 48.8282 9.39755 49.4682C10.9897 50.0862 12.8064 50.5082 15.4694 50.6294C18.138 50.7506 18.9893 50.7808 25.7826 50.7808C32.5759 50.7808 33.4286 50.7526 36.0958 50.6294C38.759 50.5082 40.5774 50.0862 42.1676 49.4682C43.8124 48.8282 45.2066 47.9738 46.5989 46.5846C47.9911 45.1954 48.8438 43.7998 49.4842 42.156C50.1026 40.5668 50.5268 38.7492 50.6461 36.0878C50.7674 33.4202 50.7956 32.57 50.7956 25.7808C50.7956 18.9916 50.7674 18.1394 50.6461 15.4738C50.5248 12.8122 50.1026 10.9938 49.4842 9.40556C48.8438 7.76176 47.9889 6.36836 46.5989 4.97696C45.2088 3.58556 43.8124 2.73156 42.1696 2.09336C40.5775 1.47536 38.7588 1.05136 36.0978 0.932162C33.4306 0.810962 32.5779 0.780762 25.7846 0.780762C18.9913 0.780762 18.138 0.808962 15.4694 0.932162Z" fill="">
                          </path>
                          <path d="M17.4456 25.7808C17.4456 21.1786 21.1776 17.4468 25.7826 17.4468C30.3875 17.4468 34.1216 21.1786 34.1216 25.7808C34.1216 30.383 30.3875 34.1148 25.7826 34.1148C21.1776 34.1148 17.4456 30.383 17.4456 25.7808ZM12.9377 25.7808C12.9377 32.8708 18.6883 38.618 25.7826 38.618C32.8768 38.618 38.6275 32.8708 38.6275 25.7808C38.6275 18.6908 32.8768 12.9436 25.7826 12.9436C18.6883 12.9436 12.9377 18.6908 12.9377 25.7808ZM36.1342 12.4346C36.1339 13.0279 36.3098 13.608 36.6394 14.1015C36.9691 14.595 37.4377 14.9797 37.9861 15.2069C38.5346 15.4342 39.1381 15.4939 39.7204 15.3784C40.3028 15.2628 40.8378 14.9773 41.2577 14.5579C41.6777 14.1385 41.9638 13.6041 42.0799 13.0222C42.1959 12.4403 42.1367 11.8371 41.9097 11.2888C41.6828 10.7406 41.2982 10.2719 40.8047 9.94202C40.3112 9.61218 39.7309 9.436 39.1372 9.43576H39.136C38.3402 9.43613 37.5771 9.75216 37.0142 10.3144C36.4514 10.8767 36.1349 11.6392 36.1342 12.4346ZM15.6765 46.1302C13.2377 46.0192 11.9121 45.6132 11.0311 45.2702C9.86323 44.8158 9.02993 44.2746 8.15381 43.4002C7.27768 42.5258 6.73536 41.6938 6.28269 40.5266C5.93928 39.6466 5.53304 38.3214 5.42217 35.884C5.3009 33.2488 5.27668 32.4572 5.27668 25.781C5.27668 19.1048 5.3029 18.3154 5.42217 15.678C5.53324 13.2406 5.94248 11.918 6.28269 11.0354C6.73736 9.86816 7.27888 9.03536 8.15381 8.15976C9.02873 7.28416 9.86123 6.74216 11.0311 6.28976C11.9117 5.94656 13.2377 5.54056 15.6765 5.42976C18.3133 5.30856 19.1054 5.28436 25.7826 5.28436C32.4598 5.28436 33.2527 5.31056 35.8916 5.42976C38.3305 5.54076 39.6539 5.94976 40.537 6.28976C41.7049 6.74216 42.5382 7.28536 43.4144 8.15976C44.2905 9.03416 44.8308 9.86816 45.2855 11.0354C45.6289 11.9154 46.0351 13.2406 46.146 15.678C46.2673 18.3154 46.2915 19.1048 46.2915 25.781C46.2915 32.4572 46.2673 33.2466 46.146 35.884C46.0349 38.3214 45.6267 39.6462 45.2855 40.5266C44.8308 41.6938 44.2893 42.5266 43.4144 43.4002C42.5394 44.2738 41.7049 44.8158 40.537 45.2702C39.6565 45.6134 38.3305 46.0194 35.8916 46.1302C33.2549 46.2514 32.4628 46.2756 25.7826 46.2756C19.1024 46.2756 18.3125 46.2514 15.6765 46.1302ZM15.4694 0.932162C12.8064 1.05336 10.9867 1.47536 9.39755 2.09336C7.75177 2.73156 6.35853 3.58776 4.9663 4.97696C3.57406 6.36616 2.71955 7.76076 2.08097 9.40556C1.46259 10.9948 1.04034 12.8124 0.919069 15.4738C0.795795 18.1394 0.767578 18.9916 0.767578 25.7808C0.767578 32.57 0.795795 33.4222 0.919069 36.0878C1.04034 38.7494 1.46259 40.5668 2.08097 42.156C2.71955 43.7998 3.57426 45.196 4.9663 46.5846C6.35833 47.9732 7.75177 48.8282 9.39755 49.4682C10.9897 50.0862 12.8064 50.5082 15.4694 50.6294C18.138 50.7506 18.9893 50.7808 25.7826 50.7808C32.5759 50.7808 33.4286 50.7526 36.0958 50.6294C38.759 50.5082 40.5774 50.0862 42.1676 49.4682C43.8124 48.8282 45.2066 47.9738 46.5989 46.5846C47.9911 45.1954 48.8438 43.7998 49.4842 42.156C50.1026 40.5668 50.5268 38.7492 50.6461 36.0878C50.7674 33.4202 50.7956 32.57 50.7956 25.7808C50.7956 18.9916 50.7674 18.1394 50.6461 15.4738C50.5248 12.8122 50.1026 10.9938 49.4842 9.40556C48.8438 7.76176 47.9889 6.36836 46.5989 4.97696C45.2088 3.58556 43.8124 2.73156 42.1696 2.09336C40.5775 1.47536 38.7588 1.05136 36.0978 0.932162C33.4306 0.810962 32.5779 0.780762 25.7846 0.780762C18.9913 0.780762 18.138 0.808962 15.4694 0.932162Z" fill="">
                          </path>
                          <defs>
                            <radialGradient
                              id="paint0_radial_7092_54404" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(7.41436 51.017) scale(65.31 65.2708)">
                              <stop offset="0.09" ></stop>
                              <stop offset="0.78" ></stop>
                            </radialGradient>
                            <radialGradient
                              id="paint1_radial_7092_54404" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(31.1086 53.257) scale(51.4733 51.4424)">
                              <stop offset="0.64"></stop>
                              <stop offset="1" ></stop>

                            </radialGradient>
                          </defs>
                        </svg>
                        <div
                          className="absolute top-full left-0 w-full h-full rounded-full bg-gradient-to-bl from-purple-500 via-pink-500 to-yellow-500 z-0 transition-all duration-500 group-hover:top-0">
                        </div>
                      </a>
                    </button>

                    <button
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      data-aos-delay="600"
                      className="w-10 h-10 flex items-center relative overflow-hidden justify-center rounded-full bg-transparent shadow-md shadow-gray-200 group transition-all duration-300 aos-init aos-animate">
                      <a href="https://www.linkedin.com/in/rajbinbk" target="_blank">
                        <svg className="relative z-10 transition-all duration-300 fill-white" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 72 72" fill="none">
                          <path d="M24.7612 55.999V28.3354H15.5433V55.999H24.7621H24.7612ZM20.1542 24.5591C23.3679 24.5591 25.3687 22.4348 25.3687 19.7801C25.3086 17.065 23.3679 15 20.2153 15C17.0605 15 15 17.065 15 19.7799C15 22.4346 17.0001 24.5588 20.0938 24.5588H20.1534L20.1542 24.5591ZM29.8633 55.999H39.0805V40.5521C39.0805 39.7264 39.1406 38.8985 39.3841 38.3088C40.0502 36.6562 41.5668 34.9455 44.1138 34.9455C47.4484 34.9455 48.7831 37.4821 48.7831 41.2014V55.999H58V40.1376C58 31.6408 53.4532 27.6869 47.3887 27.6869C42.4167 27.6869 40.233 30.4589 39.0198 32.347H39.0812V28.3364H29.8638C29.9841 30.9316 29.8631 56 29.8631 56L29.8633 55.999Z" fill="">
                          </path>
                        </svg>
                        <div className="absolute top-full left-0 w-full h-full rounded-full bg-[#006699] z-0 transition-all duration-500 group-hover:top-0">
                        </div>
                      </a>
                    </button>

                    <button
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      data-aos-delay="700"
                      className="w-10 h-10 flex items-center justify-center relative overflow-hidden rounded-full bg-transparent shadow-md shadow-gray-200 group transition-all duration-300 aos-init aos-animate">
                      <a href="https://github.com/Rajbin-BK" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" className="relative z-10 transition-all duration-300" width="28" height="28" fill="white">
                        <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z">
                        </path>
                      </svg>
                        <div className="absolute top-full left-0 w-full h-full rounded-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-black via-black to-red-600 z-0 transition-all duration-500 group-hover:top-0">
                        </div>
                      </a>
                    </button>
                    <button
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      data-aos-delay="800"
                      className="w-10 h-10 flex relative overflow-hidden items-center justify-center rounded-full bg-white shadow-md bg-opacity-0 shadow-gray-200 group transition-all duration-500 aos-init aos-animate">
                      <a href="mailto:rajbinsen1390@gmail.com" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" className="relative z-10 transition-all duration-300" width="28" height="28" viewBox="0 0 54 41" fill="none">
                        <path d="M4.00654 40.1236H12.4893V19.5227L0.371094 10.4341V36.4881C0.371094 38.4997 2.00099 40.1236 4.00654 40.1236Z" fill="#4285F4">
                        </path>
                        <path d="M41.5732 40.1236H50.056C52.0676 40.1236 53.6914 38.4937 53.6914 36.4881V10.4341L41.5732 19.5227" fill="#34A853">
                        </path>
                        <path d="M41.5732 3.7693V19.5229L53.6914 10.4343V5.58702C53.6914 1.09118 48.5594 -1.47181 44.9663 1.22448" fill="#FBBC04">
                        </path>
                        <path d="M12.4893 19.5227V3.76904L27.0311 14.6754L41.5729 3.76904V19.5227L27.0311 30.429" fill="#EA4335">
                        </path>
                        <path d="M0.371094 5.58702V10.4343L12.4893 19.5229V3.7693L9.09617 1.22448C5.49708 -1.47181 0.371094 1.09118 0.371094 5.58702Z" fill="#C5221F">
                        </path>
                      </svg>
                        <div className="absolute top-full left-0 w-full h-full rounded-full bg-white z-0 transition-all duration-500 group-hover:top-0">
                        </div>
                      </a>
                    </button>
                  </div>
                </div>

              </div>

              {/* right */}
              <div className='flex-1 relative'>
                <section className="bg-slate-800 m-9 rounded-xl">
                  <div className="py-1 lg:py-2 px-4  max-w-screen-md">
                    <form action="#" className="space-y-4" ref={form} onSubmit={sendEmail}>
                      <div>
                        <label
                          data-aos="fade-right"
                          data-aos-duration="1000"
                          data-aos-delay="200"
                          htmlFor="name"
                          className="block mb-2 text-sm font-medium text-white"
                        >
                          Your Name
                        </label>
                        <input
                          data-aos="fade-left"
                          data-aos-duration="1000"
                          data-aos-delay="200"
                          type="text"
                          value={name}
                          name="user_name"
                          id="name"
                          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                          placeholder="full name"
                          required
                        />
                      </div>
                      <div>
                        <label
                          data-aos="fade-right"
                          data-aos-duration="1000"
                          data-aos-delay="400"
                          htmlFor="email"
                          className="block mb-2 text-sm font-medium text-white"
                        >
                          Your email
                        </label>
                        <input
                          data-aos="fade-left"
                          data-aos-duration="1000"
                          data-aos-delay="400"
                          type="email"
                          value={email}
                          id="email"
                          name="user_email"
                          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                          placeholder="name@gmail.com"
                          required
                        />
                      </div>

                      <div>
                        <label
                          data-aos="fade-right"
                          data-aos-duration="1000"
                          data-aos-delay="800"
                          htmlFor="subject"
                          className="block mb-2 text-sm font-medium text-white"
                        >
                          Subject
                        </label>
                        <input
                          data-aos="fade-left"
                          data-aos-duration="1000"
                          data-aos-delay="800"
                          type="text"
                          value={subject}
                          id="subject"
                          name="subjects"
                          className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                          placeholder="Let us know how we can help you"
                          required
                        />
                      </div>

                      <div className="sm:col-span-2">
                        <label
                          data-aos="fade-right"
                          data-aos-duration="1000"
                          data-aos-delay="1000"
                          htmlFor="message"
                          className="block mb-2 text-sm font-medium text-white"
                        >
                          Your message
                        </label>
                        <textarea
                          data-aos="fade-up"
                          data-aos-duration="1000"
                          data-aos-delay="1000"
                          id="message"
                          value={message}
                          name="message"
                          rows="6"
                          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          placeholder="Leave a comment..."
                        ></textarea>
                      </div>

                      <div className="flex justify-end">
  <button
    data-aos="zoom-in"
    data-aos-duration="1000"
    data-aos-delay="200"
    type="submit"
    className="
      flex items-center 
      py-2 px-4 text-sm sm:py-3 sm:px-5 sm:text-md 
      text-white font-bold 
      rounded-lg 
      bg-primary-700 
      sm:w-auto 
      hover:bg-primary-800 
      focus:ring-4 focus:outline-none focus:ring-primary-300 
      dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 
      border-gray-400 border-2 hover:bg-blue-800 
      transition-all
    "
  >
    Send
    <SendHorizontal className="ml-1" />
  </button>
</div>

                    </form>

                  </div>
                  {success && (
                    <div className="toast toast-top toast-center z-50">
                      <div className="alert alert-success">
                        <span>Message sent successfully.</span>
                      </div>
                    </div>
                  )}
                </section>
              </div>
            </div>
          </div>
        </div>

        <Footer />

      </div>
     
    </div>
  )
}

export default Contact;
