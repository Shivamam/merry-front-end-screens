import React from 'react'

const PartnerMenu = () => {
  return (
    <div>
      <div className='text-4xl text-center underline font-extrabold m-10'>
        Standart Menu
      </div>
      <div className='border border-gray-200 mx-auto w-full p-16'>
        <div className='font-extrabold text-2xl my-6'>
          Daily Meals week chart
        </div>
        <ul class='flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400'>
          <li class='mr-2'>
            <a
              href='#'
              aria-current='page'
              class='inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-white'
            >
              Vegetarian
            </a>
          </li>
          <li class='mr-2'>
            <a
              href='#'
              class='inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300'
            >
              Non Vegetarian
            </a>
          </li>
          <li class='mr-2'>
            <a
              href='#'
              class='inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300'
            >
              Vegan
            </a>
          </li>
        </ul>
        <div>
          <div className='flex justify-evenly'>
            <div className='border border-gray-400 w-full bg-gray-300 p-6 text-xl font-semibold '>Monday</div>
            <div className='border border-gray-400 w-full bg-gray-300 p-6 text-xl font-semibold '>Tuesday</div>
            <div className='border border-gray-400 w-full bg-gray-300 p-6 text-xl font-semibold '>Wednesday</div>
            <div className='border border-gray-400 w-full bg-gray-300 p-6 text-xl font-semibold '>Thursday</div>
            <div className='border border-gray-400 w-full bg-gray-300 p-6 text-xl font-semibold '>Friday</div>
            <div className='border border-gray-400 w-full bg-gray-300 p-6 text-xl font-semibold '>Saturday</div>
            <div className='border border-gray-400 w-full bg-gray-300 p-6 text-xl font-semibold '>Sunday</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PartnerMenu