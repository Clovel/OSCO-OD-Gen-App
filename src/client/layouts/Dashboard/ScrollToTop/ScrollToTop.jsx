/* Framework imports ----------------------------------- */
import React,
{
  useRef,
  useCallback,
  useEffect,
} from 'react';
import { useLocation } from 'react-router-dom';

/* Project collection import --------------------------- */

/* Component imports ----------------------------------- */

/* withScrollToTopDeclaration HOC ---------------------- */
// eslint-disable-next-line react/display-name
export const withScrollToTopDeclaration = (Component) => (props) => {
  /** Own refs : refs of the Component. */
  const lOwnRefs = useRef([]);

  /** Get the current location in the web app.
   * This value will be watched by a hook
   * that will trigger a scroll to (0, 0)
   */
  const lLoc = useLocation();

  /** This function allows us to add a component to the context.
   * This will help us scroll to the top of each component.
   */
  const addToScrollToTop = useCallback(
    (pRef) => {
      /* Check if pRef exists and if it has not yet been added to the refs */
      if(pRef !== undefined) {
        /* Add the ref to the Component's refs */
        lOwnRefs.current.push(pRef);
      }
    },
    [lOwnRefs.current],
  );

  /** Declare a React hook to scroll to the top
   * of the Component.
   */
  useEffect(
    () => {
      /* Scroll to the top of the page */
      lOwnRefs.current.forEach(
        (pElmt) => {
          if(pElmt !== undefined && pElmt !== null) {
            /* eslint-disable @typescript-eslint/no-unsafe-call */
            /* eslint-disable @typescript-eslint/no-unsafe-member-access */
            pElmt.scroll(0, 0);
            /* eslint-enable @typescript-eslint/no-unsafe-call */
            /* eslint-enable @typescript-eslint/no-unsafe-member-access */
          }
        },
      );
    },
    [lLoc.pathname, lOwnRefs.current],
  );

  return (
    <Component
      {...props}
      addToScrollToTop={addToScrollToTop}
    />
  );
};
