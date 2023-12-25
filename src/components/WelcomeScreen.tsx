import {animated, useSpring} from "@react-spring/web";
import {CSSProperties, useEffect, useState} from "react";
import {TypeAnimation} from "react-type-animation";


function WelcomeScreen() {
    const styles: CSSProperties = {
        position: "fixed",
        top: "0",
        left: "0",
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "black",
        zIndex: 2000,
    }

    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000); // 3000ms delay

        return () => clearTimeout(timer);
    }, []);


    const animationProps = useSpring({
        transform: loading ? 'translateY(0%)' : 'translateY(-100%)',
        config: { tension: 260, friction: 90 },
    });


    return (
        <>
            <animated.div style={{...styles, ...animationProps}}>
                <TypeAnimation
                    sequence={[
                        // Same substring at the start will only be typed out once, initially
                        'Welcome to PerFe',
                        1000 // wait 1s before replacing "Mice" with "Hamsters"
                    ]}
                    wrapper="span"
                    speed={{type: 'keyStrokeDelayInMs', value: 100}}
                    style={{
                        fontSize: '3em',
                        fontFamily: 'Arial',
                        display: 'inline-block',
                        color: "white",
                        textTransform: "uppercase",
                        fontWeight: "500"
                    }}
                    repeat={Infinity}
                />
            </animated.div>
        </>
    );
}

export default WelcomeScreen;