import "../styles/index.css";

export function How() {
  return (
    <section
      id="how-it-works"
      className="py-8 xl:py-16 flex flex-col items-start xl:justify-center xl:items-center relative"
    >
      <div className="pl-8 xl:pl-[14%] self-start">
        <h2 className="text-[14px] font-semibold text-[#d98a45]">HOW IT WORKS</h2>
        <p className="font-bold text-3xl md:text-4xl xl:text-5xl text-[#333] py-4">
          Your daily dose of health in 3 simple steps
        </p>
      </div>

      <div className="xl:w-4/5 flex flex-col items-center gap-16 md:gap-24 pt-12 xl:pt-16 sm:grid sm:grid-cols-2 sm:gap-8 sm:place-items-center">
        <div className="relative col-start-2 row-start-1">
          <div className="w-[200px] h-[200px] md:w-[250px] md:h-[250px] xl:w-[300px] xl:h-[300px]  bg-[#fdf2e9] rounded-full flex justify-center items-center">
            <div className="w-[145px] h-[145px] md:w-[180px] md:h-[180px] xl:w-[230px] xl:h-[230px] bg-[#fae5d3] rounded-full"></div>
          </div>
          <div className="absolute z-10 top-1/2 left-1 translate-x-11 md:translate-x-12 xl:translate-x-16 -translate-y-1/2">
            <img
              className="w-auto h-[200px] md:h-[270px] xl:h-[310px]"
              src="/img/app/app-screen-1.png"
              alt="App Screen"
            />
          </div>
        </div>
        <div className="w-4/5 flex flex-col gap-4 col-start-1 row-start-1">
          <h2 className="how-numbers">01</h2>
          <p className="how-heads">Tell us what you like (and what not)</p>
          <p className="how-p">
            Never again waste time thinking about what to eat! Omnifood AI will
            create a 100% personalized weekly meal plan just for you. It makes
            sure you get all the nutrients and vitamins you need, no matter what
            diet you follow!
          </p>
        </div>

        <div className="relative col-start-1 row-start-2">
          <div className="w-[200px] h-[200px] md:w-[250px] md:h-[250px] xl:w-[300px] xl:h-[300px] bg-[#fdf2e9] rounded-full flex justify-center items-center">
            <div className="w-[145px] h-[145px] md:w-[180px] md:h-[180px] xl:w-[230px] xl:h-[230px] bg-[#fae5d3] rounded-full"></div>
          </div>
          <div className="absolute z-10 top-1/2 left-1 translate-x-11 md:translate-x-12 xl:translate-x-16 -translate-y-1/2">
            <img
              className="w-auto h-[200px] md:h-[270px] xl:h-[310px]"
              src="/img/app/app-screen-2.png"
              alt="App Screen"
            />
          </div>
        </div>
        <div className="w-4/5 flex flex-col gap-4 col-start-2 row-start-2">
          <h2 className="how-numbers">02</h2>
          <p className="how-heads">Approve your weekly meal plan</p>
          <p className="how-p">
            Once per week, approve the meal plan generated for you by Omnifood
            AI. You can change ingredients, swap entire meals, or even add your
            own recipes.
          </p>
        </div>
        <div className="relative col-start-2 row-start-3">
          <div className="w-[200px] h-[200px] md:w-[250px] md:h-[250px] xl:w-[300px] xl:h-[300px] bg-[#fdf2e9] rounded-full flex justify-center items-center">
            <div className="w-[145px] h-[145px] md:w-[180px] md:h-[180px] xl:w-[230px] xl:h-[230px] bg-[#fae5d3] rounded-full"></div>
          </div>
          <div className="absolute z-10 top-1/2 left-1 translate-x-11 md:translate-x-12 xl:translate-x-16 -translate-y-1/2">
            <img
              className="w-auto h-[200px] md:h-[270px] xl:h-[310px]"
              src="/img/app/app-screen-3.png"
              alt="App Screen"
            />
          </div>
        </div>
        <div className="w-4/5 flex flex-col gap-4 col-start-1 row-start-3">
          <h2 className="how-numbers">03</h2>
          <p className="how-heads">Receive meals at convenient time</p>
          <p className="how-p">
            Best chefs in town will cook your selected meal every day, and we
            will deliver it to your door whenever works best for you. You can
            change delivery schedule and address daily!
          </p>
        </div>
      </div>
    </section>
  );
}
