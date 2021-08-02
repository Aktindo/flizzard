import { useState } from "react";

import placesJSON from "../../json/World-Places.json";

const Search = ({ onChange, onConfirm }) => {
  const [autoCompleteTriggered, setAutoCompleteTriggered] = useState(false);
  const [query, setQuery] = useState("New York, US");

  return (
    <>
      <div className="flex justify-center">
        <div className="form-control">
          <div className="relative max-w-xs mx-5 my-5">
            <input
              type="text"
              placeholder="Search for a beautiful place..."
              className="w-full pr-16 input input-primary input-bordered"
              value={query}
              onChange={(e) => {
                onChange(query);
                setQuery(e.target.value);
                setAutoCompleteTriggered(true);
              }}
            />
            <button
              className="absolute top-0 right-0 rounded-l-none btn btn-primary"
              onClick={() => onConfirm(query)}
            >
              go
            </button>
            <ul
              className={`shadow menu dropdown-content bg-base-100 rounded-box rounded-t-none max-h-80 overflow-y-scroll ${
                autoCompleteTriggered ? "block" : "hidden"
              }`}
            >
              {placesJSON
                .filter((place) =>
                  place.name.toLowerCase().includes(query.toLowerCase())
                )
                .splice(0, 3)
                .map((place, i) => (
                  <li key={i}>
                    <a
                      onClick={() => {
                        setQuery(place.name);
                        onConfirm(place.name);
                        setAutoCompleteTriggered(false);
                      }}
                    >
                      {place.name},
                      {place.subcountry ? " " + place.subcountry + ", " : ", "}
                      {place.country}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export { Search };
