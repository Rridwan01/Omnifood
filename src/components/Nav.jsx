import { useState, useEffect } from "react";
import "../styles/index.css";

export function Nav() {
  const [showNav, setShowNav] = useState(false);
  const navLinks = ["How it works", "Meals", "Testimonials", "Pricing"];

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("hero");
      if (hero) {
        const scrollPosition = window.scrollY;
        const heroHeight = hero.offsetHeight;

        if (scrollPosition > heroHeight - 100) {
          // Added offset for earlier trigger
          setShowNav(true);
        } else {
          setShowNav(false);
        }
      }
    };

    handleScroll(); // Check initial scroll position
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed w-full top-0 z-50">
      {/* Sticky nav appears after scrolling past hero */}
      {showNav && (
        <nav className="flex justify-between items-center sticky top-0 z-50 bg-white/90 py-4 px-5 md:py-5 shadow-md animate-fade-in">
          <div className="logo pl-4">
            <a href="#">
              <img
                className="w-[140px] md:w-[165px]"
                src="/img/omnifood-logo.png"
                alt="Omnifood Logo"
              />
            </a>
          </div>
          <ul className="md:flex hidden md:gap-4 xl:gap-8 md:items-center md:font-medium md:text-base xl:text-xl md:text-[#333]">
            {navLinks.map((navLinks, i) => (
              <li className="nav-links-hover" key={i}>
                <a href="#">{navLinks}</a>
              </li>
            ))}
            <li className="bg-[#e67e22] text-[#fff] px-6 py-2 rounded-xl hover:bg-[#eb984e] transition-colors duration-100 ease-in-out">
              <a href="#">Try for free</a>
            </li>
          </ul>
          <div className="md:hidden">
            <img className="w-9" src="/img/menu-icon.svg" alt="menu-icon" />
          </div>
        </nav>
      )}
    </div>
  );
}
