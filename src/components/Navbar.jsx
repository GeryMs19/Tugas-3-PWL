import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="py-2 flex justify-end gap-3 border-b-2 px-5">
        <NavLink to="/" className=" text-gray-400">
          <span>Beranda</span>
        </NavLink>
        <NavLink to="/about" className=" text-gray-400">
          <span>Tentang</span>
        </NavLink>
        <NavLink to="/contact" className=" text-gray-400">
          <span>Kontak</span>
        </NavLink>
      </nav>
    </>
  );
};

export default Navbar;
