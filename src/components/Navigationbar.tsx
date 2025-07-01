import { appleImg, searchImg, bagImg } from "../utils/";
import { navLists } from "../constants";

function Navigationbar() {
  return (
    <header className="w-full py-5 px-5 sm:px-10  flex justify-between items-center">
      <nav className="flex w-full screen-max-width">

        <img src={appleImg} width={14} height={18} />

        <div className="flex flex-1 gap-5 justify-center max-sm:hidden">
          {navLists.map((navItem: string, index: number) => (
            <div key={index} className="px-5 text-sm cursor-pointer text-gray-600 hover:text-white transition-all">
              {navItem}
            </div>
          ))}
        </div>

        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1 ">
          <img src={searchImg} width={18} height={18} />
          <img src={bagImg} width={18} height={18} />
        </div>
      </nav>
    </header>
  );
}

export default Navigationbar;
