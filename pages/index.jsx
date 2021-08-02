import Head from "next/head";
import axios from "axios";

import { useEffect, useState } from "react";
import "three-dots/dist/three-dots.css";

import {
  Navbar,
  Search,
  Overview,
  DayCards,
  SunRiseSet,
  Footer,
  Toast,
} from "../components";

export default function Home() {
  const [place, setPlace] = useState("New York, US");
  const [weatherData, setWeatherData] = useState(null);
  const [unitIsF, setUnitIsF] = useState(true);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchWeatherData = (place) => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${place}&cnt=7&appid=${process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY}&units=imperial`
      )
      .then(({ data }) => {
        setPlace(place);
        setWeatherData(data);
        setLoading(false);
      })
      .catch((err) => {
        if (err.message.includes("404")) {
          setPlace("New York, US");
          setError(true);
        }

        setLoading(false);
        setTimeout(() => {
          setError(false);
        }, 5000);
      });
  };

  useEffect(() => {
    fetchWeatherData(place);
  }, []);

  return !loading ? (
    <>
      <Head>
        <title>Home | Flizzard</title>
        <link rel="icon" href="/Flizzard-Logo.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Montserrat:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="app text-base-content font-inter overflow-x-hidden">
        <Navbar />
        <Search
          onChange={(value) => setPlace(value)}
          onConfirm={(value) => {
            fetchWeatherData(value);
            console.log(value);
          }}
        />
        <Overview
          weatherData={weatherData}
          unitIsF={unitIsF}
          onUnitIsFChange={() => setUnitIsF(!unitIsF)}
        />
        <SunRiseSet
          sunrise={weatherData?.city.sunrise}
          sunset={weatherData?.city.sunset}
        />
        <DayCards weatherData={weatherData} unitIsF={unitIsF} />
        {error && (
          <Toast title="Error" type="error">
            There was an error while fetching that place!
          </Toast>
        )}
      </div>
      <Footer />
    </>
  ) : (
    <div className="h-screen flex justify-center items-center">
      <div className="bg-primary p-2 w-4 h-4 rounded-full animate-bounce mx-1"></div>
      <div className="bg-primary p-2 w-4 h-4 rounded-full animate-bounce mx-1"></div>
      <div className="bg-primary p-2 w-4 h-4 rounded-full animate-bounce mx-1"></div>
    </div>
  );
}
