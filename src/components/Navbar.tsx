import { IoMenu } from "react-icons/io5";
import LogoImage from "../assets/images/logo-text.png";
import { useState } from "react";

type NavType = "home" | "technologies" | "projects" | "about" | "contact";

interface NavLink {
  id: NavType;
  href: string;
  label: string;
}

const navLinks: NavLink[] = [
  {
    id: "home",
    href: "#home",
    label: "Home",
  },
  {
    id: "technologies",
    href: "#technologies",
    label: "Technologies",
  },
  {
    id: "projects",
    href: "#projects",
    label: "Projects",
  },
  {
    id: "about",
    href: "#about",
    label: "About",
  },
  {
    id: "contact",
    href: "#contact",
    label: "Contact",
  },
];

const Navbar = () => {
  const currentHash = (location.hash.slice(1) || "home") as NavType;

  const [activeNav, setActiveNav] = useState<NavType>(currentHash);

  const [isVisible, setIsVisible] = useState(false);

  return (
    <nav className="border-border-primary sticky top-0 z-50 border-b bg-white">
      <div className="container mx-auto flex h-12 items-center justify-between px-4 md:h-20">
        <button
          className="text-text-secondary cursor-pointer text-2xl md:hidden"
          onFocus={() => setIsVisible(true)}
          onBlur={() => setIsVisible(false)}
        >
          <IoMenu className="text-text-secondary text-2xl" />
        </button>

        <img
          src={LogoImage}
          alt="Logo"
          className="h-6 cursor-pointer md:h-auto"
        />

        <ul
          className={`absolute top-0 left-0 transition-transform ${isVisible ? "translate-x-0" : "-translate-x-full"} h-screen w-2/3 space-y-3 bg-white p-6 md:hidden`}
        >
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                onClick={() => setActiveNav(link.id)}
                className={`${activeNav === link.id ? "text-primary bg-pink-100" : "text-text-secondary"} hover:text-primary block rounded-md bg-gray-50 p-2 px-3 text-sm font-medium transition-colors`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <ul className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                onClick={() => setActiveNav(link.id)}
                className={`${activeNav === link.id ? "text-primary" : "text-text-secondary"} hover:text-primary text-sm font-medium transition-colors`}
              >
                {link.label}
              </a>
            </li>
          ))}
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
