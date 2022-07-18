import Image from "next/image";
import Project from "./Project";

const Projects = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-center justify-items-center m-20">
      <Project>
        {{
          image: (
            <Image
              src="/mojadwel.png"
              className="h-48 w-full object-cover md:h-full md:w-48"
              height={100}
              width={100}
            />
          ),
          type: "Personal",
          title: "Mojadwel",
          decription:
            "fgfsjgiohdfiughiofsdhgiourgoirehgoirhogirehogirehgoirehsgsd",
        }}
      </Project>
    </div>
  );
};

export default Projects;
