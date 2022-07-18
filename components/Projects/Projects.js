import Image from "next/image";
import Project from "./Project";
import mojadwelImg from "../../public/mojadwel.png";

const Projects = () => {
  return (
    <div className="space-y-10">
      <Project link="https://mojadwel.com">
        {{
          type: "Personal",
          title: "Mojadwel",
          decription:
            "Mojadwel is a web app for students which provide them with many features and tools one of which is scheduling from a selected set of courses then chosing from a recomnded list of schedules from the system(currently working only with computer and information sciences college from Imam mohammd bin saud university ).",
        }}
      </Project>
      <Project link="https://jeel.co">
        {{
          type: "Job",
          title: "Jeel",
          decription:
            "Jeel is a Platform that Provide Payment collection Solutions To Private Schools",
        }}
      </Project>
    </div>
  );
};

export default Projects;
