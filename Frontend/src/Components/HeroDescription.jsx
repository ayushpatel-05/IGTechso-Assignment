import underLine from '../assets/Control-V-removebg-preview.png';
import { FaSearch, FaDropbox, FaPaypal, FaStar } from 'react-icons/fa';

export default function HeroDescription() {
  return (
    <div className="mt-12">
    <div className="flex items-center">
      <div className="flex space-x-1">
        <FaStar className="text-[20px]" />
        <FaStar className="text-[20px]" />
        <FaStar className="text-[20px]" />
        <FaStar className="text-[20px]" />
        <FaStar className="text-gray-400 text-[20px]" />
      </div>
      <p className="ml-3 font-hebo text-[15px] leading-[30px] font-medium">
        Trusted by over 4,332 students
      </p>
    </div>

    <h1 className="font-dm-sans text-[85px] leading-[100px] font-bold">
      Learn Design
    </h1>
    <h1 className="font-dm-sans text-[85px] leading-[100px] font-bold">
    with Nia Matos
    </h1>
    <img src={underLine} alt="" className="w-[379px] h-[15px] ml-52"/>

    <p className="font-dm-sans leading-[42px] font-[18px]">
    Get your blood tests delivered at let home collect sample <br />from the victory of the managments that supplies best <br />
    design system guidelines ever.
    </p>


    <div className="flex items-center bg-white border rounded-lg mt-[40px]" style={{ width: '520px', height: '70px' }}>
      <input
        type="text"
        placeholder="Search Course Name"
        className="flex-grow px-4 h-full text-lg outline-none"
      />
      <FaSearch className="text-gray-500 mx-4 text-2xl" />
    </div>


    <div className="mt-[25px] flex items-center space-x-6 text-gray-400">
      <p className="text-lg font-semibold">Sponsored by:</p>
      <div className="flex items-center space-x-2">
        <FaPaypal className="text-3xl" />
        <p className="text-lg font-bold">Paypal</p> {/* Make font wider */}
      </div>
      <div className="flex items-center space-x-2">
        {/* <FaGoogle className="text-3xl" /> */}
        <p className="text-lg font-bold">Google</p> {/* Make font wider */}
      </div>
      <div className="flex items-center space-x-2">
        <FaDropbox className="text-3xl" />
        <p className="text-lg font-bold">Dropbox</p> {/* Make font wider */}
      </div>
    </div>
  </div>
  );
}