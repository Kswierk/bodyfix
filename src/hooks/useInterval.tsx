import { useEffect, useRef } from 'react';

// type CallbackProps = {
//   callback?: void;
// };

export function useInterval(callback: any, delay: number) {
  //   const savedCallback  = useRef();
  const savedCallback: any = useRef(null);

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}
