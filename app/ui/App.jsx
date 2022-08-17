// @ts-nocheck
import React from 'react';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { Outlet } from 'react-router-dom';

export const App = () => { 
   
      return (
        <div className="flex flex-col min-h-screen dark:bg-slate-700">
          <Header />
          <div className="grow">
            <Outlet />
          </div>
          <Footer/>
        </div>
      );
      }
    