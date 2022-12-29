import React from 'react';

const MotionWrap = (Component: React.FunctionComponent, classNames: string) =>
  function HOC() {
    return (
      <div className={`${classNames} app__flex`}>
        <Component />
      </div>
    );
  };

export default MotionWrap;
