const Footer = () => {
  return (
    <div className="flex flex-col items-center my-32">
      {/* Centered line */}
      <div className="w-1/3 h-px bg-gray-300 mb-12"></div>

      {/* Footer Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-gray-800 w-full max-w-5xl">
        {/* About Us Column */}
        <div>
          <h3 className="font-bold mb-4">About Us</h3>
          <ul className="space-y-2">
            <li><a href="#">Our Story</a></li>
            <li><a href="#">Team</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>

        {/* Our Information Column */}
        <div>
          <h3 className="font-bold mb-4">Our Information</h3>
          <ul className="space-y-2">
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Support</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </div>

        {/* My Account Column */}
        <div>
          <h3 className="font-bold mb-4">My Account</h3>
          <ul className="space-y-2">
            <li><a href="#">Login</a></li>
            <li><a href="#">Register</a></li>
            <li><a href="#">Order History</a></li>
            <li><a href="#">Wish List</a></li>
            <li><a href="#">Track Order</a></li>
          </ul>
        </div>

        {/* Policy Column */}
        <div>
          <h3 className="font-bold mb-4">Policy</h3>
          <ul className="space-y-2">
            <li><a href="#">Shipping Policy</a></li>
            <li><a href="#">Return Policy</a></li>
            <li><a href="#">Refund Policy</a></li>
            <li><a href="#">Payment Methods</a></li>
            <li><a href="#">Terms of Use</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
