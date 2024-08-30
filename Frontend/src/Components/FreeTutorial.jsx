import { FaStar, FaEye } from 'react-icons/fa';
import image from "../assets/startGrid.png"

export default function FreeTutorial() {
    let stars = 5.0, reviewCount = 392, tutorialTitle = "Convert your web layout theming easily with sketch zeplin extension",viewCount = 1037 
  return (
    <div className="flex justify-center items-center gap-36 my-32">
      <div className="bg-white overflow-hidden max-w-sm">
      {/* Image at the top */}
      <img src={image} alt="Tutorial" className="w-full h-48 object-cover" />

      {/* Stars and review number */}
      <div className="flex items-center p-4">
        <div className="flex space-x-1">
          {[...Array(5)].map((_, index) => (
            <FaStar key={index} className={`text-xl ${index < reviewCount ? 'text-yellow-500' : 'text-gray-400'}`} />
          ))}
        </div>
        <p className="ml-2 text-gray-600">{stars} ({reviewCount} Reviews)</p>
      </div>

      {/* Tutorial title */}
      <div>
        <h2 className="text-xl font-bold text-gray-800">{tutorialTitle}</h2>
      </div>

      {/* Eye icon with number of views */}
      <div className="flex items-center p-4 ">
        <FaEye className="text-gray-500 text-xl" />
        <p className="ml-2 text-gray-500">{viewCount} Views</p>
      </div>
    </div>
    <div className="max-w-xl flex flex-col p-7">
        <h1 className="font-dm-sans text-[#EF9E48] mb-5">FREE TUTORIAL</h1>
        <div className="flex flex-col gap-7">
            <h1 className="font-dm-sans text-5xl font-bold">More than thousand of free tutorial upload every weeks</h1>
            <p className='leading-9'>
                Get your tests delivered at let home collect sample
                from the victory of the managments that supplies 
                best design system guidelines ever. Get your tests 
                delivered at let home collect sample.
            </p>
            <button
            className="self-start bg-yellow-200 text-[#EF9E48] px-4 py-2 rounded-lg hover:bg-yellow-300 transition duration-300 leading-[24px] font-semibold">
            Explore details
            </button>
        </div>
        </div>
    </div>
  );
}