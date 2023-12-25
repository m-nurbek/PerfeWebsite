import { useEffect, useState } from 'react';
import { animated, config, useInView, useSpring } from 'react-spring';
import Service2Png from "../assets/img/Service2.png";

function AnimatedComponentLeft({ children }) {
  const [ref, inView] = useInView();

  const [resetAnimation, setResetAnimation] = useState(false);

  const springProps = useSpring({
    from: { opacity: 0, transform: 'translateX(-100%)' },
    to: { opacity: inView ? 1 : 0, transform: inView ? 'translateX(0)' : 'translateX(-100%)' },
    config: config.molasses,
    onRest: () => {
      if (!inView && resetAnimation) {
        setResetAnimation(false);
      }
    },
  });

  useEffect(() => {
    if (!inView) {
      // Reset the animation when out of view
      setResetAnimation(true);
    }
  }, [inView]);

  return <animated.div ref={ref} style={springProps}>{children}</animated.div>;
}

function AnimatedComponentRight({ children }) {
  const [ref, inView] = useInView();

  const [resetAnimation, setResetAnimation] = useState(false);

  const springProps = useSpring({
    from: { opacity: 0, transform: 'translateX(100%)' },
    to: { opacity: inView ? 1 : 0, transform: inView ? 'translateX(0)' : 'translateX(100%)' },
    config: config.molasses,
    onRest: () => {
      if (!inView && resetAnimation) {
        setResetAnimation(true);
      }
    },
  });

  useEffect(() => {
    if (!inView) {
      // Reset the animation when out of view
      setResetAnimation(true);
    }
  }, [inView]);

  return <animated.div ref={ref} style={springProps}>{children}</animated.div>;
}

function OurServices() {
  const imageScale = 1.2;

  return (
    <>
      <h1 style={{ fontFamily: "Montserrat", fontSize: "60px", marginBottom: '100px' }}>Our Services </h1>

      <div className="container">
        <AnimatedComponentLeft>
          <div className="column" >
            <img src={Service2Png} style={{ transform: `scale(${imageScale})` }}  alt={"Service"}/>
            <div className="column">
              <h4 style={{ fontFamily: "Montserrat", fontSize: "20px", marginRight: "160px", marginLeft: "160px" }}>We create websites from the ground up.</h4>
            </div>
            <img src={Service2Png} style={{ marginTop: "60px", transform: `scale(${imageScale})` }}  alt={"Service"}/>
            <div className="column">
              <h4 style={{ fontFamily: "Montserrat", fontSize: "20px", marginRight: "160px", marginLeft: "160px" }}>We deliver personalized website designs.</h4>
            </div>
          </div>
        </AnimatedComponentLeft>
        <AnimatedComponentRight>
          <div className="column">
            <img src={Service2Png} style={{ marginTop: "200px", transform: `scale(${imageScale}) rotate(-90deg)` }}  alt={"Service"}/>
            <div className="column">
              <h4 style={{ fontFamily: "Montserrat", fontSize: "20px", marginRight: "160px", marginLeft: "160px", marginTop: "140px" }}>We revise existing websites & recommend improvements.</h4>
            </div>
          </div>
        </AnimatedComponentRight>
      </div>
    </>
  );
}

export default OurServices;
