import { useState } from "react";
import { logo, menu, close } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  console.log(toggle);
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      {/* Logo */}
      <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />

      {/* Navlink */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${
              // disini logic apabila dia di ujung atau jumlah index - 1  maka mr nya 0
              index === navLinks.length - 1 ? `mr-0` : `mr-10`
            }`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      {/* Hamburger Menu */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        {/* Logo Menu */}
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px]
          object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />

        {/* Kondisi kalau di click logo menu nya */}
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          {" "}
          <ul className="list-none justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${
                  // disini logic apabila dia di ujung atau jumlah index - 1  maka mr nya 0
                  index === navLinks.length - 1 ? `mr-0` : `mb-4`
                }`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
