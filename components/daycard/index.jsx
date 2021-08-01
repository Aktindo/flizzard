import { ArrowUpIcon, ArrowDownIcon } from "@heroicons/react/outline";

import Image from "next/image";

const DayCard = ({ day, index, days, unitIsF }) => {
  const c = (f) => (((f - 32) * 5) / 9).toFixed(2);

  return (
    <div
      key={index}
      className="day-card px-5 py-5 bg-base-200 max-w-xs m-2 rounded-box text-center"
    >
      <div className="day-card__day text-lg font-montserrat font-semibold">
        {days[index]}
      </div>
      <div className="day-card__image">
        <Image
          src={`/icons/${day.weather[0].icon}.png`}
          width={70}
          height={70}
        />
      </div>
      <div className="day-card__summary grid justify-center">
        <span className="text-gray-400">{day.weather[0].main}</span>
      </div>
      <div className="day-card__min-max grid justify-center">
        <span className="text-primary flex">
          <ArrowUpIcon className="w-4 h-6" />{" "}
          {unitIsF ? day.main.temp_max + "° F" : c(day.main.temp_max) + "° C"}
        </span>
        <span className="text-gray-600 flex">
          <ArrowDownIcon className="w-4 h-6" />{" "}
          {unitIsF ? day.main.temp_min + "° F" : c(day.main.temp_min) + "° C"}
        </span>
      </div>
    </div>
  );
};

export { DayCard };
