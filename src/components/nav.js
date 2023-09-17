import { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="z-50 flex w-full justify-between items-center fixed top-0 bg-black/50 md:pb-5">
      <div className="flex items-center gap-4 ml-5">
        <img src="/logo192.png" alt="" title="" className="w-7 h-auto" />
        <h3 className="font-bold">| Portfolio</h3>
      </div>
      <ul className="hidden md:flex justify-end items-center gap-2 md:gap-10 text-sm md:text-md">
        {[
          { label: "About", url: "#about" },
          { label: "Projects", url: "#projects" },
          { label: "Contact", url: "#contact" },
        ].map((item, index) => {
          return (
            <li
              key={index}
              className="px-2 md:px-4 py-2 hover:bg-slate-300 hover:rounded-md hover:text-[#252525] transition-all shadow md:shadow-lg shadow-slate-200 rounded-md mt-2 mr-5 hover:shadow-[#864335] "
            >
              <a rel="noreferrer" href={item.url}>
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>
      <div className="flex md:hidden mr-10">
        {isMenuOpen ? (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10 zoom-in hover:text-[#05d6e2]"
              onClick={() => setIsMenuOpen(false)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            <ul className="fixed right-4 mt-10 shadow-md rounded-md flex flex-col bg-black/50 px-6 py-5 items-center gap-5 text-sm">
              {[
                { label: "About", url: "#about" },
                { label: "Projects", url: "#projects" },
                { label: "Contact", url: "#contact" },
              ].map((item, index) => {
                return (
                  <li
                    key={index}
                    className="transition-all border-b hover:shadow-sm"
                  >
                    <a rel="noreferrer" href={item.url}>
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10 zoom-in hover:text-[#05d6e2]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
            />
          </svg>
        )}
      </div>
    </nav>
  );
};

export default Nav;
