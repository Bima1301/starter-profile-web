import Navbar from "./components/molecules/Navbar";
import Hero from "./components/organisms/Hero";

export default function Home() {
  return (
    <main className="bg-white w-full  text-black relative pb-10">
      <Navbar />
      <Hero />
    </main>
  )
}
