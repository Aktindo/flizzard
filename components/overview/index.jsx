import Image from "next/image";
import fetch from "node-fetch";

import { useState } from "react";

const Overview = ({ weatherData, unitIsF, onUnitIsFChange }) => {
  const c = (f) => (((f - 32) * 5) / 9).toFixed(2);

  return (
    weatherData && (
      <div className="grid justify-center">
        <div className="flex items-center mx-auto text-center">
          <Image
            src={`/icons/${weatherData.list[0].weather[0].icon}.png`}
            width={100}
            height={100}
          />
          <span
            className="text-primary text-3xl font-montserrat cursor-pointer"
            onClick={onUnitIsFChange}
          >
            {unitIsF
              ? weatherData.list[0].main.temp + "° F"
              : c(weatherData.list[0].main.temp) + "° C"}
          </span>
        </div>
        <div className="flex justify-center flex-row w-full">
          <div>
            <p className="text-2xl font-montserrat font-bold">
              {weatherData.city.name}, {weatherData.city.country}
            </p>
            <p className="text-gray-600 text-center">
              {weatherData.list[0].weather[0].main}
            </p>
          </div>
          <div className="divider divider-vertical"></div>
          <div>
            <p className="text-gray-600">
              Feels like{" "}
              {unitIsF
                ? weatherData.list[0].main.feels_like + "° F"
                : c(weatherData.list[0].main.feels_like) + "° C"}
            </p>
            <p className="text-gray-600">
              {weatherData.list[0].main.humidity}% Humid
            </p>
          </div>
        </div>
      </div>
    )
  );
};

export { Overview };
