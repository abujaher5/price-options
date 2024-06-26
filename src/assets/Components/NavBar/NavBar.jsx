import { useState } from "react";
import Link from "../Link/Link";
import { RiMenu2Line, RiCloseFill } from "react-icons/ri";
const NavBar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "/portfolio", name: "Portfolio" },
  ];

  return (
    <nav className="bg-yellow-400 p-6">
      <div className="md:hidden" onClick={() => setOpen(!open)}>
        {open === true ? (
          <RiCloseFill className="text-2xl"></RiCloseFill>
        ) : (
          <RiMenu2Line className="text-2xl "></RiMenu2Line>
        )}
      </div>

      <ul
        className={`md:flex justify-around absolute md:static shadow-lg md:shadow-none  bg-yellow-400 rounded-2xl px-7 duration-1000
     ${open ? "top-16" : "-top-60"} `}
        //${open? "":"hidden"} can be used
      >
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
