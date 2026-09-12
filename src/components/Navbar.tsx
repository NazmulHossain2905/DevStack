import { IoMenu } from "react-icons/io5";
import LogoImage from "../assets/images/logo-text.png";

const Navbar = () => {
  return (
    <nav className="border-border-primary sticky top-0 z-50 border-b bg-white px-5 md:px-0">
      <div className="container mx-auto flex h-12 items-center justify-between md:h-20">
        <IoMenu className="text-text-secondary cursor-pointer text-2xl md:hidden" />

        <img
          src={LogoImage}
          alt="Logo"
          className="h-6 cursor-pointer md:h-auto"
        />

        <ul className="hidden items-center gap-7 md:flex">
          <li>
            <a
              href="#"
              className="text-text-secondary hover:text-primary text-sm font-medium transition-colors"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-text-secondary hover:text-primary text-sm font-medium transition-colors"
            >
              Technologies
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-text-secondary hover:text-primary text-sm font-medium transition-colors"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-text-secondary hover:text-primary text-sm font-medium transition-colors"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-text-secondary hover:text-primary text-sm font-medium transition-colors"
            >
              Contact
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-4 md:gap-5">
          <button className="hover:text-primary cursor-pointer text-xs font-medium text-[#334155] transition-colors md:text-sm">
            Sign In
          </button>
          <button className="bg-primary-dark cursor-pointer rounded-full px-2.5 py-1.5 text-xs font-semibold text-white shadow-[0_1px_2px_0_#FBCFE8] md:px-5 md:py-2.5 md:text-sm">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
