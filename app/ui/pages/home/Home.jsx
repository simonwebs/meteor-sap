// @ts-nocheck
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Testimonials } from '../testimonial/Testimonials';
import { Link } from 'react-router-dom';
import { Projects } from '../projects/Projects';
import { Skills } from '../skills/Skills';
import { About } from '../about/About';
import { Contact } from '../contact/Contact';


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
      <section className="mt-20 mx-auto bg-backdrop-blur-md bg-white/30 dark:bg-slate-700 rounded-2xl dark:shadow-md dark:shadow-cyan-500/50 max-w-7xl px-4 sm:mt-24 sm:px-6 lg:mt-32">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left hover:transition duration-700 hover:scale-125">
              <h1>
                <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl" data-aos="flip-left">
                  <span className="block text-slate-900 dark:text-white">Hello, I'm</span>
                  <span className="block text-cyan-600">Simon Agbey</span>
                </span>
              </h1>
              <p className="mt-3 text-base dark:text-gray-200 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl" data-aos="fade-left">
                FullStack web developer specialist in web app.
              </p>
              <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
              <div className="mt-10 mb-7 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow-lg">
                <Link
                  to="contact"
                  className="inline-flex items-center px-7 py-2 border border-transparent text-md font-medium rounded-r-full shadow-lg shadow-cyan-900/50 text-white bg-cyan-600 hover:bg-cyan-700" data-aos="fade-right"
                >
                  Hire me
                </Link>
     
              </div>
              <div className="mt-3 rounded-md sm:mt-0 sm:ml-3">
                <Link
                  to="projects"
                  className="inline-flex items-center px-7 py-2 border border-transparent text-md font-medium rounded-r-full shadow-lg shadow-cyan-900/50 text-white bg-cyan-600 hover:bg-cyan-700" data-aos="fade-left"
                >
                  Projects
                </Link>
              </div>
            </div>
          
              </div>
            </div>
            <div className="mt-12 bg-gray-100 dark:bg-slate-700 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
           
              <div className="relative pb-10 mx-auto w-full rounded-lg lg:max-w-md hover:transition duration-700 hover:scale-125">
                <button
                  type="button"
                  className="relative block w-full bg-transparent rounded-2xl shadow-lg shadow-cyan-900/50  overflow-hidden"data-aos="zoom-in"
                >
                  <span className="sr-only">Watch my video to learn more</span>
                  <a href="about">
                  <img
                    className="w-full rounded-md transform motion-safe:hover:scale-110" data-aos="flip-right"
                    src="./img/photo-1498050108023-c5249f4df085.jpg"
                    alt="web-developer-design-unsplash-image"
                  />
                  </a>
                </button>
              </div>
            </div>
          </div>
        </section>
        <About />
        <Skills />
        <Projects />
    <Testimonials />
    <Contact />
 
          </main>
  )
  }