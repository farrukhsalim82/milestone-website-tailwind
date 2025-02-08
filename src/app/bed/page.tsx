import { Header } from "../components/header";
import Footer from "../components/footer";
import Image from "next/image";
import bed from "../images/bed.webp";

export default function Bed() {
  return (
    <div>
      <Header />
      <div className="bed-container px-4 py-8 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="bed-left mb-6 lg:mb-0 lg:w-1/2">
            <Image className="w-full h-auto rounded-lg" src={bed} alt="Image of a bed" />
          </div>
          <div className="bed-right lg:w-1/2">
            <h1 className="font-size-50 text-3xl lg:text-5xl font-semibold mb-4">Beds</h1>
            <p className="text-justify text-base lg:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}