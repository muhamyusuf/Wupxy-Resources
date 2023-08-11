'use client';

import React, { useState } from 'react';

import SideBar from '@/components/SideBar';

const chooseComponents = [
  {
    name: 'UI Elements',
    description:
      'Collections that are used to construct a user interface. Include buttons, checkboxes, icons, etc.',
  },
  {
    name: 'Sections',
    description:
      'Sections are the building blocks of a website. Like a hero, navbar, footer, features, pricing, etc.',
  },
];

export default function ComponentsPage() {
  const [components, setComponents] = useState('UI Elements');

  return (
    <section>
      <div>
        <h1>
          Make your own components <br /> with copy and paste
        </h1>
      </div>

      <div className="flex items-baseline gap-2 mt-10 overflow-scroll md:gap-8 md:overflow-hidden">
        {chooseComponents.map((component, index) => (
          <button
            key={index}
            onClick={() => setComponents(component.name)}
            className="flex-shrink-0 transition duration-300 ease-out rounded-md md:py-1 md:hover:bg-gray/10"
          >
            <div className="flex flex-col items-start md:max-w-[300px] lg:max-w-[400px]">
              <h2
                className={`${
                  components === component.name &&
                  'text-army dark:text-armyLight'
                }`}
              >
                {component.name}
              </h2>

              <div
                className={`${
                  components === component.name
                    ? 'bg-army dark:bg-armyLight'
                    : 'bg-gray'
                } w-full h-1`}
              />

              <p className="hidden mt-5 text-start md:inline">
                {component.description}
              </p>
            </div>
          </button>
        ))}
      </div>

      <div className="block mt-5 md:hidden">
        {components === 'UI Elements' && (
          <p>
            Collections that are used to construct a user interface. Include
            buttons, checkboxes, icons, etc.
          </p>
        )}
        {components === 'Sections' && (
          <p>
            Sections are the building blocks of a website. Like a hero,
            features, pricing, etc.
          </p>
        )}
      </div>

      <div className="mt-10">
        <SideBar component={components} />
      </div>
    </section>
  );
}
