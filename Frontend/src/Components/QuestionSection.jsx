/* eslint-disable react/prop-types */
import { FaPlus, FaMinus } from 'react-icons/fa';
import { useState } from 'react';

const questions = [
  {
    question: "What is your return policy?",
    answer: "We offer a 30-day return policy with a full refund."
  },
  {
    question: "How do I track my order?",
    answer: "You can track your order through the link provided in your confirmation email."
  },
  {
    question: "Can I purchase items in bulk?",
    answer: "Yes, we offer bulk purchase discounts. Please contact our support for more details."
  },
  {
    question: "Do you offer international shipping?",
    answer: "Yes, we ship internationally. Shipping fees may vary depending on the destination."
  }
];

const FAQItem = ({ question, answer, isOpen, toggle }) => (
  <div className="mb-4">
    <div 
      className="flex justify-between items-center cursor-pointer"
      onClick={toggle}
    >
      <div className="flex items-center">
        <div className="bg-[#3FDBB1] text-white rounded-full p-1 mr-4">
          {isOpen ? <FaMinus /> : <FaPlus />}
        </div>
        <h3 className="text-lg font-medium">{question}</h3>
      </div>
    </div>
    {isOpen && <p className="mt-2 text-gray-600">{answer}</p>}
  </div>
);

export default function QuestionSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col items-center mt-10 mb-32">
      <h2 className="font-dm-sans text-[#EF9E48] ">FREQUENT QUESTION</h2>
      <h1 className="text-2xl font-semibold mb-8 text-center">Do you have any question?</h1>
      <div className="w-2/4">
        {questions.map((item, index) => (
          <FAQItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === index}
            toggle={() => toggleFAQ(index)}
          />
        ))}
      </div>
    </div>
  );
}
