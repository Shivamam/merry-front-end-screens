import React from 'react';
import { Link } from 'react-router-dom';
const Member = () => {
  return (
    <div>
      <div class='bg-grey-lighter min-h-screen flex flex-col'>
        <div class='container w-1/2 mx-auto flex-1 flex flex-col items-center justify-center px-2'>
          <div class='bg-white px-6 py-8 rounded shadow-md text-black w-full'>
            <h1 class='mb-8 text-3xl text-center'>Member Sign up</h1>
            <input
              type='text'
              class='w-full block border border-grey-light w-full p-3 rounded mb-4'
              name='fullname'
              placeholder='Full Name'
            />
            <div className='flex'>
              <input
                type='text'
                className='block border border-grey-light w-full p-3 rounded mb-4'
                name='email'
                placeholder='Email'
              />
              <input
                type='password'
                className='block border border-grey-light w-full p-3 rounded mb-4'
                name='password'
                placeholder='Password'
              />
            </div>
            <div className='flex'>
              <input
                type='age'
                className='block border border-grey-light w-full p-3 rounded mb-4'
                name='age'
                placeholder='Age'
              />
              <select
                className='block border border-grey-light w-full p-3 rounded mb-4'
                name='gender'
                id='gender'
              >
                <option value='male'>Male</option>
                <option value='female'>Female</option>
                <option value='other'>Other</option>
              </select>
            </div>

            <input
              type='contact_no'
              className='block border border-grey-light w-full p-3 rounded mb-4'
              name='contact_no'
              placeholder='Contact No'
            />
            <input
              type='address'
              className='block border border-grey-light w-full p-3 rounded mb-4'
              name='address'
              placeholder='Address'
            />
            <div className='flex'>
              <input
                type='city'
                className='block border border-grey-light w-full p-3 rounded mb-4'
                name='city'
                placeholder='City'
              />
              <input
                type='locality'
                className='block border border-grey-light w-full p-3 rounded mb-4'
                name='locality'
                placeholder='Locality'
              />
            </div>
            <div className='flex'>
              <input
                type='state'
                className='block border border-grey-light w-full p-3 rounded mb-4'
                name='state'
                placeholder='State'
              />
              <input
                type='zipcode'
                className='block border border-grey-light w-full p-3 rounded mb-4'
                name='zipcode'
                placeholder='Zipcode'
              />
            </div>
            <Link to={{ pathname: '/MemberLogin' }}>
              <div
                type='submit'
                class='text-center bg-cyan-500 hover:bg-cyan-300 rounded-md w-full py-3 cursor-pointer'
              >
                Create Account
              </div>
            </Link>

            <div class='text-center text-sm text-grey-dark mt-4'>
              By signing up, you agree to the
              <a
                class='no-underline border-b border-grey-dark text-grey-dark'
                href='#'
              >
                Terms of Service
              </a>{' '}
              and
              <a
                class='no-underline border-b border-grey-dark text-grey-dark'
                href='#'
              >
                Privacy Policy
              </a>
            </div>
          </div>

          <div class='text-grey-dark mt-6'>
            Already have an account?
            <Link
              to={{ pathname: '/login' }}
              class='no-underline border-b border-blue text-blue'
            >
              Log in
            </Link>
            .
          </div>
        </div>
      </div>
    </div>
  );
};

export default Member;
