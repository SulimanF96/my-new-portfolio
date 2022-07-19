import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";

const Project = (props) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden md:max-w-2xl">
      <div className="p-8">
        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
          {props.children.type}
        </div>
        <a
          href={props.link}
          target="_blank"
          className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
          rel="noreferrer"
        >
          {props.children.title}
        </a>
        <p className="mt-2 text-slate-500 dark:text-black">
          {props.children.decription}
        </p>
        <div className="flex flex-row justify-end space-x-3 mt-10">
          <Image src="/next-js.svg" alt="next Logo" width={16} height={16} />
          <FontAwesomeIcon icon={faReact} className="text-black" />
        </div>
      </div>
    </div>
  );
};

export default Project;
