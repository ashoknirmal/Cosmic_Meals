import React, { useState, useEffect } from 'react';
import './Header.css';

const images = [
  'https://static.vecteezy.com/system/resources/previews/047/022/332/non_2x/fresh-ingredients-arranged-around-black-wooden-surface-free-photo.jpeg',
  'https://thumbs.dreamstime.com/b/various-fast-foods-table-flat-lay-burger-taco-hot-dog-pizza-fries-drinks-various-fast-foods-table-flat-lay-burger-300077998.jpg',
  'https://static.vecteezy.com/system/resources/thumbnails/044/546/101/small_2x/delicious-burger-with-fast-food-cutlet-photo.jpeg'
];

const Header = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className='header' 
      style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
    >
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>Choose from the diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience.</p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
