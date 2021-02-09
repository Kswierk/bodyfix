import React, { useEffect } from 'react';
import BodyPartView from '../../BodyPartView';
import { legsExcercises } from '../../excercisesData';
import { legsText } from '../../excercisesDescriptionData';

const Legs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <BodyPartView
        text="sprawne nogi"
        arr={legsExcercises}
        description={legsText}
      />
    </div>
  );
};

export default Legs;
