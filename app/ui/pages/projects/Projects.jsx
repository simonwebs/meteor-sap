// @ts-nocheck
import React, { useEffect } from 'react';
import { Fragment } from 'react';
import { Tab } from '@headlessui/react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const tabs = [
  {
    name: 'Expenses Tracker',
    features: [
      {
        name: 'MongoDB. Express, React, Node.js',
        description:
          'This app is developed with Node.js, React, Tailwindcss, mongoDB and Ant Design. The demo at heroku is used by Cedar Christian Bilingual School to track their income and expenses.',
        imageSrc:
          './img/tracker.png',
        imageAlt:
          'swed-money-simon-agbey.',
          link1: 'Click here to see live demo',
      },
    ],
  },
  {
    name: 'LSMS',
    features: [
      {
        name: 'Meteor, React, Tailwind',
        description:
          'This app was developed with Node.js, React, Tailwindcss, mongoDB and Ant Design. It is used by Cedar Christian Bilingual School to track their income and expenses.',
        imageSrc:
        './img/tracker.png',
        imageAlt:
          'Walnut organizer base with pen, sticky note, phone, and bin trays, next to modular drink coaster attachment.',
          link2: 'Click here to see live demo',
      },
    ],
  },
  {
    name: 'MEMBERSHIP',
    features: [
      {
        name: 'Meteor + React + Tailwind-ui',
        description:
          "Our customers use Organize throughout the house to bring efficiency to many daily routines. Enjoy Organize in your workspace, kitchen, living room, entry way, garage, and more. We can't wait to see how you'll use it!",
        imageSrc:
        './img/tracker.png',
        imageAlt:
          'Walnut organizer base with white polycarbonate trays in the kitchen with various kitchen utensils.',
          link3: 'Click here to see live demo',
         
      },
    ],
  },
  {
    name: 'Quiz App',
    features: [
      {
        name: 'Meteor + React',
        description:
          'The Organize base set includes the pen, phone, small, and large trays to help you group all your essential items. Expand your set with the drink coaster and headphone stand add-ons.',
        imageSrc:
        './img/tracker.png',
        imageAlt:
          'Walnut organizer system on black leather desk mat on top of white desk.',
          link4: 'Click here to see live demo',
      },
    ],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export const Projects = () => {
  useEffect(() => {
    AOS.init(
      {
        delay: 200,
        duration: 1200,
        once: false,
        // @ts-ignore
      },
      []
    );
  });
  return (
    <div className="bg-slate-700  dark:bg-slate-900 shadow-sm shadow-cyan-900/50">
      <section
        aria-labelledby="features-heading"
        className="max-w-6xl mx-auto py-32 sm:px-2 lg:px-8"
      >
        <div className="max-w-2xl mx-auto px-4 lg:px-0 lg:max-w-none">
          <div className="max-w-3xl">
            <h2
              id="features-heading"
              className="text-4xl font-bold text-center text-white dark:text-white"
              data-aos="flip-left"
            >
              Projects
            </h2>
            <p className="mt-4 text-slate-50 dark:text-gray-50">
              These are some of the projects am working on.
            </p>
          </div>

          <Tab.Group as="div" className="mt-4" data-aos="fade-left">
            <div className="-mx-4 flex overflow-x-auto sm:mx-0">
              <div className="flex-auto px-4 border-b border-sky-200 sm:px-0">
                <Tab.List className="-mb-px flex space-x-10">
                  {tabs.map(tab => (
                    <Tab
                      key={tab.name}
                      className={({ selected }) =>
                        classNames(
                          selected
                            ? 'border-sky-400 text-sky-50 dark:text-sky-400'
                            : ' text-white dark:text-gray-200 hover:text-sky-400',
                          'whitespace-nowrap py-6 border-b-2 font-medium text-sm'
                        )
                      }
                    >
                      {tab.name}
                    </Tab>
                  ))}
                </Tab.List>
              </div>
            </div>

            <Tab.Panels as={Fragment}>
              {tabs.map(tab => (
                <Tab.Panel key={tab.name} className="space-y-16 pt-10 lg:pt-16">
                  {tab.features.map(feature => (
                    <div
                      key={feature.name}
                      className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8"
                    >
                      <div className="mt-6 lg:mt-0 lg:col-span-5 hover:transition duration-500 hover:scale-125">
                        <h3 className="text-lg font-medium text-sky-400 dark:text-sky-400">
                          {feature.name}
                        </h3>
                        <p className="mt-2 text-sm text-gray-50 dark:text-slate-300">
                          {feature.description}
                        </p>
                        
                        <p className="mt-2 text-md text-sky-500 dark:text-sky-500 hover:underline decoration-3 decoration-pink-500 underline-offset-8">
                       
                        <a href='http://swed-money.herokuapp.com/register'>
                        {feature.link1}
                       </a>
                     
                        </p>
                        <p className="mt-2 text-sm text-sky-500 dark:text-sky-500 hover:underline decoration-3 decoration-pink-500 underline-offset-8">
                        <a href='projects'>
                        {feature.link2}
                       </a>
                        </p>
                        <p className="mt-2 text-sm text-sky-500 dark:text-sky-500 hover:underline decoration-3 decoration-pink-500 underline-offset-8">
                        <a href='projects'>
                        {feature.link3}
                       </a>
                        </p>
                        <p className="mt-2 text-sm text-sky-500 dark:text-sky-500 hover:underline decoration-3 decoration-pink-500 underline-offset-8">
                        <a href='projects'>
                        {feature.link4}
                       </a>
                        </p>
                      </div>
                      <div className="lg:col-span-7">
                        <div className="group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:relative sm:aspect-none sm:h-full hover:transition duration-500 hover:scale-125">
                          <img
                            src={feature.imageSrc}
                            alt={feature.imageAlt}
                            className="object-center object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </section>
    </div>
  );
};
