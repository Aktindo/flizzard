import { Fragment, useEffect } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { RefreshIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Router from "next/router";
import { themeChange } from "theme-change";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const navigation = [{ name: "About", href: "/about" }];

  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <Disclosure as="nav" className="bg-neutral">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="btn">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <Image
                    className="h-10 w-10"
                    src="/Flizzard-Logo.svg"
                    alt="Flizzard"
                    height={40}
                    width={40}
                  />
                  <span className="text-lg ml-2 text-white">Flizzard</span>
                </div>
                <div className="hidden sm:block sm:ml-6 mt-0.5">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          "text-gray-300 hover:bg-gray-700 hover:text-white transition duration-300",
                          "px-3 py-2 rounded-md text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  className="btn btn-circle mr-2"
                  onClick={() => Router.reload()}
                >
                  <span className="sr-only"></span>
                  <RefreshIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export { Navbar };
