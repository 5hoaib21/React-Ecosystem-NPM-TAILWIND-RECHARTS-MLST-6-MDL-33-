import React from 'react';
import PricingFeatures from './PricingFeatures';

const PricingCard = ({pricing}) => {
  const {name, price, description, features} = pricing;
  return (
    <div className='flex flex-col  border p-4 bg-gray-700 rounded-3xl'>
      {/* card header */}
      <div>
        <h1 className='text-6xl'>{name}</h1>
        <h4 className='text-3xl'>${price}</h4>
      </div>
      {/* card body */}
      <div className='bg-pink-900 p-3 rounded-3xl mt-5 flex-1'>
      <p>{description}</p>
      {
        features.map((feature,i) => <PricingFeatures
         key={i}
         feature={feature}></PricingFeatures>)
      }
      </div>
      <button className="btn w-full mt-5">Subscribe !</button>
    </div>
  );
};

export default PricingCard;