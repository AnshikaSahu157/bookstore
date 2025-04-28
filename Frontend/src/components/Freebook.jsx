import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from '../components/Cards';
import axios from "axios";

export default function Freebook() {
  const [book, setBook] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:5000/book");

        // Filter the data for "Free" category
        const filteredData = res.data.filter(item => item.category === 'Free');
        
        // Log the filtered data
        console.log(filteredData);
        
        // Set the filtered data to state
        setBook(filteredData);
        
        // Stop loading once data is fetched
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    getBook();
  }, []);

  // Slider settings
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

  // Show loading until data is fetched
  if (loading) return <p className="text-center py-10">Loading...</p>;

  return (
    <div className='max-w-screen-2xl container mx-auto md:px-20 py-4'>
      <div className="mb-6">
        <h1 className='font-bold text-xl pb-2'>Free Offered Courses</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione qui recusandae dicta neque, dolores voluptatum eveniet nihil debitis assumenda aliquam!</p>
      </div>

      {/* Render the Slider with filtered books */}
      <Slider {...settings}>
        {book.map((item) => (
          <Cards key={item.id} item={item} />
        ))}
      </Slider>
    </div>
  );
}
