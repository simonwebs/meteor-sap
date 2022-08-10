import React from 'react';

const testimonials = [
  [
    {
      content:
        'There are so many things I had to do with my old software that I just don’t do at all with TaxPal. Suspicious but I can’t say I don’t love it.',
      author: {
        name: 'Erin Powlowski',
        role: 'COO at Armstrong Inc',
        imageSrc: './img/simon.png',
      },
    },
  ],
  [
    {
      content:
        'I used to have to remit tax to the EU and with TaxPal I somehow don’t have to do that anymore. Nervous to travel there now though.',
      author: {
        name: 'Peter Renolds',
        role: 'Founder of West Inc',
        imageSrc: './img/simon.png',
      },
    },
  ],
  [
    {
      content:
        'I used to have to remit tax to the EU and with TaxPal I somehow don’t have to do that anymore. Nervous to travel there now though.',
      author: {
        name: 'Peter Renolds',
        role: 'Founder of West Inc',
        imageSrc: './img/simon.png',
      },
    },
  ],
];

export const Testimonials = () => {
  return (
    <>
      <section
        aria-labelledby="testimonials-title"
        className="mt-16 bg-transparent dark:bg-slate-900  dark:text-slate-300"
        data-aos="fade-up"
      >
        <section className="py-16 bg-transparent shadow-sm shadow-cyan-900/50 dark:bg-slate-900">
          <div className="mx-auto max-w-2xl md:text-center">
            <h2 className="text-4xl font-bold text-center dark:text-white">
              Testimonals
            </h2>
          </div>
          <ul className="p-8 bg-transparent mx-auto shadow-lg mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3">
            {testimonials.map((column, columnIndex) => (
              <li key={columnIndex}>
                <ul className="space-y-6 sm:space-y-8 bg-transparent dark:slate-800">
                  {column.map((testimonial, testimonialIndex) => (
                    <li key={testimonialIndex}>
                      <figure className="relative rounded-2xl bg-transparent shadow-2xl dark:bg-slate-800 dark:text-slate-300 p-6 shadow-slate-900/10">
                        <blockquote className="relative">
                          <p className="text-lg tracking-tight dark:text-slate-300">
                            {testimonial.content}
                          </p>
                        </blockquote>
                        <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                          <div>
                            <div className="font-display text-base dark:text-slate-300">
                              {testimonial.author.name}
                            </div>
                            <div className="mt-1 text-sm dark:text-slate-300">
                              {testimonial.author.role}
                            </div>
                          </div>
                          <div className="h-14 w-14 overflow-hidden rounded-full bg-transparent">
                            <img src={testimonial.author.imageSrc} alt="" />
                          </div>
                        </figcaption>
                      </figure>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </section>
      </section>
    </>
  );
};
