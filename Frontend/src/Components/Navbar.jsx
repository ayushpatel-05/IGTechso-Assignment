import { FaCrown } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="w-[1400px] flex items-center justify-between p-6 z-10 mx-auto">
      <div className="flex items-center">
        <FaCrown className="h-8 w-8 mr-3" />
        <span className="text-xl font-bold text-gray-800">Landguru</span>
      </div>

      <div className="flex space-x-6 flex-grow justify-center">
        <a href="#home" className="text-gray-700 hover:text-gray-900">Home</a>
        <a href="#advertise" className="text-gray-700 hover:text-gray-900">Advertise</a>
        <a href="#support" className="text-gray-700 hover:text-gray-900">Support</a>
        <a href="#contact" className="text-gray-700 hover:text-gray-900">Contact</a>
      </div>
      <div>
        <a 
          href="#try-for-free" 
          className="bg-yellow-200 text-[#EF9E48] px-4 py-2 rounded-lg hover:bg-yellow-300 transition duration-300 leading-[24px] font-semibold"
        >
          Try for Free
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
