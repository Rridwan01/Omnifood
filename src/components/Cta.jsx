import "../styles/index.css";

export function Cta() {
  return (
    <section
      id="cta"
      className="mb-16 md:flex items-center justify-center filter brightness-80 saturate-100 hue-rotate-40 mr-8"
    >
      <div className="flex flex-col sm:flex-row-reverse my-4 mx-8 w-[90%] md:w-[90%] md:h-[620px] lg:h-[450px] xl:w-[75%] xl:h-[500px] shadow-md rounded-xl bg-[#d98a45]">
        <div className="sm:w-[40%] h-[300px] sm:h-auto md:h-[620px] lg:h-[450px] xl:h-[500px]">
          <img
            src="/img/eating.jpg"
            alt="Meals"
            className="w-full h-full object-cover rounded-t-xl sm:rounded-none sm:rounded-r-xl"
          />
        </div>
        <div className="px-8 sm:px-12 py-6 sm:w-[60%]">
          <h2 className="font-bold text-[#333] text-2xl sm:text-3xl md:text-4xl py-6 xl:text-5xl">
            Get your first meal for free!
          </h2>
          <p className="text-[#333] text-sm sm:text-base xl:text-lg">
            Healthy, tasty and hassle-free meals are waiting for you. Start
            eating well today. You can cancel or pause anytime. And the first
            meal is on us!
          </p>
          <form className="flex flex-col gap-4 my-6 lg:grid grid-cols-2 lg:gap-6 xl:gap-8">
            <div className="flex flex-col gap-2">
              <label
                className="text-sm xl:text-base font-medium text-[#333]"
                htmlFor="fullName"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="John Smith"
                className="p-4 rounded-lg h-10 lg:h-12 border border-[#45260A] focus:outline-none focus:ring-2 focus:ring-[#45260A] text-base"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                className="text-sm xl:text-base font-medium text-[#333]"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="me@example.com"
                className="p-4 rounded-lg h-10 lg:h-12 border border-[#45260A] focus:outline-none focus:ring-2 focus:ring-[#45260A] text-base"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                className="text-sm xl:text-base font-medium text-[#333]"
                htmlFor="source"
              >
                Where did you hear from us?
              </label>
              <select
                id="source"
                name="source"
                className="pl-2 rounded-lg h-10 lg:h-12 border border-[#45260A] focus:outline-none focus:ring-2 focus:ring-[#45260A] text-sm bg-white"
                required
              >
                <option value="" disabled selected>
                  Please choose one option
                </option>
                <option value="friends">Friends and family</option>
                <option value="youtube">YouTube video</option>
                <option value="podcast">Podcast</option>
                <option value="facebook">Facebook ad</option>
                <option value="others">Others</option>
              </select>
            </div>
            <button
              type="submit"
              className="py-2 mt-4 md:mt-7 max-h-10 lg:max-h-12 text-sm font-semibold text-white bg-[#45260A] rounded-xl border-[3px] border-transparent hover:bg-white hover:text-[#45260A] transition-colors duration-300"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
