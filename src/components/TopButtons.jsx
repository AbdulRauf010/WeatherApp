const TopButtons = ({ setQuery }) => {
  const cities = [
    {
      id: 1,
      name: "London",
    },
    {
      id: 2,
      name: "Lahore",
    },
    {
      id: 3,
      name: "Mumbai",
    },
    {
      id: 4,
      name: "Sydney",
    },
    {
      id: 5,
      name: "Barcelona",
    },
  ];

  return (
    <div className="flex flex-wrap gap-2 items-center justify-around my-4">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-lg font-medium hover:bg-orange-500 px-3 py-2 rounded-lg transition ease-in"
          onClick={() => setQuery({ q: city.name })}
        >
          {city.name}
        </button>
      ))}
    </div>
  );
};

export default TopButtons;
