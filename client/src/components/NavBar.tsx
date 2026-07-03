import HomeIcon from "../assets/icons/home.svg?react";
import PaletteIcon from "../assets/icons/paint-palette.svg?react";
import SilhouetteIcon from "../assets/icons/silhouette.svg?react";
import HairIcon from "../assets/icons/hair.svg?react";
import ProfileIcon from "../assets/icons/profile-icon.svg?react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/useAuth";

export default function NavBar() {
  const { user } = useAuth();

  return (
    <nav className="fixed bottom-0 left-0 z-50 flex h-16 w-full bg-white shadow-lg lg:sticky lg:top-0 lg:h-screen lg:w-23 lg:flex-col lg:justify-between lg:p-4">
      {/* Mobile */}
      <div className="flex w-full lg:hidden">
        <Link
          to="/"
          className="flex flex-1 items-center justify-center hover:bg-gray-300"
        >
          <HomeIcon />
        </Link>

        <Link
          to="/color-palette"
          className="flex flex-1 items-center justify-center hover:bg-gray-300"
        >
          <PaletteIcon />
        </Link>

        <Link
          to="/silhouette"
          className="flex flex-1 items-center justify-center hover:bg-gray-300"
        >
          <SilhouetteIcon />
        </Link>

        <Link
          to="/hair"
          className="flex flex-1 items-center justify-center hover:bg-gray-300"
        >
          <HairIcon />
        </Link>

        <Link
          to={user ? "/users/dashboard" : "/users/login"}
          className="flex flex-1 items-center justify-center hover:bg-gray-300"
        >
          <ProfileIcon />
        </Link>
      </div>

      {/* Desktop */}
      <div className="hidden h-full flex-col justify-between lg:flex">
        <div className="space-y-2">
          <Link
            to="/"
            className="block rounded-lg py-2 hover:bg-gray-300"
          >
            <HomeIcon className="mx-auto" />
          </Link>

          <Link
            to="/color-palette"
            className="block rounded-lg py-2 hover:bg-gray-300"
          >
            <PaletteIcon className="mx-auto" />
          </Link>

          <Link
            to="/silhouette"
            className="block rounded-lg py-2 hover:bg-gray-300"
          >
            <SilhouetteIcon className="mx-auto" />
          </Link>

          <Link
            to="/hair"
            className="block rounded-lg py-2 hover:bg-gray-300"
          >
            <HairIcon className="mx-auto" />
          </Link>
        </div>

        <Link
          to={user ? "/users/dashboard" : "/users/login"}
          className="block rounded-lg py-2 hover:bg-gray-300"
        >
          <ProfileIcon className="mx-auto" />
        </Link>
      </div>
    </nav>
  );
}