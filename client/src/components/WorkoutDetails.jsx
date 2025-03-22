import React from "react";

const Card = ({ workout }) => {
  

  return (
    <a className="block w-full  p-6 bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition-all duration-300 hover:translate-y-1 hover:bg-gray-50 mb-3">
      <div className="flex items-center mb-4">
        <div className="p-3 bg-green-100 rounded-full mr-4">
          <svg
            className="w-6 h-6 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
            ></path>
          </svg>
        </div>
        <h5 className="text-2xl font-bold tracking-tight text-green-800">
          {workout.title}
        </h5>
      </div>

      <div className="space-y-2 mt-4">
        <div className="flex items-center p-3 bg-gray-50 rounded-md">
          <span className="font-medium text-gray-800 w-24">Reps:</span>
          <span className="font-bold text-green-700">{workout.reps}</span>
        </div>

        <div className="flex items-center p-3 bg-gray-50 rounded-md">
          <span className="font-medium text-gray-800 w-24">Load (kg):</span>
          <span className="font-bold text-green-700">{workout.load}</span>
        </div>
      </div>

      
    </a>
  );
};

export default Card;
