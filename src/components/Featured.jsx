import "../styles/index.css";

export function Featured() {
  return (
    <section
      id="featured"
      className="flex flex-col justify-center items-center gap-4 xl:gap-8 p-8 md:pt-12 font-bold text-[12px] text-[#767676]"
    >
      <div>AS FEATURED IN</div>
      <div className="flex gap-8 xl:gap-12">
        <img
          className="featured-img"
          src="/img/logos/techcrunch.png"
          alt="Tech Crunch"
        />
        <img
          className="featured-img"
          src="/img/logos/business-insider.png"
          alt="Business Insider"
        />
        <img
          className="featured-img"
          src="/img/logos/the-new-york-times.png"
          alt="New York Times"
        />
        <img
          className="featured-img"
          src="/img/logos/forbes.png"
          alt="Forbes"
        />
        <img
          className="featured-img"
          src="/img/logos/usa-today.png"
          alt="USA Today"
        />
      </div>
    </section>
  );
}
