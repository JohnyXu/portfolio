import React from 'react';
import { motion } from 'framer-motion';

const MotionWrap = (Component: React.FunctionComponent, classNames: string) =>
  function HOC() {
    return (
      <div className={`${classNames} app__flex`}>
        <Component />
      </div>
    );
    // return (
    //   <motion.div
    //     whileInView={{ y: [100, 0], opacity: [0, 1] }}
    //     transition={{ duration: 0.3 }}
    //     className={`${classNames} app__flex`}
    //   >
    //     <Component />
    //   </motion.div>
    // );
  };

export default MotionWrap;
