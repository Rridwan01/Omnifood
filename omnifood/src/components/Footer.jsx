import "../styles/index.css";

// export function Footer() {
//   return (
//     <section id="footer" className="py-16">
//       <div className="pl-4 md:flex md:flex-row-reverse md:justify-between md:items-start md:max-w-6xl xl:max-w-7xl md:mx-auto xl:px-8">
//         <div className="flex justify-between items-start md:gap-8 xl:w-3/5">
//           <div className="p-4 md:pt-0 flex flex-col gap-3 text-[#767676] xl:w-1/3">
//             <h3 className="font-semibold text-base xl:text-lg text-[#555] pb-4">
//               Account
//             </h3>
//             <p className="text-[13px] xl:text-base hover:text-[#555]">
//               <a href="#">Create account</a>
//             </p>
//             <p className="text-[13px] xl:text-base hover:text-[#555]">
//               <a href="#">Sign in</a>
//             </p>
//             <p className="text-[13px] xl:text-base hover:text-[#555]">
//               <a href="#">iOS app</a>
//             </p>
//             <p className="text-[13px] xl:text-base hover:text-[#555]">
//               <a href="#">Android app</a>
//             </p>
//           </div>
//           <div className="p-4 md:pt-0 flex flex-col gap-3 text-[#767676] xl:w-1/3">
//             <h3 className="font-semibold text-base xl:text-lg text-[#555] pb-4">
//               Company
//             </h3>
//             <p className="text-[13px] xl:text-base hover:text-[#555]">
//               <a href="#">About Omnifood</a>
//             </p>
//             <p className="text-[13px] xl:text-base hover:text-[#555]">
//               <a href="#">For Business</a>
//             </p>
//             <p className="text-[13px] xl:text-base hover:text-[#555]">
//               <a href="#">Cooking partners</a>
//             </p>
//             <p className="text-[13px] xl:text-base hover:text-[#555]">
//               <a href="#">Careers</a>
//             </p>
//           </div>
//           <div className="p-4 md:pt-0 flex flex-col gap-3 text-[#767676] xl:w-1/3">
//             <h3 className="font-semibold text-base xl:text-lg text-[#555] pb-4">
//               Resources
//             </h3>
//             <p className="text-[13px] xl:text-base hover:text-[#555]">
//               <a href="#">Recipe directory</a>
//             </p>
//             <p className="text-[13px] xl:text-base hover:text-[#555]">
//               <a href="#">Help Center</a>
//             </p>
//             <p className="text-[13px] xl:text-base hover:text-[#555]">
//               <a href="#">Privacy and terms</a>
//             </p>
//           </div>
//         </div>

//         <div className="flex mt-12 md:mt-0 gap-8 xl:gap-16 xl:w-2/5">
//           <div className="flex flex-col gap-6 pl-4 xl:w-1/2">
//             <div className="logo">
//               <a href="#">
//                 <img
//                   className="w-[120px] md:w-[145px] xl:w-[180px]"
//                   src="/img/omnifood-logo.png"
//                   alt="Omnifood Logo"
//                 />
//               </a>
//             </div>
//             <div className="flex gap-6 text-sm xl:text-base text-[#767676]">
//               <p>
//                 <a href="#" className="hover:text-[#555]">
//                   IG
//                 </a>
//               </p>
//               <p>
//                 <a href="#" className="hover:text-[#555]">
//                   FB
//                 </a>
//               </p>
//               <p>
//                 <a href="#" className="hover:text-[#555]">
//                   X
//                 </a>
//               </p>
//             </div>
//             <div>
//               <p className="text-xs xl:text-sm text-[#767676] mt-4">
//                 Copyright © 2025 by Omnifood, Inc. All rights reserved.
//               </p>
//             </div>
//           </div>

//           <div className="flex flex-col gap-6 text-[13px] xl:text-base xl:w-1/2">
//             <h3 className="font-semibold text-base xl:text-lg text-[#555]">
//               Contact us
//             </h3>
//             <p className="text-[#767676]">
//               623 Harrison St., 2nd Floor, San Francisco, CA 94107
//             </p>
//             <div className="text-[#767676]">
//               <p>+234 912 158 0179</p>
//               <p>olalekanr04@gmail.com</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

export function Footer() {
  const linkSections = [
    {
      title: "Account",
      links: ["Create account", "Sign in", "iOS app", "Android app"],
    },
    {
      title: "Company",
      links: ["About Omnifood", "For Business", "Cooking partners", "Careers"],
    },
    {
      title: "Resources",
      links: ["Recipe directory", "Help Center", "Privacy and terms"],
    },
  ];

  return (
    <section id="footer" className="py-16 text-[#767676]">
      <div className="pl-4 md:flex md:flex-row-reverse md:justify-between md:items-start md:max-w-6xl xl:max-w-7xl md:mx-auto xl:px-8">
        {/* Link Sections */}
        <div className="flex justify-between items-start md:gap-8 xl:w-3/5">
          {linkSections.map((section, index) => (
            <div
              key={index}
              className="p-4 md:pt-0 flex flex-col gap-3 xl:w-1/3"
            >
              <h3 className="font-semibold text-base xl:text-lg text-[#555] pb-4">
                {section.title}
              </h3>
              {section.links.map((link, i) => (
                <p
                  key={i}
                  className="text-[13px] xl:text-base hover:text-[#555] cursor-pointer"
                >
                  <a href="#">{link}</a>
                </p>
              ))}
            </div>
          ))}
        </div>

        {/* Logo and Contact */}
        <div className="flex mt-12 md:mt-0 gap-8 xl:gap-16 xl:w-2/5">
          {/* Logo + Socials */}
          <div className="flex flex-col gap-6 pl-4 xl:w-1/2">
            <a href="#">
              <img
                className="w-[120px] md:w-[145px] xl:w-[180px]"
                src="/img/omnifood-logo.png"
                alt="Omnifood Logo"
              />
            </a>
            <div className="flex gap-6 text-sm xl:text-base">
              {["IG", "FB", "X"].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="hover:text-[#555] cursor-pointer"
                >
                  {platform}
                </a>
              ))}
            </div>
            <p className="text-xs xl:text-sm mt-4">
              © 2025 Omnifood, Inc. All rights reserved.
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-6 text-[13px] xl:text-base xl:w-1/2">
            <h3 className="font-semibold text-base xl:text-lg text-[#555]">
              Contact us
            </h3>
            <p>623 Harrison St., 2nd Floor, San Francisco, CA 94107</p>
            <div>
              <p>+234 912 158 0179</p>
              <p>olalekanr04@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
