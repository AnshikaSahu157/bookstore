import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from '../components/Cards'; // Make sure this path is correct

export default function Freebook() {
  const [filterData, setFilterData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/list.json')
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter((item) => item.category === 'Free');
        setFilterData(filtered);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  if (loading) return <p className="text-center py-10">Loading...</p>;

  return (
    <div className='max-w-screen-2xl container mx-auto md:px-20 py-4'>
      <div className="mb-6">
        <h1 className='font-bold text-xl pb-2'>Free Offered Courses</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione qui recusandae dicta neque, dolores voluptatum eveniet nihil debitis assumenda aliquam!</p>
      </div>

      <Slider {...settings}>
        {filterData.map((item) => (
          <Cards key={item.id} item={item} />
        ))}
      </Slider>
    </div>
  );
}
