// @ts-nocheck
import React, { Fragment } from 'react';
import { BrowserRouter, Routes as ReactRoutes, Route } from 'react-router-dom';
import { App } from '../../App'
import { RoutePaths } from './RoutePaths';
import { NotFound } from '../../pages/notFound/NotFound';
import { Home } from '../../pages/home/Home';
import { About } from '../../pages/about/About';
import { Contact } from '../../pages/contact/Contact';
import { Testimonials } from '../../pages/testimonial/Testimonials';
import { ContactList } from '../../pages/contact/ContactList';
import { Projects } from '../../pages/projects/Projects';
import { Skills } from '../../pages/skills/Skills';
import { Cookie } from '../../components/cookie/Cookie'
import { Privacy } from '../../components/privacy/Privacy'


export const MainRoutes = () => {
   
  return (
    <Fragment>
    <BrowserRouter>
      <ReactRoutes>
           <Route path={RoutePaths.ROOT} element={<App />}>
            <Route index element={<Home />} />
            <Route element={<ContactList/>} path={RoutePaths.CONTACTLIST} />
            <Route element={<Testimonials/>} path={RoutePaths.TESTIMONIALS} />
            <Route element={<About/>} path={RoutePaths.ABOUT} />
            <Route element={<Cookie/>} path={RoutePaths.COOKIE} />
            <Route element={<Privacy/>} path={RoutePaths.PRIVACY} />
            <Route element={<Skills/>} path={RoutePaths.SKILLS} />
            <Route element={<Projects/>} path={RoutePaths.PROJECTS} />
            <Route element={<Contact/>} path={RoutePaths.CONTACT} />
            <Route path="*" element={<NotFound />} />
            </Route>
         </ReactRoutes>
    </BrowserRouter>
  </Fragment>
    );
   }