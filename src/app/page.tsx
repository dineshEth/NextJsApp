'use client'
import About from "@/components/About/About";
import Education from "@/components/Education";
import Header from "@/components/Header/Header";
import Skills from "@/components/Skills";
export default function Home() {
  return (
    <main className="w-full max-w-7xl   mx-auto py-8 min-h-screen flex-col items-center justify-between">
      {/* <h1 className="text-2xl lg:text-6xl font-bold"> Introduction to NextJs</h1> */}
      <Header />
      <About />
      <Education />
      <Skills />
    </main>
  );
}
