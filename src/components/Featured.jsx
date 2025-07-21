import "../styles/index.css";

export function Featured() {
  const imagesPath = [
    "techcrunch",
    "business-insider",
    "the-new-york-times",
    "forbes",
    "usa-today",
  ];

  return (
    <section
      id="featured"
      className="flex flex-col justify-center items-center gap-4 xl:gap-8 p-8 md:pt-12 font-bold text-[12px] text-[#767676]"
    >
      <div>AS FEATURED IN</div>
      <div className="flex gap-8 xl:gap-12">
        {imagesPath.map((imagesPath, i) => (
          <img
            key={i}
            className="featured-img"
            src={`/img/logos/${imagesPath}.png`}
            alt={imagesPath}
          />
        ))}
      </div>
    </section>
  );
}
