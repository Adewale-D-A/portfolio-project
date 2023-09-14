import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="flex w-full justify-between fixed top-0 bg-black/50 pb-5">
      <div className="flex items-center gap-4 ml-5">
        <img src="/logo192.png" alt="" title="" className="w-7 h-auto" />
        <h3 className="font-bold">| Portfolio</h3>
      </div>
      <ul className="flex justify-end items-center gap-10">
        {[
          { label: "About", url: "#" },
          { label: "Projects", url: "#" },
          { label: "Contact", url: "#" },
        ].map((item, index) => {
          return (
            <li
              key={index}
              className="px-4 py-2 hover:bg-slate-300 hover:rounded-md hover:text-[#252525] transition-all shadow-lg shadow-slate-200 rounded-md mt-2 mr-5 hover:shadow-[#864335] "
            >
              <Link to={item.url}>{item.label}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
