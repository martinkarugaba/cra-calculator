import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <div className="flex justify-between items-center px-16 py-6">
    <div>
      <h1 className="text-5xl font-semibold">Math Magicians</h1>
    </div>

    <ul className="flex justify-center items-center gap-x-4">
      <li className="border-r-2 cursor-pointer border-gray-950 pr-4">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="border-r-2 cursor-pointer border-gray-950 pr-4">
        <NavLink to="calculator">Calculator</NavLink>
      </li>
      <li className="border-gray-950 cursor-pointer pr-4">
        <NavLink to="quote">Quote</NavLink>
      </li>
    </ul>
  </div>
);
export default Navbar;
