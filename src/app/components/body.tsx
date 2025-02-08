import Link from "next/link";
import Image from "next/image";
import img from "../images/furniture2.jpg";
import bed from "../images/bed.webp";
import storage from "../images/storage.webp";
import couches from "../images/couches.jpg";
import bookcases from "../images/bookcases.webp";
import dresser from "../images/dresser.webp";
import cabinets from "../images/cabinet.webp";

type IData = {
  title: string;
  description: string;
};

const data: IData[] = [
  { title: "Ubaid", description: "Hello from Ubaid" },
  { title: "Ahmer", description: "Hello from Ubaid" },
  { title: "Anas", description: "Hello from Ubaid" },
];

export default function Body() {
  return (
    <div className="imagecontainer">
      <div>
        <Image className="w-full h-auto" src={img} alt="Furniture" />
      </div>

      <div className="categories px-4 sm:px-6 md:px-8 lg:px-16">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-10">Our Categories</h1>

        {/* Upper Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="scale-up-center text-center">
            <Image className="mx-auto mb-4 height" src={bed} alt="Beds" />
            <h2 className="text-xl font-semibold mb-2">Beds</h2>
            <p className="text-sm md:text-base text-justify mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button className="btn-style">
              <Link href="/bed">Read More</Link>
            </button>
          </div>

          <div className="scale-up-center text-center">
            <Image className="mx-auto mb-4 height" src={storage} alt="Storage" />
            <h2 className="text-xl font-semibold mb-2">Storage</h2>
            <p className="text-sm md:text-base text-justify mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button className="btn-style">
              <Link href="/storage">Read More</Link>
            </button>
          </div>

          <div className="scale-up-center text-center">
            <Image className="mx-auto mb-4 height" src={couches} alt="Couches" />
            <h2 className="text-xl font-semibold mb-2">Couches</h2>
            <p className="text-sm md:text-base text-justify mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button className="btn-style">
              <Link href="/couches">Read More</Link>
            </button>
          </div>
        </div>

        {/* Lower Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          <div className="scale-up-center text-center">
            <Image className="mx-auto mb-4 height" src={bookcases} alt="Bookcases" />
            <h2 className="text-xl font-semibold mb-2">Bookcases</h2>
            <p className="text-sm md:text-base text-justify mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button className="btn-style">
              <Link href="/bookcases">Read More</Link>
            </button>
          </div>

          <div className="scale-up-center text-center">
            <Image className="mx-auto mb-4 height" src={dresser} alt="Dresser" />
            <h2 className="text-xl font-semibold mb-2">Dresser</h2>
            <p className="text-sm md:text-base text-justify mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button className="btn-style">
              <Link href="/dresser">Read More</Link>
            </button>
          </div>

          <div className="scale-up-center text-center">
            <Image className="mx-auto mb-4 height" src={cabinets} alt="Cabinets" />
            <h2 className="text-xl font-semibold mb-2">Cabinets</h2>
            <p className="text-sm md:text-base text-justify mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button className="btn-style">
              <Link href="/cabinet">Read More</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}