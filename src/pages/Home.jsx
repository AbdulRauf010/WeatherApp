import { useEffect, useState } from "react";

import Inputs from "../components/Inputs";
import TempDetails from "../components/TempDetails";

import TopButtons from "../components/TopButtons";
import getFormattedWeatherData from "../Services/Weather";
import TimeandLocation from "../components/TimeandLocation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Button from "../components/Button";

const Home = () => {
  const [query, setQuery] = useState({ q: "Lahore" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  const getWeather = async () => {
    const message = query.q ? query.q : "current location";
    toast.info(`fetching weather data ${message}`);
    await getFormattedWeatherData({ ...query, units }).then((data) => {
      toast.success(`Fetched weather data for ${data.name}`);
      setWeather(data);
      console.log(data);
    });
  };

  useEffect(() => {
    getWeather();
  }, [query, units]);

  return (
    <div className="mx-auto rounded-lg max-w-screen-lg mt-2 py-5 px-32 bg-gradient-to-br shadow-xl shadow-orange-400 bg-gradient-to-r from-yellow-600 to-orange-600">
      <TopButtons setQuery={setQuery} />
      <Inputs setQuery={setQuery} setUnits={setUnits} />
      {weather && (
        <>
          <TimeandLocation weather={weather} />
          <TempDetails weather={weather} />
        </>
      )}
      <ToastContainer autoClose={2500} hideProgressBar={true} theme="colored" />
      <Button />
    </div>
  );
};

export default Home;
