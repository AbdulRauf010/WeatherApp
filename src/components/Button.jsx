import { Link } from "react-router-dom";

const Button = () => {
  return (
    <div className="flex justify-center items-center p-4">
      <Link to="history">
        <button className="text-base sm:text-xl border-2 border-orange-400 rounded-xl p-3 sm:p-4 transition-transform duration-200 ease-in-out hover:scale-105">
          View History
        </button>
      </Link>
    </div>
  );
};

export default Button;
