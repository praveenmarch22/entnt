import { LOGO_URL } from "../utils/constants";

import NavBar from "./NavBar";

const Header = () => {
  return (
    <div className="flex justify-between  flex-wrap items-center  shadow-lg text-gray-600 ">
      <div>
        <img
          className=" w-[140px] md:ml-12 mt-1 mb-1 transition-transform transform-gpu hover:scale-90 cursor-pointer"
          alt="logo"
          src={LOGO_URL}
        />
      </div>
      <NavBar />
    </div>
  );
};

export default Header;
