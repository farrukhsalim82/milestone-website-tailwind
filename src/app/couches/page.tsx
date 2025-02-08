import { Header } from "../components/header";
import Footer from "../components/footer";
import Image from "next/image";
import couches from "../images/couches.jpg";

export default function Couches() {
  return (
    <div>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="couches-left">
            <Image
              className="w-full h-auto rounded-lg"
              src={couches}
              alt="Image of couches"
              layout="responsive"
            />
          </div>
          <div className="couches-right flex flex-col justify-center space-y-4">
            <h1 className="text-3xl md:text-4xl font-semibold">Couches</h1>
            <p className="text-lg md:text-xl text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}