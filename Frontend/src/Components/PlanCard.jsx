import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const PlanCard = ({ planName, isPremium, description, price, features }) => {
  let divClassName = "relative border p-8 rounded-lg shadow-md bg-white flex flex-col justify-between w-full gap-10 py-14 ";
  if(isPremium)divClassName += "border-2 border-green-500"
    return (
      <div className={divClassName}>
        <div>
          {isPremium && (
            <div className="absolute top-5 left-8 bg-[#EF9E48] text-sm text-white px-3 py-1 ">
              Recommended
            </div>
          )}
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-xl font-bold">{planName}</h3>
              <p className="text-gray-600">{description}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">Starting from</p>
              <p className="text-green-600 text-2xl font-bold">{price}</p>
            </div>
          </div>
        </div>
  
        <ul className="mt-4 space-y-3 flex flex-col gap-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              {feature.included ? (
                <FaCheckCircle className="text-green-500 mr-2" />
              ) : (
                <FaTimesCircle className="text-gray-500 mr-2" />
              )}
              <span>{feature.name}</span>
            </li>
          ))}
        </ul>
  
        <button className="grow-0 bg-yellow-200 text-[#EF9E48] px-4 py-2 rounded-lg hover:bg-yellow-300 transition duration-300 leading-[24px] font-semibold">
          Start Free Trial
        </button>
      </div>
    );
  };

  export default PlanCard;