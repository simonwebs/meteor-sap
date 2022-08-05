// @ts-nocheck
import React, { useState, useEffect } from 'react';
import { Meteor } from 'meteor/meteor';
// eslint-disable-next-line import/no-unresolved
import { ErrorAlert } from '../../components/alerts/ErrorAlert';
// eslint-disable-next-line import/no-unresolved
import { SuccessAlert } from '../../components/alerts/SuccessAlert';

import AOS from 'aos';
import 'aos/dist/aos.css';

export const Contact = () => {
  const [name, setName] = useState(''); // Formik
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // eslint-disable-next-line no-shadow
  const showError = ({ message }) => {
    setError(message);
    setTimeout(() => {
      setError('');
    }, 5000);
  };

  // eslint-disable-next-line no-shadow
  const showSuccess = ({ message }) => {
    setSuccess(message);
    setTimeout(() => {
      setSuccess('');
    }, 5000);
  };

  const saveContact = () => {
    Meteor.call(
      'contacts.insert',
      { name, email, subject, message },
      errorResponse => {
        if (errorResponse) {
          showError({ message: errorResponse.error });
        } else {
          setName('');
          setEmail('');
          setSubject('');
          setMessage('');
          showSuccess({ message: 'Contact saved.' });
        }
      }
    );
  };

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
    <>
      <div className="mt-16 relative py-4">
        <div className="absolute inset-0 flex items-center bg-transparent dark:bg-slate-900"></div>
        <div className="relative max-w-4xl mx-auto bg-transparent dark:bg-slate-900">
          <div className="relative bg-transparent dark:bg-slate-900 rounded p-8">
            <div className="max-w-6xl mx-auto z-20">
              <h2
                className="text-4xl font-bold text-center mt-20 dark:text-slate-300"
                data-aos="fade-left"
              >
                Contact Form
              </h2>
            </div>
            <form
              action=""
              id="contact"
              className="mt-20 p-4 dark:bg-slate-900 rounded-lg shadow-sm shadow-sky-400"
              data-aos="fade-up"
            >
              {error && <ErrorAlert message={error} />}
              {success && <SuccessAlert message={success} />}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium dark:text-slate-300"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Full Name"
                    autoComplete="name"
                    className="bg-white dark:bg-slate-900 shadow-md border border-sky-200 outline-none px-4 py-2 rounded-md hover:border-sky-400 focus:border-sky-400"
                    data-aos="fade-right"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium dark:text-slate-300"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Email"
                    className="bg-white dark:bg-slate-900 shadow-md border border-sky-200 outline-none px-4 py-2 rounded-md hover:border-sky-400 focus:border-sky-400"
                    data-aos="fade-left"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium dark:text-slate-300"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={subject}
                    onChange={e => setSubject(e.target.value)}
                    placeholder="Father's Name"
                    className="bg-white dark:bg-slate-900 shadow-md border border-sky-200 outline-none px-4 py-2 rounded-md hover:border-sky-400 focus:border-sky-400"
                    data-aos="fade-right"
                  />
                </div>

                <div className="sm:col-span-2">
                  <div className="flex justify-between">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium dark:text-slate-300"
                    >
                      Message
                    </label>
                    <span
                      id="message-max"
                      className="text-sm dark:text-slate-300"
                    >
                      Max. 500 characters
                    </span>
                  </div>
                  <div className="mt-1">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      onChange={e => setMessage(e.target.value)}
                      className="bg-white dark:bg-slate-900 shadow-md border border-sky-200 outline-none px-4 py-2 rounded-md hover:border-sky-400 focus:border-sky-400"
                      data-aos="fade-left"
                      aria-describedby="message-max"
                      defaultValue={''}
                    />
                  </div>
                </div>
              </div>

              <button
                onClick={saveContact}
                className="mt-4 inline-flex items-center px-7 py-2 border border-transparent text-md font-medium rounded-r-full shadow-lg shadow-cyan-900/50 text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                data-aos="fade-left"
              >
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
