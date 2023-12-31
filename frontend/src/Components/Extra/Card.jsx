import React from 'react';
import { Link } from "react-router-dom"
const Card = ({ tour }) => {

  return (
    <div className="block relative  mt-10 w-[90%] h-[480px] shadow hover:cursor-pointer overflow-hidden rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 hover:scale-105 transition transform ease-in">
    
        <div key={tour.id}>

          <div className='bg-blue-500  '>
                  <img
          className="rounded-t-lg w-full h-72 object-cover"
          src={tour?.gallery[0] || "https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg"}
          alt=""
        />
              </div>
          <div className="content p-2">
            <div className="pt-2 h-16 ">
              <h5 className="mb-2   text-xl font-bold font-poppins line-clamp-2 text-neutral-800 dark:text-neutral-50">
                {tour.tourname}
              </h5>
            </div>
              <p className="text-base font-light text-neutral-600 text-green-600 font-poppins dark:text-neutral-200 text-sm">
                Location : <span className="text-lg"> {tour.location} </span>
              </p>

            <hr />

            <div className="pt-2 flex justify-between items-center justify-center font-poppins">
              <p className="text-sm text-neutral-600 dark:text-neutral-200">
                 <span className="font-semibold text-[16px] text-green-600"> PKR {tour.fee} / person</span> 
              </p>

              <p className="text-sm gap-2 font-thin text-neutral-600 dark:text-neutral-200 flex items-center font-poppins">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>

               Days : {tour.duration.days} , {tour.duration.nights? 'Nights : '+ tour.duration.nights : '' }
              </p>
            </div>
          </div>
          {/* <button className="w-full bg-yellow-400 font-poppins font-light h-10 hover:scale-105 ease-in transition-all hover:bg-yellow-300 ">
            {' '}
            Book Now{' '}
          </button> */}
          {/* This is encoded to add hyphen - instead of %20 in spaces */}
        <Link to={`/tour/${encodeURIComponent(tour._id)}`}>
          <button className='text-sm m-2 shadow-lg hover:opacity-90 bg-gray-700  rounded-full  font-normal text-white p-2 ml-2 font-poppins'>
            View Details
          </button>
          </Link>
        </div>
  
    </div>
  );
};

export default Card;
