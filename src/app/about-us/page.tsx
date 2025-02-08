import { Header } from "../components/header";
import Footer from "../components/footer";
import Image from "next/image";
import aboutus from "../images/about.jpg";

export default function About() {
  return (
    <div>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="left-about w-full md:w-1/2 mb-6 md:mb-0">
            <Image className="my-about-image w-full h-auto rounded-lg" src={aboutus} alt="About Us" />
          </div>
          <div className="right-about w-full md:w-1/2">
            <h1 className="abt-us text-3xl md:text-4xl font-bold text-center md:text-left mb-4">
              About Us
            </h1>
            <p className="text-justify text-lg text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
              non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}