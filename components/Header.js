import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { saveAs } from "file-saver";

import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  const saveFile = () => {
    saveAs("/SulimanAlfowzanCV.pdf", "SulimanAlfowzanCV.pdf");
  };

  return (
    <div className="flex flex-col content-center justify-center items-center">
      <p className="font-light">Hello, I am </p>
      <h1 className="text-3xl font-bold">Suliman Alfowzan</h1>
      <p className="font-light">Frontend Developer</p>
      <div className="flex flex-row space-x-4 text-xl mt-3">
        <a
          href="https://www.linkedin.com/in/suliman-alfowzan-993797161/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href="https://github.com/SulimanF96"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
      <button
        onClick={saveFile}
        className="transition duration-150 ease-in-out bg-indigo-500 shadow-lg shadow-indigo-500/50 p-2.5 rounded m-4 text-white "
      >
        Download CV <FontAwesomeIcon icon={faFilePdf} className="pl-1" />
      </button>
    </div>
  );
};

export default Header;
