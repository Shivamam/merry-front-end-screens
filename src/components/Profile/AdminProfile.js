import React from 'react';
import { Link } from 'react-router-dom';
const MemberProfile = () => {
  return (
    <div>
      <div className='text-4xl text-center underline font-extrabold m-10'>
        Partner Profile
      </div>
      <div className='flex '>
        <div className='border border-gray-200 mx-auto w-full p-16'>
          <div className='font-extrabold text-2xl'>
            Organization Name:{' '}
            <span className='font-bold'>ABC Organization</span>
          </div>
          <div className='font-extrabold text-2xl'>
            Email: <span className='font-bold'>abcorg@abc.com</span>
          </div>
          <div className='font-extrabold text-2xl'>
            Contact No: <span className='font-bold'>8765236789</span>
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
            <Link to={{ pathname: '/PartnerMenu' }}>
              <div className='my-6 cursor-pointer bg-cyan-200 hover:bg-cyan-400 h-10 w-full h-full text-center p-2 rounded'>
                Create/Update Menu
              </div>
            </Link>
            <div className='my-6 cursor-pointer bg-cyan-200 hover:bg-cyan-400 h-full w-full text-center p-2 rounded'>
              Upload Certificate
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className='border border-gray-200 mx-auto w-full p-16 '>
          <div className='font-extrabold text-2xl'>Orders</div>
          <div className='flex my-6 justify-between border border-gray-400 bg-gray-300 p-6'>
            <div className='font-bold text-2xl'>John Doe</div>
            <Link to={{ pathname: '/PartnerMenuOrder' }}>
              <div className=' cursor-pointer bg-cyan-200 hover:bg-cyan-400 h-10 w-28 h-10 text-center p-2 rounded'>
                Manage
              </div>
            </Link>
          </div>
          <div className='flex my-6 justify-between border border-gray-400 bg-gray-300 p-6'>
            <div className='font-bold text-2xl'>Sam</div>
            <Link to={{ pathname: '/PartnerMenuOrder' }}>
              <div className=' cursor-pointer bg-cyan-200 hover:bg-cyan-400 h-10 w-28 h-10 text-center p-2 rounded'>
                Manage
              </div>
            </Link>
          </div>
          <div className='flex my-6 justify-between border border-gray-400 bg-gray-300 p-6'>
            <div className='font-bold text-2xl'>Abhay Wuntkal</div>
            <Link to={{ pathname: '/PartnerMenuOrder' }}>
              <div className=' cursor-pointer bg-cyan-200 hover:bg-cyan-400 h-10 w-28 h-10 text-center p-2 rounded'>
                Manage
              </div>
            </Link>
          </div>
          <div className='flex my-6 justify-between border border-gray-400 bg-gray-300 p-6'>
            <div className='font-bold text-2xl'>Anson D'souza</div>
            <Link to={{ pathname: '/PartnerMenuOrder' }}>
              <div className=' cursor-pointer bg-cyan-200 hover:bg-cyan-400 h-10 w-28 h-10 text-center p-2 rounded'>
                Manage
              </div>
            </Link>
          </div>
          <div className='flex my-6 justify-between border border-gray-400 bg-gray-300 p-6'>
            <div className='font-bold text-2xl'>Shivam Mishra</div>
            <Link to={{ pathname: '/PartnerMenuOrder' }}>
              <div className=' cursor-pointer bg-cyan-200 hover:bg-cyan-400 h-10 w-28 h-10 text-center p-2 rounded'>
                Manage
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberProfile;
