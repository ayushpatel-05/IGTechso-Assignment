// import React from 'react';
// import AwesomeSlider from 'react-awesome-slider';
// import 'react-awesome-slider/dist/styles.css'; // Import slider styles
import cardImage from '../assets/startGrid.png';
import TutorialCard from './TutorialCard';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const sliderData = [
  {
    image: cardImage,
    reviewCount: 300,
    stars: 5.0,
    tutorialTitle: 'How to work with prototype design with Adobe XD featuring tools',
    viewCount: 2538,
  },
  {
    image: cardImage,
    reviewCount: 300,
    stars: 5.0,
    tutorialTitle: 'How to work with prototype design with Adobe XD featuring tools',
    viewCount: 2538,
  },
  {
    image: cardImage,
    reviewCount: 300,
    stars: 5.0,
    tutorialTitle: 'How to work with prototype design with Adobe XD featuring tools',
    viewCount: 2538,
  },
];

export default function Features() {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  return (
    <div className="mt-[80px] flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-2 text-[#EF9E48] text-sm">QUALITY FEATURES</h1>
      <h2 className="text-2xl font-semibold mb-8">Tutorials that people love most</h2>

      <div className='w-3/4 m-auto'>
      <div className="mt-14 mb-20">
      <Slider {...settings}>
        {sliderData.map((d, index) => (
          <TutorialCard {...d} key={index}></TutorialCard>
        ))}
      </Slider>
      </div>
      
    </div>
    </div>
  );
}
