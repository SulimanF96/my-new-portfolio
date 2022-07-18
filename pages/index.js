import Header from "../components/Header";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";
import Head from "next/head";
import ThemeSwitcher from "../components/ThemeSwitcher";
export default function Home() {
  return (
    <>
      <Head>
        <title>Suliman's portfolio</title>
      </Head>
      <div className=" md:container md:mx-auto">
        {/* <ThemeSwitcher /> */}
        <Header />
        <Skills />
        <Projects />
      </div>
    </>
  );
}
