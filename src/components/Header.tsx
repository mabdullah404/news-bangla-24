import Image from "next/image";
import NavLinks from "./NavLinks";
import UserInfo from "./UserInfo";

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

          <UserInfo />
        

        </div>
      </div>
      <NavLinks></NavLinks>
    </nav>
  );
};

export default Header;
