// @ts-nocheck
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Testimonials } from '../testimonial/Testimonials';
import { Link } from 'react-router-dom';
import { Projects } from '../projects/Projects';
import { Skills } from '../skills/Skills';
import { About } from '../about/About';
import { Contact } from '../contact/Contact'


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
      <section className="mt-20 mx-auto bg-gray-100 dark:bg-slate-900 rounded-2xl shadow-sm shadow-cyan-900/50 max-w-7xl px-4 sm:mt-24 sm:px-6 lg:mt-32">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1>
                <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl" data-aos="flip-left">
                  <span className="block text-slate-900 dark:text-white">Hello, I'm</span>
                  <span className="block text-cyan-600">Simon Agbey</span>
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl" data-aos="fade-left">
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
            <div className="mt-12 bg-gray-100 dark:bg-slate-900 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
           
              <div className="relative pb-10 mx-auto w-full rounded-lg lg:max-w-md">
                <button
                  type="button"
                  className="relative block w-full bg-transparent rounded-2xl shadow-lg shadow-cyan-900/50  overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"data-aos="zoom-in"
                >
                  <span className="sr-only">Watch our video to learn more</span>
                  <img
                    className="w-full rounded-md" data-aos="flip-right"
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80"
                    alt="web-developer-design-unsplash-image"
                  />
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