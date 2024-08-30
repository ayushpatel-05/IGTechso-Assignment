import { FaStar, FaEye } from 'react-icons/fa'; // Import icons for stars and eye

const TutorialCard = ({ image, stars = 5.0, reviewCount, tutorialTitle, viewCount }) => {
  return (
    <div className="bg-white overflow-hidden max-w-sm mx-auto">
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
  );
};

export default TutorialCard;
