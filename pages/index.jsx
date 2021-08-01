import Head from "next/head";
import fetch from "node-fetch";

import { useEffect, useState } from "react";
import { themeChange } from "theme-change";

import {
  Navbar,
  Search,
  Overview,
  DayCards,
  SunRiseSet,
  Footer,
} from "../components";

export default function Home() {
  const [place, setPlace] = useState("New York, US");
  const [weatherData, setWeatherData] = useState(null);
  const [unitIsF, setUnitIsF] = useState(true);

  const fetchWeatherData = async () => {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${place}&cnt=7&appid=767dfd4a2eb69186afb682238a23a519&units=imperial`
    );
    const data = await res.json();
    setWeatherData(data);
  };

  useEffect(() => {
    themeChange(false);
    fetchWeatherData();
  }, []);

  return (
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
      <div className="app text-base-content font-inter">
        <Navbar />
        <Search
          onChange={(e) => setPlace(e.target.value)}
          onConfirm={async () => await fetchWeatherData()}
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
      </div>
      <Footer />
    </>
  );
}
