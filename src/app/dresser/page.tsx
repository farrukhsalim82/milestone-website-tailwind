import { Header } from "../components/header";
import Footer from "../components/footer";
import Image from "next/image";
import dresser from "../images/dresser.webp";

export default function Dresser() {
  return (
    <div>
      <Header />
      <div className="dresser-container flex flex-col md:flex-row p-4">
        {/* Left Section - Image */}
        <div className="dresser-left md:w-1/2 mb-6 md:mb-0">
          <Image 
            className="my-bed-image2 w-full h-auto" 
            src={dresser} 
            alt="Wooden dresser" 
            layout="responsive" 
          />
        </div>

        {/* Right Section - Text */}
        <div className="dresser-right md:w-1/2 md:pl-8">
          <h1 className="font-size-50 text-3xl sm:text-4xl md:text-5xl mb-4">
            Dresser
          </h1>
          <p className="text-justify text-lg sm:text-xl md:text-2xl leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}