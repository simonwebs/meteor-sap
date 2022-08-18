// @ts-nocheck
import React from 'react';

export const Skills = () => {
  return (
    <>
      <section className="bg-transparent shadow-cyan-900/50 dark:bg-slate-700 shadow-md">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-14 lg:px-8 mt-20">
          <h2 className="text-4xl font-bold text-center dark:text-white">
            Skills
          </h2>
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center mt-16">
            <div>
              <h2
                className="text-3xl font-extrabold dark:text-sky-400 sm:text-4xl"
                data-aos="fade-right"
              >
                My skills and experience.
              </h2>
              <p
                className="mt-3 max-w-3xl text-left text-lg text-slate-900 dark:text-slate-200"
                data-aos="fade-left"
              >
                I have skills in HTML, css/scss, JavaScript, Meteor.js, Node.js,
                MongoDB, React, Chakra-ui, Tailwindcss, Bootstrap, blaze,
                firebase and basic knowledge in Swift. I have been doing these
                since the year 2020 January.
              </p>
              <div className="mt-8 sm:flex" data-aos="zoom-in-right"></div>
            </div>
            <div
              className="mt-8 grid grid-cols-3 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2"
              data-aos="fade-right"
            >
              <div className="col-span-1 flex justify-center py-8 px-8 bg-white dark:bg-slate-800 rounded-lg ring-1 ring-slate-900/5 shadow-xl hover:transition duration-500 hover:scale-125">
                <a href="https://html.spec.whatwg.org/multipage">
                  <img
                    className="max-h-12  rounded-full transform motion-safe:hover:scale-110"
                    src="./img/html.png"
                    alt="Html5-semantic"
                  />
                </a>
              </div>
              <div className="col-span-1 flex justify-center py-8 px-8 bg-white dark:bg-slate-800 rounded-lg ring-1 ring-slate-900/5 shadow-xl hover:transition duration-500 hover:scale-125">
                <a href="https://www.w3.org/Style/CSS">
                  <img
                    className="max-h-12  rounded-full transform motion-safe:hover:scale-110"
                    src="./img/css.png"
                    alt="Css-tailwindcss-chakra-ui-boostrap-scss"
                  />
                </a>
              </div>
              <div className="col-span-1 flex justify-center py-8 px-8 bg-white dark:bg-slate-800 rounded-lg ring-1 ring-slate-900/5 shadow-xl hover:transition duration-500 hover:scale-125">
                <a href="https://www.javascript.com">
                  <img
                    className="max-h-12  rounded-full transform motion-safe:hover:scale-110"
                    src="./img/javascript.png"
                    alt="JavaScript"
                  />
                </a>
              </div>
              <div className="col-span-1 flex justify-center py-8 px-8 bg-white dark:bg-slate-800 rounded-lg ring-1 ring-slate-900/5 shadow-xl hover:transition duration-500 hover:scale-125">
                <a href="https://nodejs.org">
                  <img
                    className="max-h-12  rounded-full transform motion-safe:hover:scale-110"
                    src="./img/node.png"
                    alt="Nodejs"
                  />
                </a>
              </div>
              <div className="col-span-1 flex justify-center py-8 px-8 bg-white dark:bg-slate-800 rounded-lg ring-1 ring-slate-900/5 shadow-xl hover:transition duration-500 hover:scale-125">
                <a href="https://university.meteor.com/courses">
                  <img
                    className="max-h-12  rounded-full transform motion-safe:hover:scale-110"
                    src="./img/meteor.png"
                    alt="Meteorjs-meteor-university-101"
                  />
                </a>
              </div>
              <div className="col-span-1 flex justify-center py-8 px-8 bg-white dark:bg-slate-800 rounded-lg ring-1 ring-slate-900/5 shadow-xl hover:transition duration-500 hover:scale-125">
                <a href="https://tailwindui.com">
                  <img
                    className="max-h-12  rounded-full transform motion-safe:hover:scale-110"
                    src="./img/tailwind-css-logo-5AD4175897-seeklogo.com.png"
                    alt="tailwindcss-tailwindui"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
