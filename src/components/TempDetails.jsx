import { FaThermometerEmpty } from "react-icons/fa";
import { BiSolidDropletHalf } from "react-icons/bi";
import { FiWind } from "react-icons/fi";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

const TempDetails = ({
  weather: {
    details,
    icon,
    temp,
    temp_min,
    temp_max,
    humidity,
    feels_like,
    speed,
  },
}) => {
  const vdetails = [
    {
      id: 1,
      Icon: FaThermometerEmpty,
      title: "Real Feel",
      value: `${feels_like.toFixed()}°`,
    },
    {
      id: 2,
      Icon: BiSolidDropletHalf,
      title: "Humidity",
      value: `${humidity}%`,
    },
    {
      id: 3,
      Icon: FiWind,
      title: "Wind",
      value: `${speed}km/h`,
    },
  ];

  const hDetails = [
    {
      id: 1,
      Icon: MdKeyboardArrowUp,
      title: "High",
      value: `${temp_max.toFixed()}°`,
    },
    {
      id: 2,
      Icon: MdKeyboardArrowDown,
      title: "Low",
      value: `${temp_min.toFixed()}°`,
    },
  ];

  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10">
      <div className="flex flex-col items-center py-6">
        <p className="text-lg sm:text-xl md:text-2xl text-yellow-500 text-center">
          {details}
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between py-3">
        <img src={icon} alt="weather-icon" className="w-16 sm:w-20 md:w-24" />
        <p className="text-4xl sm:text-5xl md:text-6xl">{`${temp.toFixed()}°`}</p>
        <div className="flex flex-col space-y-2 sm:space-y-3 items-start">
          {vdetails.map(({ id, Icon, title, value }) => (
            <div
              key={id}
              className="flex font-light text-sm sm:text-base items-center"
            >
              <Icon size={20} className="mr-2" />
              {title}: <span className="font-medium ml-1">{value}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm sm:text-base py-3">
        {hDetails.map(({ id, Icon, title, value }) => (
          <div key={id} className="flex items-center">
            <Icon size={24} className="mr-2" />
            {title}: <span className="font-medium ml-1">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TempDetails;
