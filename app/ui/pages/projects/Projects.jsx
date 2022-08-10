import React, {useEffect} from 'react';
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
          'This app was develop with Node.js, React, Tailwindcss, mongoDB and Ant Design. It is use by Cedar Christian Bilingual School to track their income and expense.',
        imageSrc:
          'https://tailwindui.com/img/ecommerce-images/product-feature-06-detail-01.jpg',
        imageAlt:
          'Maple organizer base with slots, supporting white polycarbonate trays of various sizes.',
      },
    ],
  },
  {
    name: 'LSMS',
    features: [
      {
        name: 'Meteor, React, Tailwind',
        description:
          'This app was develop with Node.js, React, Tailwindcss and Ant Design. It is use by Cedar Christian Bilingual School to track their income and expense',
        imageSrc:
          'https://tailwindui.com/img/ecommerce-images/product-feature-06-detail-02.jpg',
        imageAlt:
          'Walnut organizer base with pen, sticky note, phone, and bin trays, next to modular drink coaster attachment.',
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
          'https://tailwindui.com/img/ecommerce-images/product-feature-06-detail-03.jpg',
        imageAlt:
          'Walnut organizer base with white polycarbonate trays in the kitchen with various kitchen utensils.',
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
          'https://tailwindui.com/img/ecommerce-images/product-feature-06-detail-04.jpg',
        imageAlt:
          'Walnut organizer system on black leather desk mat on top of white desk.',
      },
    ],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export const Projects = () => {
  useEffect(() => {
    AOS.init({
      delay: 200,
      duration: 1200,
      once: false,
      // @ts-ignore
    }, []);
  });
  return (
    <div className="bg-transparent dark:bg-slate-900 shadow-sm shadow-cyan-900/50">
      <section
        aria-labelledby="features-heading"
        className="max-w-6xl mx-auto py-32 sm:px-2 lg:px-8"
      >
        <div className="max-w-2xl mx-auto px-4 lg:px-0 lg:max-w-none">
          <div className="max-w-3xl">
            <h2
              id="features-heading"
              className="text-4xl font-bold text-center dark:text-white" data-aos="flip-left"
            >
              Projects
            </h2>
            <p className="mt-4 text-slate-500 dark:text-gray-500">
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
                            ? 'border-sky-400 text-sky-600 dark:text-sky-400'
                            : 'border-transparent dark:text-gray-200 hover:text-gray-700 hover:border-gray-300',
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
                      <div className="mt-6 lg:mt-0 lg:col-span-5">
                        <h3 className="text-lg font-medium text-gray-900 dark:text-sky-400">
                          {feature.name}
                        </h3>
                        <p className="mt-2 text-sm text-gray-500 dark:text-slate-300">
                          {feature.description}
                        </p>
                      </div>
                      <div className="lg:col-span-7">
                        <div className="aspect-w-2 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden sm:aspect-w-5 sm:aspect-h-2">
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
