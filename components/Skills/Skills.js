import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import {
  faReact,
  faAngular,
  faVuejs,
  faHtml5,
  faCss3Alt,
  faJs,
  faGitSquare,
} from "@fortawesome/free-brands-svg-icons";
import Skill from "./Skill";

const Skills = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3  lg:grid-cols-4 gap-10 justify-center justify-items-center m-20">
      <Skill>
        <FontAwesomeIcon icon={faReact} />
        <span>React</span>
      </Skill>
      <Skill>
        <FontAwesomeIcon icon={faAngular} />
        <span>Angular</span>
      </Skill>
      <Skill>
        <FontAwesomeIcon icon={faVuejs} />
        <span>Vue</span>
      </Skill>
      <Skill>
        <Image src="/next-js.svg" alt="next Logo" width={16} height={16} />
        <span>Next.js</span>
      </Skill>
      <Skill>
        <FontAwesomeIcon icon={faHtml5} />
        <span>HTML</span>
      </Skill>
      <Skill>
        <FontAwesomeIcon icon={faCss3Alt} />
        <span>CSS</span>
      </Skill>
      <Skill>
        <FontAwesomeIcon icon={faJs} />
        <span>Javascript</span>
      </Skill>
      <Skill>
        <FontAwesomeIcon icon={faReact} />
        <span>React native</span>
      </Skill>
      <Skill>
        <FontAwesomeIcon icon={faGitSquare} />
        <span>Github</span>
      </Skill>
    </div>
  );
};

export default Skills;
