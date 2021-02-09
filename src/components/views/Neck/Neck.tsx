import React, { useEffect } from 'react';
import BodyPartView from '../../BodyPartView';
import { neckExcercises } from '../../excercisesData';
import { neckText } from '../../excercisesDescriptionData';

const Neck = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
