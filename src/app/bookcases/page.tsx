import { Header } from "../components/header";
import Footer from "../components/footer";
import Image from "next/image";
import bookcases from "../images/bookcases.webp";

export default function Bookcases() {
  return (
    <div>
      <Header />
      <div className="bookcases-container flex flex-col md:flex-row items-center md:justify-between p-4">
        <div className="bookcases-left w-full md:w-1/2 mb-4 md:mb-0">
          <Image 
            className="w-full h-auto object-cover" 
            src={bookcases} 
            alt="A variety of bookcases in a modern home" 
            layout="responsive" 
          />
        </div>
        <div className="bookcases-right w-full md:w-1/2 px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Book Cases</h1>
          <p className="text-justify text-lg md:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}