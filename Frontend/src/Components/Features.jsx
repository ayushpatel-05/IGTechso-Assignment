import axios from 'axios'
import { useState, useCallback, useEffect } from 'react';
import TutorialCard from './TutorialCard';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



export default function Features() {

  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const handleBeforeChange = (current, next) => {
    if (next >= data.length - 1 && !loading) {
      fetchData(page + 1);
    }
  };

  const settings = {
 
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    beforeChange: handleBeforeChange
  };




  const fetchData = useCallback(async (pageNumber) => {
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:3000/api/v1/review?page=${pageNumber}&limit=5`);
      setData(prevData => [...prevData, ...response.data]);
      setPage(pageNumber);
    } catch (error) {
      console.error('Failed to fetch data', error);
    } finally {
      setLoading(false);
    }
  }, []);

  // Initial data fetch
  useEffect(() => {
    fetchData(1);
  }, [fetchData]);


  let slider = <h1>Loading...</h1>;
  if(data.length > 0) {
    slider = <Slider {...settings}>
      {data.map((item, index) => {
      return (
          <TutorialCard 
                image={item.image}
                stars={item.stars}
                tutorialTitle={item.title}
                reviewCount={item.viewCount}
                viewCount={item.viewCount}
                key={index}
          />
      )
    })}
    </Slider>
  }


  return (
    <div className="mt-[80px] flex flex-col items-center">
      <h1 className="font-bold mb-2 text-[#EF9E48] text-sm">QUALITY FEATURES</h1>
      <h2 className="text-2xl font-semibold mb-8">Tutorials that people love most</h2>

      <div className='w-3/4 m-auto'>
      <div className="mt-14 mb-20">
        {slider}
      </div>
      
    </div>
    </div>
  );
}
