// @ts-nocheck
import React, { Fragment } from 'react';
import { BrowserRouter, Routes as ReactRoutes, Route, Outlet , Navigate} from 'react-router-dom';
import { App } from '../../App'
import { RoutePaths } from './RoutePaths';
import { NotFound } from '../../pages/notFound/NotFound';
import { Home } from '../../pages/home/Home';
import { About } from '../../pages/about/About';
import { Contact } from '../../pages/contact/Contact';
import { Testimonials } from '../../pages/testimonial/Testimonials';
import { ContactList } from '../../pages/contact/ContactList';
import  { LoginForm } from '../../auth/LoginForm ';


const ProtectedRoute = ({ user, redirectPath = '/loginPage' }) => {
  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};

  export const MainRoutes = () => {
   
  return (
    <Fragment>
    
    <BrowserRouter>
      
      <ReactRoutes>
           <Route path={RoutePaths.ROOT} element={<App />}>
             <Route index element={<Home />} />
             <Route element={<LoginForm />} path={RoutePaths.LOGINFORM} />
            <Route element={<ContactList/>} path={RoutePaths.CONTACTLIST} />
            <Route element={<Testimonials/>} path={RoutePaths.TESTIMONIALS} />
            <Route element={<About/>} path={RoutePaths.ABOUT} />
            <Route element={<Contact/>} path={RoutePaths.CONTACT} />
            <Route path="*" element={<NotFound />} />
            </Route>
         </ReactRoutes>
       
    </BrowserRouter>
  </Fragment>
    );
   }