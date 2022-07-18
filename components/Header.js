import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="flex flex-col content-center justify-center items-center pt-20">
      <p className="font-light">Hello, I'am </p>
      <h1 className="text-3xl font-bold">Suliman Alfowzan</h1>
      <p className="font-light">Frontend developer</p>
      <button className="transition duration-150 ease-in-out bg-indigo-500 shadow-lg shadow-indigo-500/50 p-2.5 rounded m-4 text-white ">
        Download CV <FontAwesomeIcon icon={faFilePdf} className="pl-1" />
      </button>
    </div>
  );
};

export default Header;
