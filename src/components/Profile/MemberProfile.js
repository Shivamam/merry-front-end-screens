import React from 'react';

const MemberProfile = () => {
  return (
    <div>
      <div className='text-4xl text-center underline font-extrabold m-10'>
        Member Profile
      </div>
      <div className='flex '>
        <div className='border border-gray-200 mx-auto w-full p-16'>
          <div className='font-extrabold text-2xl'>
            Name: <span className='font-bold'>John Doe</span>
          </div>
          <div className='font-extrabold text-2xl'>
            Email: <span className='font-bold'>johndoe@abc.com</span>
          </div>
          <div className='font-extrabold text-2xl'>
            Contact No: <span className='font-bold'>8765236789</span>
          </div>
          <div className='font-extrabold text-2xl'>
            Age: <span className='font-bold'>32</span>
          </div>
          <div className='font-extrabold text-2xl'>
            Gender: <span className='font-bold'>Male</span>
          </div>
          <div className='font-extrabold text-2xl'>
            Address:{' '}
            <span className='font-bold'>12B Maxima Bld, Zigzat Colony</span>
          </div>
          <div className='font-extrabold text-2xl'>
            Locality: <span className='font-bold'>Ping Pong Street</span>
          </div>
          <div className='font-extrabold text-2xl'>
            City: <span className='font-bold'>Mumbai</span>
          </div>
          <div className='font-extrabold text-2xl'>
            State: <span className='font-bold'>Maharashtra</span>
          </div>
          <div className='font-extrabold text-2xl'>
            Zipcode: <span className='font-bold'>400089</span>
          </div>
          <div className='my-6 cursor-pointer bg-cyan-200 hover:bg-cyan-400 h-10 w-28 text-center p-2 rounded'>
            Update
          </div>
        </div>
        <div>
          <div className='border border-gray-200 mx-auto w-full p-16'>
            <div className='font-extrabold text-2xl'>
              Reason for Subscription:{' '}
              <span className='font-bold'>Disability </span>
            </div>
          </div>
          <div className='border border-gray-200 mx-auto w-full p-16'>
            <div className='text-3xl font-semibold text-center'>
              Meal Preference
            </div>
            <div className='text-center font-extrabold text-2xl'>
              I am <span className='font-bold'>Vegetarian</span>
            </div>
            <div className='text-center font-extrabold text-2xl'>
              I am <span className='font-bold'>Diabetic</span>
            </div>
            <div className='text-center font-extrabold text-2xl'>
              I have <span className='font-bold'>High Blood Pressure</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberProfile;
