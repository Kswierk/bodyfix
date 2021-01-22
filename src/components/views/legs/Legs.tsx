import React from 'react';
import BodyPartView from '../../BodyPartView';
import { backExcercises } from '../../excercisesData';
import { legsText } from '../../excercisesDescriptionData';

const Legs = () => {
  return (
    <div>
      <BodyPartView
        text="sprawne nogi"
        arr={backExcercises}
        description={legsText}
      />
    </div>
  );
};

export default Legs;
