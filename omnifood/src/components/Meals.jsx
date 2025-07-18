import "../styles/index.css";

export function Meals() {
  return (
    <section className="py-32">
      <div className="text-center">
        <h2 className="text-[14px] font-semibold text-[#d98a45]">MEALS</h2>
        <p className="font-bold text-3xl md:text-4xl xl:text-5xl text-[#333] py-4">
          Omnifood AI chooses from 5,000+ recipes
        </p>
      </div>
      <div className="meal-cards flex flex-col items-center sm:flex-row justify-start gap-[7%] px-4 sm:px-8 mt-16 mb-8 max-w-[1200px] mx-auto">
        <div className="meal-card flex flex-col flex-nowrap flex-1 my-4 w-full max-w-[350px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[400px] shadow-md rounded-xl">
          <img
            className="rounded-t-xl w-full"
            src="/img/meals/meal-1.jpg"
            alt="Meals"
          />
          <div className="pl-[10%]">
            <span className="inline-block my-4 py-0.5 px-1 text-[#333] font-semibold text-[10px] md:text-xs bg-green-500 rounded-full">
              VEGETARIAN
            </span>
            <h3 className="pb-4 font-bold text-l md:text-xl text-[#333]">
              Japanese Gyozas
            </h3>
            <div className="flex items-center gap-3">
              <img className="w-6" src="/favicon.png" alt="Icon" />
              <p>
                <span className="font-semibold">650 </span>calories
              </p>
            </div>
            <div className="flex items-center gap-3">
              <img className="w-6" src="/favicon.png" alt="Icon" />
              <p className="py-4">
                NutriScore &reg;<span className="font-semibold"> 74</span>
              </p>
            </div>
            <div className="flex items-center gap-3 pb-8">
              <img className="w-6" src="/favicon.png" alt="Icon" />
              <p>
                <span className="font-semibold">4.9</span> rating (537)
              </p>
            </div>
          </div>
        </div>
        <div className="meal-card flex-1 my-4 w-full max-w-[350px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[400px] shadow-md rounded-xl">
          <img
            className="rounded-t-xl w-full"
            src="/img/meals/meal-2.jpg"
            alt="Meals"
          />
          <div className="pl-[10%]">
            <span className="inline-block my-4 py-0.5 px-1 text-[#333] font-semibold text-[10px] md:text-xs bg-green-500 rounded-full">
              VEGAN
            </span>
            <span className="inline-block my-4 ml-2 py-0.5 px-1 text-[#333] font-semibold text-[10px]  md:text-xs bg-yellow-400 rounded-full">
              PALEO
            </span>
            <h3 className="pb-4 font-bold text-l md:text-xl text-[#333]">
              Avocado Salad
            </h3>
            <div className="flex items-center gap-3">
              <img className="w-6" src="/favicon.png" alt="Icon" />
              <p>
                <span className="font-[500]">400 </span>calories
              </p>
            </div>
            <div className="flex items-center gap-3">
              <img className="w-6" src="/favicon.png" alt="Icon" />
              <p className="py-4">
                NutriScore &reg;<span className="font-[500]"> 92</span>
              </p>
            </div>
            <div className="flex items-center gap-3 pb-8">
              <img className="w-6" src="/favicon.png" alt="Icon" />
              <p>
                <span className="font-[500]">4.8</span> rating (441)
              </p>
            </div>
          </div>
        </div>
        <div className="diets flex-1 mt-8 flex flex-col max-w-[350px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[400px]">
          <h3 className="font-bold text-xl md:text-2xl text-[#333]">
            Works with any diet:
          </h3>
          <div className="styled-p">
            <p>Vegetarian</p>
            <p>Vegan</p>
            <p>Pescatarian</p>
            <p>Gluten-free</p>
            <p>Lactose-free</p>
            <p>Keto</p>
            <p>Paleo</p>
            <p>Low FODMAP</p>
            <p>Kid-friendly</p>
          </div>
        </div>
      </div>
      <div className="flex items-start justify-center">
        <a className="text-[#e67e22] text-sm underline underline-offset-4 hover:no-underline transition-all duration-500 ease-in-out" href="#">See all recipes &rarr;</a>
      </div>
    </section>
  );
}
