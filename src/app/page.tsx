'use client'
import About from "@/components/About/About";
import Education from "@/components/Education";
import Header from "@/components/Header/Header";
import Project from "@/components/Project/Project";
import Skills from "@/components/Skills";
import Testinomials from "@/components/Testinomials";
export default function Home() {
  return (
    <main className="w-full max-w-7xl   mx-auto py-8 px-2 min-h-screen flex-col items-center justify-between">
      {/* <h1 className="text-2xl lg:text-6xl font-bold"> Introduction to NextJs</h1> */}
      <Header />
      <About />
      <Skills />
      <Education />
      <Project />
      <Testinomials />
    </main>
  );
}
