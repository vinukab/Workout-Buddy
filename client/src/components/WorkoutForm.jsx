import React, { useState } from "react";
import getBaseUrl from "../utils/baseUrl";

const WorkoutForm = () => {
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const workout = { title, load, reps };

    const response = await fetch(`${getBaseUrl()}/api/workouts/`, {
      method: 'POST',
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }

    if (response.ok) {
      setLoad("");
      setReps("");
      setTitle("");
      setError(null);
      console.log("New workout added successfully", json);
    }
  };

  return (
    <form
      className="max-w-sm mx-auto bg-white p-6 rounded-lg shadow border border-gray-200"
      onSubmit={handleSubmit}
    >
      <div className="flex items-center mb-6">
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
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            ></path>
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-green-800">Add New Workout</h3>
      </div>

      <div className="mb-5">
        <label
          htmlFor="title"
          className="block mb-2 text-sm font-medium text-gray-700"
        >
          Exercise Title
        </label>
        <input
          type="text"
          id="title"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-3 transition-all duration-200"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          placeholder="e.g. Bench Press"
          required
        />
      </div>

      <div className="mb-5">
        <label
          htmlFor="load"
          className="block mb-2 text-sm font-medium text-gray-700"
        >
          Load (in kg)
        </label>
        <input
          type="number"
          id="load"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-3 transition-all duration-200"
          onChange={(e) => setLoad(e.target.value)}
          value={load}
          placeholder="e.g. 50"
          required
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="reps"
          className="block mb-2 text-sm font-medium text-gray-700"
        >
          Reps
        </label>
        <input
          type="number"
          id="reps"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-3 transition-all duration-200"
          onChange={(e) => setReps(e.target.value)}
          value={reps}
          placeholder="e.g. 10"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-3 text-center transition-all duration-200 transform hover:translate-y-1"
      >
        Add Workout
      </button>
      
    </form>
  );
};

export default WorkoutForm;
