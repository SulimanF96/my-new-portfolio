import Header from "../components/Header";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";

export default function Home() {
  return (
    <div className="w-screen h-screen min-w-full min-h-full">
      <Header />
      <Skills />
      <Projects />
    </div>
  );
}
