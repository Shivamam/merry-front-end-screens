import React from 'react';

const PartnerMenuOrder = () => {
  return (
    <div>
      <div className='text-4xl text-center underline font-extrabold m-10'>
        Meal Orders
      </div>
      <div className='border border-gray-200 mx-auto w-full p-16'>
        <div className='font-extrabold text-2xl my-6'>
          Meal for Member - order ID #01
        </div>
        <div className='border border-gray-200 bg-gray-300 mx-auto w-full p-16'>
          <div className='text-xl m-6'>
            The food preferene for the order no #01 is{' '}
            <span className='text-blue-800 underline'> Vegetarian</span>
          </div>
          <div className='text-xl m-6'>
            The Member is allergic to
            <span className='text-blue-800 underline'> Peanuts</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerMenuOrder;
