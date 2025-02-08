import { Header } from "../components/header";
import Footer from "../components/footer";
import Image from "next/image";
import contact from "../images/contact.jpg";

export default function Contact() {
  return (
    <div>
      <Header />
      <div className="contact-container flex flex-col lg:flex-row p-6">
        <div className="left-contact lg:w-1/2 w-full mb-6 lg:mb-0">
          <h1 className="contact-font-size-50 text-3xl lg:text-5xl font-bold mb-6">Contact Us</h1>
          <form action="/submit" method="POST">
            <fieldset className="mb-4">
              <input
                className="form-field w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder="Enter Your Name"
                required
              />
            </fieldset>
            <fieldset className="mb-4">
              <input
                className="form-field w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="tel"
                placeholder="Enter Your Contact Number"
                required
              />
            </fieldset>
            <fieldset className="mb-4">
              <input
                className="form-field w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="email"
                placeholder="Enter Your Email"
                required
              />
            </fieldset>
            <fieldset className="mb-6">
              <textarea
                className="form-textarea w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={5}
                placeholder="Enter your message here..."
                required
              ></textarea>
            </fieldset>
            <fieldset>
              <button
                className="form-button w-full py-3 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 focus:outline-none"
                type="submit"
              >
                Submit
              </button>
            </fieldset>
          </form>
        </div>
        <div className="right-contact lg:w-1/2 w-full flex justify-center">
          <Image className="my-contact-image rounded-md" src={contact} alt="Contact Image" />
        </div>
      </div>
      <Footer />
    </div>
  );
}