// eslint-disable-next-line react/prop-types
const FeatureCard = ({ number, feature, color }) => {
    const headingClassName = `font-dm-sans text-7xl font-bold text-[${color}]`
    console.log(headingClassName);
    return (
        <div className="bg-white overflow-hidden max-w-sm mx-auto rounded-lg shadow-md flex flex-col items-center justify-center w-[280px] h-[280px] p-5">
            <p style={{ color }} className="font-dm-sans text-7xl font-bold text-center mb-4">{number}</p>
            <p className="text-center">{feature}</p>
        </div>

    );
  };

  export default FeatureCard;