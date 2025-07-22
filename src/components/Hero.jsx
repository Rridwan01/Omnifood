import { useState } from "react";
import "../styles/index.css";

export function Hero() {
  const [isMobile, setIsMobile] = useState(false);
  const navLinks = ["How it works", "Meals", "Testimonials", "Pricing"];

  return (
    <section id="hero" className="hero-container bg-[#fdf2e9] md:h-[75vh]">
      {/* Normal nav always at the top of hero */}
      <nav className="flex justify-between items-center py-5 px-5 md:py-8">
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
        {/* mobile-nav */}
        <div className="md:hidden mobile">
          <button
            className="relative z-50"
            onClick={() => setIsMobile((prev) => !prev)}
          >
            <img
              className="w-9"
              src={isMobile ? "/img/close-icon.svg" : "/img/menu-icon.svg"}
              alt={isMobile ? "close menu" : "open menu"}
            />
          </button>
          {isMobile && (
            <ul
              className={`mobile-nav ${isMobile ? "translate-x" : "translate-full"}`}
            >
              {navLinks.map((navLinks, i) => (
                <li className="nav-links-hover" key={i}>
                  <a href="#" onClick={() => setIsMobile(!isMobile)}>
                    {navLinks}
                  </a>
                </li>
              ))}
              <li className="bg-[#e67e22] text-[#fff] px-6 py-2 rounded-xl hover:bg-[#eb984e] transition-colors duration-100 ease-in-out">
                <a href="#" onClick={() => setIsMobile(!isMobile)}>
                  Try for free
                </a>
              </li>
            </ul>
          )}
        </div>
      </nav>

      <div className="flex flex-col md:flex-row md:justify-center gap-8 xl:gap-[15%] p-12 md:p-8">
        <div className="text-center md:text-start md:max-w-[500px] md:flex-1 md:flex md:flex-col md:justify-center md:gap-4">
          <h1 className="text-4xl md:text-[40px] xl:text-5xl xl:leading-snug text-[#333] font-bold mb-8 md:mb-6">
            A healthy meal delivered to your door, every single day
          </h1>
          <p className="leading-snug md:text-[18px]">
            The smart 365-days-per-year food subscription that will make you eat
            healthy again. Tailored to your personal tastes and nutritional
            needs.
          </p>
          <div className="flex flex-wrap md:flex-nowrap gap-3 mb-4 items-center justify-center mt-8 md:mt-4">
            <p className="bg-[#e67e22] text-white md:w-4/6 mtext-[#fff] px-5 py-2 md:px-2 md:py-2 text-base font-bold rounded-xl border-[3px] border-transparent hover:bg-[#eb984e] transition-colors duration-300 text-center">
              <a href="#">Start eating well</a>
            </p>
            <p className="bg-white md:w-4/6 px-5 py-2 md:px-2 md:py-2 font-bold text-base rounded-xl border-[3px] border-transparent hover:bg-transparent hover:border-[3px] hover:border-white transition-colors duration-300 text-center">
              <a href="#">Learn more &darr;</a>
            </p>
          </div>
          <div className="flex items-center justify-center gap-8 md:gap-[52px] mt-8">
            <div className="flex">
              {Array.from({ length: 6 }).map((_, i) => (
                <img
                  key={i}
                  className={`nav-customer-img${i === 0 ? -1 : ""}`}
                  src={`/img/customers/customer-${i + 1}.jpg`}
                  alt="Customer photo"
                />
              ))}
            </div>
            <p className="pl-[-150px] text-sm md:text-base font-bold">
              <span className="font-bold text-sm md:text-base text-[#e67e22]">
                250,000+
              </span>{" "}
              meals delivered last year!
            </p>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center md:mt-6 md:max-w-[500px]">
          <img
            className="w-3/6 md:w-full md:max-w-md md:lg:max-w-lg md:xl:max-w-xl md:h-auto md:object-contain"
            src="/img/hero.png"
            alt="Hero image"
          />
        </div>
      </div>
    </section>
  );
}
