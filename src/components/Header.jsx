import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="text-white p-4 border-b-2 border-orange-300 bg-gradient-to-r from-yellow-600 to-orange-600">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img
            src="/Wlogo.png"
            alt="Logo"
            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16"
          />
        </Link>
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center md:text-left">
          Weather Dashboard
        </h1>
      </div>
    </header>
  );
};

export default Header;
