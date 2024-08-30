import underLine from '../assets/Control-V-removebg-preview.png';
import { FaSearch, FaDropbox, FaPaypal, FaStar } from 'react-icons/fa';



export default function HeroDescription() {
  return (
    <div className="mt-6 sm:mt-8 md:mt-12">
      <div className="flex items-center">
        <div className="flex space-x-1">
          <FaStar className="text-[16px] sm:text-[18px] md:text-[20px]" />
          <FaStar className="text-[16px] sm:text-[18px] md:text-[20px]" />
          <FaStar className="text-[16px] sm:text-[18px] md:text-[20px]" />
          <FaStar className="text-[16px] sm:text-[18px] md:text-[20px]" />
          <FaStar className="text-gray-400 text-[16px] sm:text-[18px] md:text-[20px]" />
        </div>
        <p className="ml-2 sm:ml-3 font-hebo text-[13px] sm:text-[14px] md:text-[15px] leading-[20px] sm:leading-[25px] md:leading-[30px] font-medium">
          Trusted by over 4,332 students
        </p>
      </div>

      <h1 className="font-dm-sans text-[50px] sm:text-[60px] md:text-[85px] leading-[60px] sm:leading-[75px] md:leading-[100px] font-bold">
        Learn Design
      </h1>
      <h1 className="font-dm-sans text-[50px] sm:text-[60px] md:text-[85px] leading-[60px] sm:leading-[75px] md:leading-[100px] font-bold">
        with Nia Matos
      </h1>
      <img
        src={underLine}
        alt=""
        className="w-[200px] sm:w-[300px] md:w-[379px] h-[10px] sm:h-[12px] md:h-[15px] ml-28 sm:ml-36 md:ml-52"
      />

      <p className="font-dm-sans leading-[28px] sm:leading-[35px] md:leading-[42px] text-[14px] sm:text-[16px] md:text-[18px]">
        Get your blood tests delivered at let home collect sample
        <br className="hidden sm:block" />
        from the victory of the managements that supplies best
        <br className="hidden sm:block" />
        design system guidelines ever.
      </p>

      <div
        className="flex items-center bg-white border rounded-lg mt-[20px] sm:mt-[30px] md:mt-[40px] h-[50px] sm:h-[60px] md:h-[70px] w-full max-w-[520px]"
        >
        <input
          type="text"
          placeholder="Search Course Name"
          className="flex-grow px-4 h-full text-base sm:text-lg md:text-xl outline-none"
        />
        <FaSearch className="text-gray-500 mx-4 text-xl sm:text-2xl md:text-3xl" />
      </div>

      <div className="mt-[15px] sm:mt-[20px] md:mt-[25px] flex items-center space-x-4 sm:space-x-5 md:space-x-6 text-gray-400">
        <p className="text-sm sm:text-base md:text-lg font-semibold">Sponsored by:</p>
        <div className="flex items-center space-x-2">
          <FaPaypal className="text-2xl sm:text-[2.5rem] md:text-3xl" />
          <p className="text-sm sm:text-base md:text-lg font-bold">Paypal</p>
        </div>
        <div className="flex items-center space-x-2">
          <p className="text-sm sm:text-base md:text-lg font-bold">Google</p>
        </div>
        <div className="flex items-center space-x-2">
          <FaDropbox className="text-2xl sm:text-[2.5rem] md:text-3xl" />
          <p className="text-sm sm:text-base md:text-lg font-bold">Dropbox</p>
        </div>
      </div>
    </div>
  );
}
