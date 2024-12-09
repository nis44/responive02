import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div
      className="pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden"
      id="footer"
    >
      <div className="flex container mx-auto flex-col md:flex-row justify-between items-center">
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <img src={assets.logo_dark} alt="" />
          <p className="text-gray-400 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
            maiores sit soluta voluptate doloremque accusamus deleniti, alias
            similique ut non ipsam dicta? Cum eum sint dolor iusto iure? Labore,
            voluptatibus.
          </p>
        </div>
        <div className="w-full md:w-1/5 mb-8 md:mb-0">
          <h3 className="text-white text-lg font-bold mb-4">Company</h3>{" "}
          <ul className="flex flex-col gap-2 text-gray-400">
            {" "}
            <a href="#header" className="hover:text-white">
              Home
            </a>
            <a href="#about" className="hover:text-white">
          About Us
        </a>
        <a href="#contact" className="hover:text-white">
          Contact us
        </a>
        <a href="#" className="hover:text-white">
          Privacy Policy
        </a>
          </ul>
        </div>
        
        <div className="w-full md:w-1/3">
            <h3 className="text-white text-lg font-bold mb-4">Subscribe to Our Newsletter</h3>
            <p className="text-gray-400 mb-4 max-w-80">Latest News And Article, and Resources, Sent to Your Mail Daily.</p>
            <div className="flex gap-2">
        <input className="p-2 rounded bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none w-full md:w-auto" type="email" placeholder="Enter Your Email"/>
        <button className="py-2 px-4 rounded bg-blue-500 text-white">Subscribe</button>
      </div>
        </div>
      </div>
      <div className="border-t border-gray-700 py-4 mt-10 text-center text-gray-500">
        Copyright 2024 @ Nishant. All Rights reserved.
      </div>
    </div>
  );
};

export default Footer;
