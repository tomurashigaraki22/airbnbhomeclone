import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between pt-10 bg-white">
      <Navbar/>
      
    </div>
  );
}
