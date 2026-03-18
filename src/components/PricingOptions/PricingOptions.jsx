import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';
import DaisyPricing from '../DaisyPricing/DaisyPricing';

const PricingOptions = ({pricingPromise}) => {

  const pricingData = use(pricingPromise);
  console.log(pricingData);
  return (
    <div>
      <h2 className='text-5xl font-bold flex justify-center mt-5'>Get our Membership</h2>
      <div className='grid mt-10 px-3 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {/* {
          pricingData.map(pricing => <PricingCard
          key={pricing.id}
           pricing={pricing}></PricingCard>)
        } */}

        {
          pricingData.map(pricing => <DaisyPricing
          key={pricing.id}
          pricing={pricing}
          ></DaisyPricing>)
        }
      </div>
    </div>
  );
};

export default PricingOptions;