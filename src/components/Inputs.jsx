import { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { BiCurrentLocation } from "react-icons/bi";

const Inputs = ({ setQuery, setUnits }) => {
  const [city, setCity] = useState("");
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const savedHistory =
      JSON.parse(localStorage.getItem("weatherHistory")) || [];
    setHistory(savedHistory);
    console.log(savedHistory);
  }, []);

  const handleSearchClick = () => {
    if (city !== "") {
      const newEntry = { type: "city", value: city };
      const newHistory = [...history, newEntry];
      localStorage.setItem("weatherHistory", JSON.stringify(newHistory));
      setHistory(newHistory);
      setQuery({ q: city });
      console.log("Updated history in localStorage:", newHistory);
      setCity("");
    }
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const newEntry = { type: "location", value: { latitude, longitude } };
          const newHistory = [...history, newEntry];
          localStorage.setItem("weatherHistory", JSON.stringify(newHistory));
          setHistory(newHistory);
          setQuery({ lat: latitude, lon: longitude });
          console.log("Updated history in localStorage:", newHistory);
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center my-4 px-4">
      <div className="flex flex-row sm:w-3/4 items-center justify-center space-x-2 sm:space-x-4">
        <input
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
          }}
          type="text"
          placeholder="Enter City..."
          className="text-xl font-light p-2 w-full shadow-xl capitalize focus:outline-none placeholder-gray-400 text-gray-500 placeholder:lowercase "
        />
        <BiSearch
          onClick={handleSearchClick}
          size={30}
          className="cursor-pointer transition ease-out hover:scale-125"
        />
        <BiCurrentLocation
          onClick={handleLocationClick}
          size={30}
          className="cursor-pointer transition ease-out hover:scale-125 hidden sm:block"
        />
      </div>
      <div className="flex flex-row w-full sm:w-1/4 items-center justify-center mt-2 sm:mt-0">
        <button
          className="text-2xl font-medium transition ease-out hover:scale-125 hidden sm:block"
          onClick={() => setUnits("metric")}
        >
          °C
        </button>
        <p className="text-2xl font-medium mx-1 hidden sm:block">|</p>
        <button
          className="text-2xl font-medium transition ease-out hover:scale-125 hidden sm:block"
          onClick={() => setUnits("imperial")}
        >
          °F
        </button>
      </div>
    </div>
  );
};

export default Inputs;
