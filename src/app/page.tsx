'use client'
import About from "@/components/About/About";
import Header from "@/components/Header/Header";
export default function Home() {
  return (
    <main className="flex w-full py-8 min-h-screen flex-col items-center justify-between">
      {/* <h1 className="text-2xl lg:text-6xl font-bold"> Introduction to NextJs</h1> */}
      <Header />
      <About />
    </main>
  );
}
