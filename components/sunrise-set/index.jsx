import { SunIcon } from "@heroicons/react/outline";
import Image from "next/image";

const SunRiseSet = ({ sunrise, sunset }) => {
  return (
    <>
      <div className="flex justify-center my-12 font-montserrat">
        <div className="flex items-center">
          <Image
            src="/icons/SunRise.png"
            alt="Sunrise"
            className="mr-2"
            width={50}
            height={50}
          />
          <span className="text-xl md:text-2xl">
            {new Date(sunrise * 1000).toLocaleTimeString("en-US")}
          </span>
        </div>
        <div className="mx-1.5"></div>
        <div className="flex items-center">
          <Image
            src="/icons/SunSet.png"
            alt="Sunrise"
            className="mr-2"
            width={50}
            height={50}
          />
          <span className="text-xl md:text-2xl">
            {new Date(sunset * 1000).toLocaleTimeString("en-US")}
          </span>
        </div>
      </div>
    </>
  );
};

export { SunRiseSet };
