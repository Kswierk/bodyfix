import React from 'react';
import BodyPartView from '../../BodyPartView';
import { backExcercises } from '../../excercisesData';
import { neckText } from '../../excercisesDescriptionData';

const Neck = () => {
  return (
    <div>
      <BodyPartView
        text="zdrowa szyja"
        arr={backExcercises}
        description={neckText}
      />
    </div>
  );
};

export default Neck;
