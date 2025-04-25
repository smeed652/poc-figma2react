// Demo: RestaurantCardDemo
import React from 'react';
import { RestaurantCard } from '../organisms/RestaurantCard';

const RestaurantCardDemo = () => {
  console.log('Rendering RestaurantCardDemo');
  return (
  <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
    <RestaurantCard />
  </div>
);
};

export default RestaurantCardDemo;
