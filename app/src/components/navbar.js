import { useState } from 'react';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'About Us', href: '#about', current: false },
  { name: 'Service', href: '#services', current: false },
  { name: 'Contact', href: '#contact', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative top-0 left-0 right-0 z-50 bg-gray-800 text-white shadow-md border-b border-gray-200">
      <Disclosure as="nav" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {({ open }) => (
          <>
            <div className="relative flex items-center justify-between h-16">
              <div className="flex items-center justify-start flex-1">
                <img
                  className="h-12 w-auto ml-4"
                  src="../../logo_white-removebg-preview.png"
                  alt="Your Company"
                />
              </div>
              <div className="hidden sm:flex sm:items-center sm:justify-end flex-1">
                <div className="relative flex space-x-4 mr-4">
                  {navigation.map((item, index) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => setActiveIndex(index)}
                      className={classNames(
                        'text-white hover:bg-gray-700 hover:text-white relative px-3 py-2 text-sm font-medium',
                        activeIndex === index ? 'after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-500 after:transition-all' : ''
                      )}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
              <div className="sm:hidden flex items-center">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-gray-100 hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item, index) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    onClick={() => setActiveIndex(index)}
                    className={classNames(
                      'text-white hover:bg-gray-100 hover:text-black block rounded-md px-3 py-2 text-base font-medium',
                      activeIndex === index ? 'relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-500 after:transition-all' : ''
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}
