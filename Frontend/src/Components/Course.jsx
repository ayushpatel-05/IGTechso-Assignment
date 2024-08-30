/* eslint-disable react/prop-types */
import { FaStar, FaEye, FaChevronDown } from 'react-icons/fa';
import videoPlayer from '../assets/VideoPlayer.png'

const Course = ({ 
  rating, // Integer rating value
  reviewCount, // Number of reviews
  views, // Number of views
  title, // Title of the video
  description, // Description of the video
  numVideos, // Number of videos
  totalHours // Total hours to complete
}) => {
  // Generate star icons based on rating
  const stars = Array.from({ length: 5 }, (_, index) => {
    return index < rating ? 'gold' : 'gray';
  });

  return (
    <div className="flex-grow bg-white shadow-lg rounded-lg overflow-hidden flex items-center p-4">
      {/* Video Logo (Fixed design) */}
      <div className="flex-shrink-0 flex items-center justify-center w-[80px] h-[80px] bg-[#fce5cc] rounded-full relative">
        <img src={videoPlayer} alt="" />
        {/* </div> */}
      </div>

      {/* Video Details */}
      <div className="flex-grow ml-10">
        <div className="flex items-center mb-2">
          <div className="flex space-x-1">
            {stars.map((color, index) => (
              <FaStar key={index} className={`text-${color}-500`} />
            ))}
          </div>
          <span className="ml-2 text-gray-700">{rating}</span>
          <span className="ml-2 text-gray-500">({reviewCount} reviews)</span>
          <div className="flex items-center ml-4 text-gray-500">
            <FaEye />
            <span className="ml-1">{views} students watched</span>
          </div>
        </div>
        <div className="text-lg font-bold mb-2">{title}</div>
        <div className="text-gray-600">{description}</div>
      </div>

      {/* Button and Dropdown */}
      <div className="flex items-center ml-4">
        <button className="bg-[#3FDBB1] text-white px-4 py-2 rounded-lg flex items-center">
          <span className="text-sm">{numVideos} Videos | {totalHours} Hours</span>
        </button>
        <FaChevronDown className="ml-2" />
      </div>
    </div>
  );
};

export default Course;
