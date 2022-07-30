// @ts-nocheck
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Testimonials } from '../testimonial/Testimonials';
import { Link } from 'react-router-dom';


export const Home = () => {

      useEffect(() => {
    AOS.init({
      delay: 200,
      duration: 1200,
      once: false,
    // @ts-ignore
    }, []);
   });
  return (
    <main>
      <section className="mt-16 mx-auto bg-gray-100 dark:bg-slate-900 rounded-2xl shadow-lg max-w-7xl px-4 sm:mt-24 sm:px-6 lg:mt-32">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1>
                <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl" data-aos="flip-left">
                  <span className="block text-slate-900 dark:text-white">Hello I am</span>
                  <span className="block text-cyan-600">Simon Agbey</span>
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl" data-aos="fade-left">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                fugiat veniam occaecat fugiat aliqua ad ad non deserunt sunt.
              </p>
              <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
              <div className="mt-10 mb-7 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow-lg">
                <Link
                  to="contact"
                  className="inline-flex items-center px-7 py-2 border border-transparent text-md font-medium rounded-r-full shadow-lg shadow-cyan-900/50 text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500" data-aos="fade-right"
                >
                  Hire me
                </Link>
     
              </div>
              <div className="mt-3 rounded-md sm:mt-0 sm:ml-3">
                <Link
                  to="playGround"
                  className="inline-flex items-center px-7 py-2 border border-transparent text-md font-medium rounded-r-full shadow-lg shadow-cyan-900/50 text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500" data-aos="fade-left"
                >
                  Projects
                </Link>
              </div>
            </div>
          
              </div>
            </div>
            <div className="mt-12 bg-gray-100 dark:bg-slate-900 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
           
              <div className="relative mx-auto w-full rounded-lg lg:max-w-md">
                <button
                  type="button"
                  className="relative block w-full bg-transparent rounded-2xl shadow-lg shadow-cyan-900/50  overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <span className="sr-only">Watch our video to learn more</span>
                  <img
                    className="w-full" data-aos="flip-right"
                    src="https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                    alt=""
                  />
                  <span className="absolute inset-0 w-full h-full flex items-center justify-center" aria-hidden="true">
                    <svg className="h-20 w-20 text-cyan-500" fill="currentColor" viewBox="0 0 84 84">
                      <circle opacity="0.9" cx={42} cy={42} r={42} fill="white" />
                      <path d="M55.5039 40.3359L37.1094 28.0729C35.7803 27.1869 34 28.1396 34 29.737V54.263C34 55.8604 35.7803 56.8131 37.1094 55.9271L55.5038 43.6641C56.6913 42.8725 56.6913 41.1275 55.5039 40.3359Z" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>
    <Testimonials />
 
          </main>
  )
  }