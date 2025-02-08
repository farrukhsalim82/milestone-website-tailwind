import { Header } from "../components/header";
import Footer from "../components/footer";
import Image from "next/image";
import cabinets from "../images/cabinet.webp"; // Corrected the path

export default function Cabinets() {
  return (
    <div>
      <Header />
      <div className="cabinets-container flex flex-col md:flex-row">
        <div className="cabinets-left flex justify-center md:w-1/2 p-4">
          <Image className="my-bed-image2 w-full h-auto" src={cabinets} alt="A modern cabinet" />
        </div>
        <div className="cabinets-right md:w-1/2 p-4">
          <h1 className="text-4xl font-semibold mb-4 md:text-5xl">Cabinets</h1>
          <p className="text-justify text-sm md:text-base leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}