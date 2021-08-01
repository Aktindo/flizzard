import { DayCard } from "../../components";

const DayCards = ({ weatherData, unitIsF }) => {
  // function to convert day into its name form using an array of day names
  const dayName = (day) => {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return days[day];
  };

  function getDates(startDate, daysToAdd) {
    var aryDates = [];

    for (var i = 0; i <= daysToAdd; i++) {
      var currentDate = new Date();
      currentDate.setDate(startDate.getDate() + i);
      aryDates.push(dayName(currentDate.getDay()));
    }

    return aryDates;
  }

  const days = getDates(new Date(), 6);

  return (
    <div className="day-cards grid lg:grid-cols-7 md:grid-cols-3 grid-cols-2 justify-center mx-5 my-10">
      {weatherData &&
        weatherData.list.map((item, index) => (
          <DayCard
            key={`daycard-${index}`}
            day={item}
            index={index}
            days={days}
            unitIsF={unitIsF}
          />
        ))}
    </div>
  );
};

export { DayCards };
