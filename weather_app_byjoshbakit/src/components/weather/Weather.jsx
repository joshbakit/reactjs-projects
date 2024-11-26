import React, { useEffect, useState } from "react";
import Search from "../search/Search";

const Weather = () => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  async function fetchWeatherData(params) {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${params}&appid=${
          import.meta.env.VITE_WEATHER_API_KEY
        }`
      );
      if (!response.ok) {
        throw new Error(
          "Network response was not ok. No city found! Status code: " +
            response.status
        );
      }
      const data = await response.json();
      console.log(data);
      setWeatherData(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      setSearch("");
    }
  }

  const getCurrentDate = () => {
    return new Date().toLocaleDateString(`en-us`, {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  const handleSearch = async () => {
    fetchWeatherData(search);
  };

  useEffect(() => {
    fetchWeatherData("manila");
  }, []);

  const kelvinToCelsius = (kelvin) => {
    return (kelvin - 273.15).toFixed(2);
  };

  const mpsToKmph = (mps) => {
    return (mps * 3.6).toFixed(2);
  };

  return (
    <div>
      <Search
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      {loading ? (
        <div>Loading ...</div>
      ) : (
        <div className="card bg-base-100 w-[600px] h-auto shadow-xl mx-auto py-4 px-8 rounded-lg bg-cyan-400 ">
          <div className="card-body flex flex-col">
            <h1 className="card-title font-bold text-6xl">
              {weatherData?.name}
              <span className="font-normal"> {weatherData?.sys?.country}</span>
            </h1>
            <div>
              <span>{getCurrentDate()}</span>
            </div>
            <div>
              {weatherData &&
                weatherData?.weather &&
                weatherData?.weather[0] && (
                  <img
                    src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                    alt={weatherData.weather[0].description}
                    className="mx-auto w-48 h-48"
                  />
                )}

              {/* <p>{weatherData.weather[0]?.description}</p> */}
            </div>
            <div className="other-info justify-around align-bottom flex mt-5">
              <div>
                <p className="text-xs">Feels like:</p>
                <span>{kelvinToCelsius(weatherData?.main?.feels_like)}°C</span>
              </div>
              <div>
                <p className="text-xs">Wind:</p>
                <span>{mpsToKmph(weatherData?.wind?.speed)} km/h</span>
              </div>
              <div>
                <p className="text-xs">Temperature:</p>
                <span>{kelvinToCelsius(weatherData?.main?.temp)}°C</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;
