import { Header } from "../components/header";
import Footer from "../components/footer";

export default function Categories() {
  const categoryList = [
    "Technology",
    "Business",
    "Health",
    "Education",
    "Entertainment",
    "Science",
  ];

  return (
    <div>
      <Header />
      <div className="categories-container px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6">
          Categories
        </h1>
        <p className="text-justify text-base sm:text-lg md:text-xl lg:text-2xl mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
          esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
          non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryList.map((category, index) => (
            <li
              key={index}
              className="category-item bg-gray-100 hover:bg-gray-200 p-4 rounded-lg shadow-md text-center"
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
}