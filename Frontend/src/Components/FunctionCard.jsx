const FunctionCard = ({ number, heading, description }) => {
  return (
    <div className="bg-white w-80 p-6 relative bg-gradient-to-b from-[#EBF9FF] to-[#F6F6FF]">
      {/* Top Section */}
      <div className="flex justify-between items-start">
        {/* Circle with Number */}
        <div className="relative">
          <div className="w-18 h-18 rounded-full bg-white shadow-lg flex items-center justify-center">
            <h1 className="text-4xl font-bold p-4">{number}</h1>
          </div>
        </div>
        {/* SVG Arrow */}
        <svg
          width="204"
          height="43"
          viewBox="0 0 204 43"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 right-0 mt-2 mr-2"
        >
          <path
            d="M1 32.7207C1 32.7207 93.3 -38.8069 196 32.7207"
            stroke="#C2CBDE"
            strokeWidth="1.5"
            strokeDasharray="5 5"
          />
          <path
            d="M181.219 39.4988C181.219 39.4988 200.334 45.0252 202.156 38.7642C203.978 32.5031 202.611 26.0287 196.694 17.1587"
            stroke="#C2CBDE"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
        </svg>
      </div>

      {/* Heading */}
      <h2 className="text-xl font-semibold mt-4">{heading}</h2>

      {/* Description */}
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
};

export default FunctionCard;
