import HomeIcon from '../assets/icons/home.svg?react';
import PaletteIcon from '../assets/icons/paint-palette.svg?react';
import SilhouetteIcon from '../assets/icons/silhouette.svg?react';
import HairIcon from '../assets/icons/hair.svg?react';
import ProfileIcon from '../assets/icons/profile-icon.svg?react';
import { Link } from 'react-router-dom';

export default function NavBar() {

    return (
        // Add media queries for mobile-first design. Let's make everything mobile-friendly from the start
        <nav className="text-center flex flex-col justify-between gap-6 bg-white w-23 h-screen p-4 sticky top-0 mt-5">
          <div>
          <button className="hover:bg-gray-300 rounded-lg">
            <Link to="/"><HomeIcon className="mx-auto my-2"/></Link>
          </button>
          <button className="hover:bg-gray-300 rounded-lg">
          <Link to="/color-palette"><PaletteIcon className="mx-auto my-2"/></Link>
          </button>
          <button className="hover:bg-gray-300 rounded-lg">
          <Link to="/silhouette"><SilhouetteIcon className="mx-auto my-2"/></Link>
          </button>
          <button className="hover:bg-gray-300 rounded-lg">
          <Link to="/hair"><HairIcon className="mx-auto my-2"/></Link>
          </button>
          </div>
          <button className="hover:bg-gray-300 rounded-lg">
          <Link to="/users/dashboard"><ProfileIcon className="mx-auto my-2"/></Link>
          </button>
        </nav>
      );
}