import React from "react";
import { useState, useEffect } from "react";
import getBaseUrl from "../utils/baseUrl";
import Card from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";

const Home = () => {
  const [workouts, setWorkouts] = useState(null);

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch(`${getBaseUrl()}/api/workouts/`);
      const json = await response.json();

      if (response.ok) {
        setWorkouts(json);
      }
    };

    fetchWorkouts();
  }, []);
  return (
    <div className="grid grid-cols-5">
      <div className=" col-span-3">
        {workouts &&
          workouts.map((workout) =>( <Card key={workout._id} workout={workout}/>))}
      </div>
      <div className="col-span-2"><WorkoutForm/></div>
    </div >
  );
};

export default Home;
