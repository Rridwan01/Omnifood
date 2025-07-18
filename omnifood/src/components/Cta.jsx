import "../styles/index.css";

export function Cta() {
  return (
    <section id="cta" className="mb-16 md:flex items-center justify-center">
      <div className="flex flex-col sm:flex-row-reverse my-4 mx-8 w-[95%] md:w-[90%] xl:w-[85%] shadow-md rounded-xl bg-[#d98a45]">
        <img
          className="rounded-t-xl sm:rounded-t-none sm:rounded-e-xl w-auto h-[200px] object-cover sm:h-[450px] sm:w-[40%]"
          src="/img/eating.jpg"
          alt="Meals"
        />
        <div className="px-8 sm:px-12 py-6 sm:w-[60%]">
          <h2 className="font-bold text-[#333] text-2xl sm:text-3xl py-6">
            Get your first meal for free!
          </h2>
          <p className="text-[#333] text-sm sm:text-base">
            Healthy, tasty and hassle-free meals are waiting for you. Start
            eating well today. You can cancel or pause anytime. And the first
            meal is on us!
          </p>
          <form className="flex flex-col gap-4 my-6 md:grid grid-cols-2 md:gap-6">
            <div className="flex flex-col gap-2">
              <label
                className="text-sm font-medium text-[#333]"
                htmlFor="fullName"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="John Smith"
                className="p-4 rounded-lg border border-[#45260A] focus:outline-none focus:ring-2 focus:ring-[#45260A] text-base"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                className="text-sm font-medium text-[#333]"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="me@example.com"
                className="p-4 rounded-lg border border-[#45260A] focus:outline-none focus:ring-2 focus:ring-[#45260A] text-base"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                className="text-sm font-medium text-[#333]"
                htmlFor="source"
              >
                Where did you hear from us?
              </label>
              <select
                id="source"
                name="source"
                className="p-4 rounded-lg border border-[#45260A] focus:outline-none focus:ring-2 focus:ring-[#45260A] text-base bg-white"
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
              className="py-4 mt-4 text-base font-bold text-white bg-[#45260A] rounded-xl border-[3px] border-transparent hover:bg-white hover:text-[#45260A] transition-colors duration-300"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
