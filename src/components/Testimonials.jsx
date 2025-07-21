import "../styles/index.css";

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-[#fdf2e9] pt-16 lg:flex xl:gap-32 lg:py-0"
    >
      <div className="lg:flex flex-col justify-center pr-4">
        <div className="pl-8 xl:pl-[14%]">
          <h2 className="text-[14px] font-semibold text-[#d98a45]">
            TESTIMONIALS
          </h2>
          <p className="font-bold text-2xl md:text-3xl xl:text-4xl text-[#333] py-4">
            Once you try it, you can't go back
          </p>
        </div>

        <div className="testi-feedbacks pl-8 xl:pl-24 pt-4 flex flex-col gap-8 lg:gap-16 sm:grid sm:grid-cols-2">
          <div className="flex flex-col gap-4 max-w-[400px] sm:max-w-[300px] lg:max-w-[600px]">
            <img
              className="w-[60px] rounded-full"
              src="/img/customers/dave.jpg"
              alt="Dave"
            />
            <p className="text-sm leading-snug lg:text-base xl:text-xl">
              Inexpensive, healthy and great-tasting meals, without even having
              to order manually! It feels truly magical.
            </p>
            <p className="text-xs md:text-sm text-[#767676">- Dave Bryson</p>
          </div>
          <div className="flex flex-col gap-4 max-w-[400px] sm:max-w-[300px] lg:max-w-[600px]">
            <img
              className="w-[60px] rounded-full"
              src="/img/customers/ben.jpg"
              alt="Ben"
            />
            <p className="text-sm leading-snug lg:text-base xl:text-xl">
              The AI algorithm is crazy good, it chooses the right meals for me
              every time. It's amazing not to worry about food anymore!
            </p>
            <p className="text-xs md:text-sm text-[#767676">- Ben Hadley</p>
          </div>
          <div className="flex flex-col gap-4 max-w-[400px] sm:max-w-[300px] lg:max-w-[600px]">
            <img
              className="w-[60px] rounded-full"
              src="/img/customers/steve.jpg"
              alt="Steve"
            />
            <p className="text-sm leading-snug lg:text-base xl:text-xl">
              Omnifood is a life saver! I just started a company, so there's no
              time for cooking. I couldn't live without my daily meals now!
            </p>
            <p className="text-xs md:text-sm text-[#767676">- Steve Miller</p>
          </div>
          <div className="flex flex-col gap-4 max-w-[400px] sm:max-w-[300px] lg:max-w-[600px]">
            <img
              className="w-[60px] rounded-full"
              src="/img/customers/hannah.jpg"
              alt="Hannah"
            />
            <p className="text-sm leading-snug lg:text-base xl:text-xl">
              I got Omnifood for the whole family, and it frees up so much time!
              Plus, everything is organic and vegan and without plastic.
            </p>
            <p className="text-xs md:text-sm text-[#767676">- Hannah Smith</p>
          </div>
        </div>
      </div>

      <div className="gallery w-[100%] py-16 px-4">
        {Array.from({ length: 12 }).map((_, i) => (
          <img
            key={i}
            src={`/img/gallery/gallery-${i + 1}.jpg`}
            alt="Food Gallery"
          />
        ))}
      </div>
    </section>
  );
}
