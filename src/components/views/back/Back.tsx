import React from 'react';
import BodyPartView from '../../BodyPartView';
import { backExcercises } from '../../excercisesData';
import { backText } from '../../excercisesDescriptionData';

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
        description={backText}
      />
    </div>
  );
};

export default BackText;
