// @ts-nocheck
import React from 'react'

export const Skills = () => {
  return (
    <div
className="mt-8 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2"
data-aos="fade-left"
  data-aos-offset="200"
  data-aos-easing="ease-in-sine">
    <div className="col-span-1 flex justify-center py-8 px-8 bg-white dark:bg-slate-800 rounded-lg ring-1 ring-slate-900/5 shadow-xl hover:transition duration-500 hover:scale-125">
      <img
        className="max-h-12  rounded-full transform motion-safe:hover:scale-110"
        src="./img/simon.png"
        alt="Html"
      />
    </div>
    <div className="col-span-1 flex justify-center py-8 px-8 bg-white dark:bg-slate-800 rounded-lg ring-1 ring-slate-900/5 shadow-xl hover:transition duration-500 hover:scale-125">
      <img className="max-h-12  rounded-full transform motion-safe:hover:scale-110" src="./img/css.png" alt="Css-tailwindcss-chakra-ui-boostrap-scss" />
    </div>
    <div className="col-span-1 flex justify-center py-8 px-8 bg-white dark:bg-slate-800 rounded-lg ring-1 ring-slate-900/5 shadow-xl hover:transition duration-500 hover:scale-125">
      <img className="max-h-12  rounded-full transform motion-safe:hover:scale-110" src="./img/javascript.png" alt="JavaScript" />
    </div>
    <div className="col-span-1 flex justify-center py-8 px-8 bg-white dark:bg-slate-800 rounded-lg ring-1 ring-slate-900/5 shadow-xl hover:transition duration-500 hover:scale-125">
      <img
        className="max-h-12  rounded-full transform motion-safe:hover:scale-110"
        src="./img/node.png"
        alt="Nodejs"
      />
    </div>
    <div className="col-span-1 flex justify-center py-8 px-8 bg-white dark:bg-slate-800 rounded-lg ring-1 ring-slate-900/5 shadow-xl hover:transition duration-500 hover:scale-125">
      <img
        className="max-h-12  rounded-full transform motion-safe:hover:scale-110"
        src="./img/meteor.png"
        alt="Meteorjs"
      />
    </div>
    <div className="col-span-1 flex justify-center py-8 px-8 bg-white dark:bg-slate-800 rounded-lg ring-1 ring-slate-900/5 shadow-xl hover:transition duration-500 hover:scale-125">
      <img
        className="max-h-12  rounded-full transform motion-safe:hover:scale-110"
        src="./img/firebase.png"
        alt="Statamic"
      />
    </div>
 
  <div className="w-full">
          <div className="lottie">
            <lottie-player
              src="https://assets8.lottiefiles.com/packages/lf20_ml0yft0o.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></lottie-player>
          </div>
        </div>
        </div>
  )
}

