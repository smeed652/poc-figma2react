import React from 'react';
import { RestaurantCard } from '../../../src/components/organisms/RestaurantCard';

const sampleData = {
  name: 'Bluefin Sushi',
  location: '123 Ocean Ave, San Francisco, CA',
  description: 'Fresh sushi and sashimi, modern Japanese cuisine.',
  calories: 450,
  match: true,
  logo: '/sample-logo.png',
  cuisine: 'Japanese',
  menus: 'Lunch, Dinner',
};

export default function RestaurantCardAstroWrapper() {
  // This wrapper is needed for Astro to render the React component
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <RestaurantCard {...sampleData} />
    </div>
  );
}
