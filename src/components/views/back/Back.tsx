import React, { useEffect } from 'react';
import BodyPartView from '../../BodyPartView';
import { backExcercises } from '../../excercisesData';
import { backText } from '../../excercisesDescriptionData';

// interface Iprops {
//   text: string;
//   arr: any;
// }

const BackText = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
