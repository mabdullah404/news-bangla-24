import Image from "next/image";
import NavLinks from "./NavLinks";

const Header = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <nav className="  bg-gray-100 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4">
          {/* Left - Empty */}
          <div className="hidden md:block"></div>

          {/* Center - Logo + Title */}
          <div className="flex items-center justify-center gap-3">
            <Image
              width={50}
              height={50}
              src="/logo.webp"
              alt="Bangla News 24"
              className="w-11 h-11 sm:w-12 sm:h-12"
            />

            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-[#d11111] whitespace-nowrap">
                Bangla News 24
              </h1>

              <p className="text-[10px] sm:text-xs text-gray-500">{date}</p>
            </div>
          </div>

          {/* Right - Buttons */}
          <div className="flex justify-center md:justify-self-end gap-2 sm:gap-3">
            <button
              className="text-xs sm:text-sm text-gray-700 px-3 py-2
                hover:text-[#d11111]
                    rounded-md transition duration-200"
            >
              সাইন ইন
            </button>

            <button className="bg-[#d11111] text-white px-3 sm:px-4 py-2 rounded-md text-xs sm:text-sm">
              সাইন আপ
            </button>
          </div>
        </div>
      </div>
      <NavLinks></NavLinks>
    </nav>
  );
};

export default Header;
