import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const linkBase = "block px-3 py-2 rounded-md text-sm font-medium transition";
const linkActive = "bg-gray-900 text-white";
const linkInactive = "text-gray-700 hover:bg-gray-200";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <nav className="mx-auto max-w-6xl px-4 py-3">
        {/* Top Bar */}
        <div className="flex items-center justify-between">
          <div className="text-lg font-semibold text-gray-900">Fake Store</div>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-gray-700"
          >
            ☰
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-2">
            <NavLink
              to="/products"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? linkActive : linkInactive}`
              }
            >
              Products
            </NavLink>
            <NavLink
              to="/jsonplaceholder"
              end
              className={({ isActive }) =>
                `${linkBase} ${isActive ? linkActive : linkInactive}`
              }
            >
              JsonPlaceHolder
            </NavLink>

            <NavLink
              to="/jsonholderpost"
              end
              className={({ isActive }) =>
                `${linkBase} ${isActive ? linkActive : linkInactive}`
              }
            >
              Jsonholderpost
            </NavLink>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="mt-3 flex flex-col gap-2 md:hidden">
            <NavLink
              to="/products"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? linkActive : linkInactive}`
              }
            >
              Products
            </NavLink>
            <NavLink
              to="/jsonplaceholder"
              end
              className={({ isActive }) =>
                `${linkBase} ${isActive ? linkActive : linkInactive}`
              }
            >
              JsonPlaceHolder
            </NavLink>

            <NavLink
              to="/jsonholderpost"
              end
              className={({ isActive }) =>
                `${linkBase} ${isActive ? linkActive : linkInactive}`
              }
            >
              Jsonholderpost
            </NavLink>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
