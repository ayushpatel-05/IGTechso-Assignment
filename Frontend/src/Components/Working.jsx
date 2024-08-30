/* eslint-disable react/no-unescaped-entities */
import FunctionCard from "./FunctionCard";

export default function Working() {
  return (
    <div className="flex flex-col gap-32 py-28 bg-gradient-to-b from-[#EBF9FF] to-[#F6F6FF]">
      <div className="flex flex-col items-center">
        <h1 className="font-dm-sans text-[#EF9E48] ">WHATS THE FUNCTION</h1>
        <h1 className="text-3xl font-bold">Let's see how it works</h1>
      </div>

      <div className="flex justify-center">
        {data.map((card, index) => {
            return (
                <FunctionCard number={card.number}
                heading={card.heading}
                description={card.description}
                key={index}></FunctionCard>
            )
        })}
      </div>
    </div>
  );
}


const data = [
    {
        number:"01",
        heading:"Set disbursement Instructions",
        description:"Get your blood tests delivered at home collect a sample from the your blood tests"
    },
    {
        number:"02",
        heading:"Assembly retrieves funds from account",
        description:"Get your blood tests delivered at home collect a sample from the your blood tests."
    },
    {
        number:"03",
        heading:"Assembly initiates disbursement",
        description:"Get your blood tests delivered at home collect a sample from the your blood tests."
    },
    {
        number:"04",
        heading:"Customer receives funds payment",
        description:"Get your blood tests delivered at home collect a sample from the your blood tests"
    }
]