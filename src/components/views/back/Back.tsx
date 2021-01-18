import React from 'react';
import BodyPartView from '../../BodyPartView';
import { backExcercises } from '../../excercisesData';
import BackDescription from './BackDescription';

// interface Iprops {
//   text: string;
//   arr: any;
// }

const BackText = () => {
  return (
    <div>
      <BodyPartView
        text="proste plecy"
        arr={backExcercises}
        description={BackDescription}
      />
    </div>
  );
};

export default BackText;
