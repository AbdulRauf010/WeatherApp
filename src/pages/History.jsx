import { useState, useEffect } from "react";

const History = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const savedHistory =
      JSON.parse(localStorage.getItem("weatherHistory")) || [];
    setHistory(savedHistory);
  }, []);

  return (
    <div className="text-black p-4">
      <h1 className="text-2xl text-black font-bold mb-4">History</h1>
      <ul>
        {history.map((item, index) => (
          <li
            key={index}
            className="cursor-pointer mb-2 p-2 border rounded text-black"
          >
            {item.type === "city"
              ? `City: ${item.value}`
              : `Lat: ${item.value.latitude}, Lon: ${item.value.longitude}`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;
