import "../styles/index.css";
import { Nav } from "./Nav";
import { Hero } from "./Hero";
import { Featured } from "./Featured";
import { How } from "./How";
import { Meals } from "./Meals";
import { Testimonials } from "./Testimonials";
import { Pricing } from "./Pricing";
import { Cta } from "./Cta";
import { Footer } from "./Footer";

export function Omnifood() {
  return (
    <>
      <Nav />
      <Hero />
      <Featured />
      <How />
      <Meals />
      <Testimonials />
      <Pricing />
      <Cta />
      <Footer />
    </>
  );
}
