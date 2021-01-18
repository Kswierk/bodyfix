import React from 'react';
import BodyPartView from '../../BodyPartView';
import { backExcercises } from '../../excercisesData';
import BackDescription from '../back/BackDescription';

const Neck = () => {
  return (
    <div>
      <BodyPartView
        text="zdrowa szyja"
        arr={backExcercises}
        description={BackDescription}
      />
    </div>
  );
};

export default Neck;
