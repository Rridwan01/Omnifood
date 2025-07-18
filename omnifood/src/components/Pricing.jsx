import "../styles/index.css";

export function Pricing() {
  return (
    <section id="pricing" className="py-16">
      <div className="flex flex-col gap-8">
        <div className="pl-8 xl:pl-[14%]">
          <h2 className="text-[14px] font-semibold text-[#d98a45]">PRICING</h2>
          <p className="font-bold text-3xl md:text-3xl xl:text-4xl text-[#333] py-4">
            Eating well without breaking the bank
          </p>
        </div>
        <div className="flex flex-col gap-8 md:flex-row md:gap-0 md:justify-center">
          <div className="px-12 py-8 mx-8 flex flex-col gap-4 max-w-[475px] border-2 border-[#fdf2e9] rounded-xl">
            <div className="flex flex-col gap-4 justify-center items-center mb-8">
              <h2 className="text-[14px] font-semibold text-[#d98a45]">
                STARTER
              </h2>
              <p className="font-bold text-5xl text-[#333]">
                <span className="text-base">$</span>399
              </p>
              <p className="font-[100] text-sm">
                per month. Thats just $13 per meal
              </p>
            </div>
            <div className="flex items-center gap-3">
              <img className="w-5" src="/favicon.png" alt="Icon" />
              <p className="text-sm">1 meal per day</p>
            </div>
            <div className="flex items-center gap-3">
              <img className="w-5" src="/favicon.png" alt="Icon" />
              <p className="text-sm">Order from 11am to 9pm</p>
            </div>
            <div className="flex items-center gap-3">
              <img className="w-5" src="/favicon.png" alt="Icon" />
              <p className="text-sm">Delivery is free</p>
            </div>
            <div className="flex items-center gap-3">
              <img className="w-5" src="/favicon.png" alt="Icon" />
            </div>
            <p className="mx-auto bg-[#e67e22] text-white w-[200px] px-5 py-2 mt-12 text-base font-bold rounded-xl border-[3px] border-transparent hover:bg-[#eb984e] transition-colors duration-300">
              <a href="#">Start eating well</a>
            </p>
          </div>

          <div className="px-12 py-8 mx-8 flex flex-col gap-4 max-w-[475px] border-2 bg-[#fdf2e9] border-[#fdf2e9] rounded-xl">
            <div className="flex flex-col gap-4 justify-center items-center mb-8">
              <h2 className="text-[14px] font-semibold text-[#d98a45]">
                COMPLETE
              </h2>
              <p className="font-bold text-5xl text-[#333]">
                <span className="text-base">$</span>649
              </p>
              <p className="font-[100] text-sm">
                per month. Thats just $11 per meal
              </p>
            </div>
            <div className="flex items-center gap-3">
              <img className="w-5" src="/favicon.png" alt="Icon" />
              <p className="text-sm">
                <span className="font-[400]">2 meals</span> per day
              </p>
            </div>
            <div className="flex items-center gap-3">
              <img className="w-5" src="/favicon.png" alt="Icon" />
              <p className="text-sm">
                Order <span className="font-[400]">27/7</span>
              </p>
            </div>
            <div className="flex items-center gap-3">
              <img className="w-5" src="/favicon.png" alt="Icon" />
              <p className="text-sm">Delivery is free</p>
            </div>
            <div className="flex items-center gap-3">
              <img className="w-5" src="/favicon.png" alt="Icon" />
              <p className="text-sm">Get access to latest recipes</p>
            </div>
            <p className="mx-auto bg-[#e67e22] text-white w-[200px] px-5 py-2 mt-12 text-base font-bold rounded-xl border-[3px] border-transparent hover:bg-[#eb984e] transition-colors duration-300">
              <a href="#">Start eating well</a>
            </p>
          </div>
        </div>
      </div>
      <p className="mx-8 text-xs lg:text-base text-center py-8">
        Prices include all applicable taxes. You can cancel at any time. Both
        plans include the following:
      </p>
      <div className="m-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:place-items-center">
        <div className="w-4/5 flex flex-col gap-4">
          <img className="w-12" src="/favicon.png" alt="Icon" />
          <p className="how-heads">Never cook again!</p>
          <p className="how-p">
            Our subscriptions cover 365 days per year, even including major
            holidays.
          </p>
        </div>
        <div className="w-4/5 flex flex-col gap-4">
          <img className="w-12" src="/favicon.png" alt="Icon" />
          <p className="how-heads">Local and organic</p>
          <p className="how-p">
            Our cooks only use local, fresh, and organic products to prepare
            your meals.
          </p>
        </div>
        <div className="w-4/5 flex flex-col gap-4">
          <img className="w-12" src="/favicon.png" alt="Icon" />
          <p className="how-heads">No waste</p>
          <p className="how-p">
            All our partners only use reusable containers to package all your
            meals.
          </p>
        </div>
        <div className="w-4/5 flex flex-col gap-4">
          <img className="w-12" src="/favicon.png" alt="Icon" />
          <p className="how-heads">Pause Anytime</p>
          <p className="how-p">
            Going on vacation? Just pause your subscription, and we refund
            unused days.
          </p>
        </div>
      </div>
    </section>
  );
}
