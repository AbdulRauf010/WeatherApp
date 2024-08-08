const TimeandLocation = ({ weather }) => {
  // Provide default values to avoid errors if `weather` is undefined
  const { name = "City", country = "Country" } = weather || {};

  return (
    <div>
      <div className="flex items-center justify-center my-3 px-4 sm:px-6 md:px-8 lg:px-10">
        <p className="text-xl sm:text-2xl md:text-3xl font-medium text-center">{`${name}, ${country}`}</p>
      </div>
    </div>
  );
};

export default TimeandLocation;
