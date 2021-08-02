import Image from "next/image";

import { ExternalLinkIcon } from "@heroicons/react/outline";

const Footer = () => {
  return (
    <footer className="text-gray-600 bg-base-200 body-font relative mt-32 w-full">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a
          href="/"
          className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
        >
          <div className="avatar">
            <div className="w-10 h-10 rounded-box ring ring-primary ring-offset-base-100 ring-offset-2">
              <Image
                src="/Flizzard-Logo.svg"
                alt="logo"
                width={40}
                height={40}
              />
            </div>
          </div>
          <span className="ml-3 text-xl">Flizzard</span>
        </a>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          <span className="text-gray-600 ml-1">Developed by Aktindo Inc.</span>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start w-5 h-5">
          <a
            href="https://twitter.com/aktindo"
            target="_blank"
            rel="noreferrer"
          >
            <ExternalLinkIcon />
          </a>
        </span>
      </div>
    </footer>
  );
};

export { Footer };
