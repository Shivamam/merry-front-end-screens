import React from 'react';
import { Link } from 'react-router-dom';
import Member from './Registration/Member';
import Partner from './Registration/Partner';
import Caregiver from './Registration/Caregiver';
import Volunteer from './Registration/Volunteer';

const Home = () => {
  return (
    <div>
      <div className='flex border border-slate-200 md:container md:mx-auto m-10'>
        <div className=''>
          <div className='text-center text-5xl font-bold my-10'>
            Welcome to Merry Meals
          </div>
          <div className='text-3xl text center m-10 font-seminbold text-gray-600'>
            We provide free food services to the people in need. the people who
            are disabled or agebound or anyone who can't get nutritious food on
            daily basis due to some reason are helped by merry meals.
          </div>
          <div className='text-3xl text center m-10 font-seminbold text-gray-600'>
            If you see any of these people and want to help them please{' '}
            <span>register</span>
            them to our services.
          </div>
          <div className='text-3xl text center m-10 font-seminbold text-gray-600'>
            Check out our wonderfull <span>donars</span> who selflessly put
            their efforts into non-profit program
          </div>
        </div>
        <img
          className='h-96 my-28 mx-10 p-2'
          src='https://image.shutterstock.com/image-vector/volunteer-help-people-idea-charity-260nw-1620633370.jpg'
          alt='food-photo'
        />
      </div>
      <div className='border border-slate-200 md:container md:mx-auto m-10'>
        <div className='text-3xl text-center m-10 font-seminbold '>
          Register here and subscribe to our services
        </div>
        <div className='flex justify-evenly my-6 mb-20'>
          <Link
            to={{
              pathname: '/RegMember',
            }}
          >
            <div className='border border-teal-200 bg-cyan-800 hover:bg-cyan-500 text-white text-center rounded-md p-4 w-48'>
              Register as Member
            </div>{' '}
          </Link>
          <Link
            to={{
              pathname: '/RegPartner',
            }}
          >
            <div className='border border-teal-200 bg-cyan-800 hover:bg-cyan-500 text-white text-center rounded-md p-4 w-48'>
              Register as Partner
            </div>{' '}
          </Link>
          <Link
            to={{
              pathname: '/RegCaregiver',
            }}
          >
            <div className='border border-teal-200 bg-cyan-800 hover:bg-cyan-500 text-white text-center rounded-md p-4 w-48'>
              Register as Caregiver
            </div>{' '}
          </Link>
          <Link
            to={{
              pathname: '/RegVolunteer',
            }}
          >
            <div className='border border-teal-200 bg-cyan-800 hover:bg-cyan-500 text-white text-center rounded-md p-4 w-48'>
              Register as Volunteer
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
