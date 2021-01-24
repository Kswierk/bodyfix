import React from 'react';
import BodyPartView from '../../BodyPartView';
import { neckExcercises } from '../../excercisesData';
import { neckText } from '../../excercisesDescriptionData';

const Neck = () => {
  return (
    <div>
      <BodyPartView
        text="zdrowa szyja"
        arr={neckExcercises}
        description={neckText}
      />
    </div>
  );
};

export default Neck;
