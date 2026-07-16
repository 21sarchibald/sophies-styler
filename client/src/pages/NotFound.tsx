import { Link } from 'react-router-dom';
import notFoundImage1 from "../assets/images/notFound/404-1.png"
import notFoundImage2 from "../assets/images/notFound/404-2.png"
import notFoundImage3 from "../assets/images/notFound/404-3.png"

export default function NotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <div className="flex flex-row justify-center mb-5" id="404-Error-Box">
        <img src={notFoundImage1} alt="4" className="w-28 p-2" />
        <img src={notFoundImage2} alt="0" className="w-28 p-2" />
        <img src={notFoundImage3} alt="4" className="w-28 p-2"/>
      </div>
      <h2>Oh no! Page Not Found</h2>
      <p className="mt-5 mb-10">The page you're looking for is gone or has moved. Maybe try a different route?</p>
      <Link to="/" className="bg-black text-white hover:cursor-pointer hover:bg-gray-800 pt-3 pb-3 pl-5 pr-5 rounded-4xl">
        Return home
      </Link>
    </div>
  );
}