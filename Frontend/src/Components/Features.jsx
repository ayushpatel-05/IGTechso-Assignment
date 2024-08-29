import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css'; // Import slider styles
import cardImage from '../assets/startGrid.png';
import TutorialCard from './TutorialCard';

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
  return (
    <div className="mt-[80px]">
      <h1 className="text-2xl font-bold mb-4">QUALITY FEATURES</h1>
      <h2 className="text-xl font-semibold mb-8">Tutorials that people love most</h2>

      <div className="relative">
        <AwesomeSlider
          className="my-awesome-slider"
          bullets={true}
          infinite={true}
          media={[
            <TutorialCard
              key={1}
              image={sliderData[0].image}
              reviewCount={sliderData[0].reviewCount}
              stars={sliderData[0].stars}
              tutorialTitle={sliderData[0].tutorialTitle}
              viewCount={sliderData[0].viewCount}
            />,
            <TutorialCard
              key={2}
              image={sliderData[1].image}
              reviewCount={sliderData[1].reviewCount}
              stars={sliderData[1].stars}
              tutorialTitle={sliderData[1].tutorialTitle}
              viewCount={sliderData[1].viewCount}
            />,
            <TutorialCard
              key={3}
              image={sliderData[2].image}
              reviewCount={sliderData[2].reviewCount}
              stars={sliderData[2].stars}
              tutorialTitle={sliderData[2].tutorialTitle}
              viewCount={sliderData[2].viewCount}
            />,
          ]}
        />
      </div>
    </div>
  );
}
