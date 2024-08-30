import PlanCard from "./PlanCard";


const Pricing = () => {
    const freePlan = {
      planName: 'Free Plan',
      isPremium: false,
      description: 'For Small teams or office',
      price: '$0.00/mo',
      features: [
        { name: 'Ultimate access to all course, exercises and assessments', included: true },
        { name: 'Free acess for all kind of exercise corrections with downloads.', included: true },
        { name: 'Total assessment corrections with free download access system', included: true },
        { name: 'Unlimited download of courses on the mobile app contents', included: false },
        { name: 'Download and print courses and exercises in PDF', included: false },
      ],
    };
  
    const premiumPlan = {
      planName: 'Premium Plan',
      isPremium: true,
      description: 'For startups enterprise',
      price: '$49.99/mo',
      features: [
        { name: 'Ultimate access to all course, exercises and assessments', included: true },
        { name: 'Free acess for all kind of exercise corrections with downloads.', included: true },
        { name: 'Total assessment corrections with free download access system', included: true },
        { name: 'Unlimited download of courses on the mobile app contents', included: true },
        { name: 'Download and print courses and exercises in PDF', included: true },
      ],
    };
  
    return (
      <div className="max-w-4xl mx-auto p-8">
        <div>
            <h2 className="text-center text-xl font-semibold mb-4">Our Pricing Plans</h2>
            <h1 className="text-center text-3xl font-bold mb-8">Choose the Best Plan for You</h1>
        </div>
  
        <div className="flex justify-center space-x-4 mb-8">
          <button className="bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors duration-300">
            Monthly Plan
          </button>
          <button className="bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors duration-300">
            Annual Plan
          </button>
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <PlanCard {...freePlan} />
          <PlanCard {...premiumPlan} />
        </div>
      </div>
    );
  };


  export default Pricing;