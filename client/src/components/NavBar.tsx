import HomeIcon from "../assets/icons/home.svg?react";
import PaletteIcon from "../assets/icons/paint-palette.svg?react";
import SilhouetteIcon from "../assets/icons/silhouette.svg?react";
import HairIcon from "../assets/icons/hair.svg?react";
import ProfileIcon from "../assets/icons/profile-icon.svg?react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../context/useAuth";

export default function NavBar() {
  const { user } = useAuth();

  return (
    <nav className="fixed bottom-0 left-0 z-50 flex h-16 w-full bg-white shadow-lg lg:sticky lg:top-0 lg:h-screen lg:w-23 lg:flex-col lg:justify-between lg:p-4">
      {/* Mobile */}
      <div className="flex w-full lg:hidden">
        <NavLink
          to="/"
          className={({ isActive }) => `flex flex-1 items-center justify-center hover:bg-gray-200 ${isActive ? "bg-gray-200" : "" }`}
        >
          <HomeIcon />
        </NavLink>

        <NavLink
          to="/color-palette"
          className={({ isActive }) => `flex flex-1 items-center justify-center hover:bg-gray-200 ${isActive ? "bg-gray-200" : "" }`}
        >
          <PaletteIcon />
        </NavLink>

        <NavLink
          to="/silhouette"
          className={({ isActive }) => `flex flex-1 items-center justify-center hover:bg-gray-200 ${isActive ? "bg-gray-200" : "" }`}
        >
          <SilhouetteIcon />
        </NavLink>

        <NavLink
          to="/hair"
          className={({ isActive }) => `flex flex-1 items-center justify-center hover:bg-gray-200 ${isActive ? "bg-gray-200" : "" }`}
        >
          <HairIcon />
        </NavLink>

        <NavLink
          to={user ? "/users/dashboard" : "/users/login"}
          className={({ isActive }) => `flex flex-1 items-center justify-center hover:bg-gray-200 ${isActive ? "bg-gray-200" : "" }`}
        >
          <ProfileIcon />
        </NavLink>
      </div>

      {/* Desktop */}
      <div className="hidden h-full flex-col justify-between lg:flex">
        <div className="space-y-2">
          <NavLink
            to="/"
            className={({ isActive }) => `block rounded-lg py-2 hover:bg-gray-200 ${isActive ? "bg-gray-200" : "" }`}
          >
            <HomeIcon className="mx-auto" />
          </NavLink>

          <NavLink
            to="/color-palette"
            className={({ isActive }) => `block rounded-lg py-2 hover:bg-gray-200 ${isActive ? "bg-gray-200" : "" }`}
          >
            <PaletteIcon className="mx-auto" />
          </NavLink>

          <NavLink
            to="/silhouette"
            className={({ isActive }) => `block rounded-lg py-2 hover:bg-gray-200 ${isActive ? "bg-gray-200" : "" }`}
          >
            <SilhouetteIcon className="mx-auto" />
          </NavLink>

          <NavLink
            to="/hair"
            className={({ isActive }) => `block rounded-lg py-2 hover:bg-gray-200 ${isActive ? "bg-gray-200" : "" }`}
          >
            <HairIcon className="mx-auto" />
          </NavLink>
        </div>

        <NavLink
          to={user ? "/users/dashboard" : "/users/login"}
          className={({ isActive }) => `block rounded-lg py-2 hover:bg-gray-200 ${isActive ? "bg-gray-200" : "" }`}
        >
          <ProfileIcon className="mx-auto" />
        </NavLink>
      </div>
    </nav>
  );
}