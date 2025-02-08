import { Header } from "../components/header";
import Footer from "../components/footer";
import Image from "next/image";
import storage from "../images/storage.webp";

export default function Storage() {
  return (
    <div>
      <Header />
      <main>
        <section className="storage-container grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          <div className="storage-left flex justify-center">
            <Image className="my-bed-image2 w-full h-auto max-w-xs sm:max-w-md" src={storage} alt="Storage room with shelves" />
          </div>
          <div className="storage-right flex flex-col justify-center text-center sm:text-left">
            <h1 className="font-size-50 text-4xl sm:text-5xl font-semibold mb-4">Storage</h1>
            <p className="text-justify text-lg sm:text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}