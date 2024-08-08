import axios from "axios";
import { DateTime } from "luxon";

const API_KEY = "99ff274bc595a8b508cf6f754f83cfc7";
const BASE_URL = "https://api.openweathermap.org/data/2.5/";

// Function to fetch weather data using Axios
const getWeatherData = async (infoType, searchParams) => {
  const url = `${BASE_URL}${infoType}`;
  const params = { ...searchParams, appid: API_KEY };

  try {
    const response = await axios.get(url, { params });
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
};

const iconUrlFromCode = (icon) => {
  return `http://openweathermap.org/img/wn/${icon}@2x.png`;
};

const formatToLocalTime = (
  timestamp,
  timezoneOffset,
  format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
) => {
  return DateTime.fromSeconds(timestamp)
    .plus({ seconds: timezoneOffset })
    .toFormat(format);
};

// Function to format the current weather data
const formatCurrentWeather = (data) => {
  const {
    coord: { lat, lon },
    main: { temp, feels_like, temp_min, temp_max, humidity },
    name,
    dt,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed },
    timezone,
  } = data;

  const { main: details, icon } = weather[0];

  return {
    lat,
    lon,
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    name,
    dt,
    country,
    sunrise: formatToLocalTime(sunrise, timezone),
    sunset: formatToLocalTime(sunset, timezone),
    details,
    icon: iconUrlFromCode(icon),
    speed,
    timezone,
    localTime: formatToLocalTime(dt, timezone),
  };
};

// Function to get and format weather data
const getFormattedWeatherData = async (searchParams) => {
  const currentWeatherData = await getWeatherData("weather", searchParams);
  const formattedCurrentWeather = formatCurrentWeather(currentWeatherData);

  return formattedCurrentWeather;
};

export default getFormattedWeatherData;
