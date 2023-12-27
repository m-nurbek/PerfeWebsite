import {animated, useSpring} from "@react-spring/web";
import icon1 from "../../assets/img/icon1.png";
import {ReactNode} from "react";

interface Props {
    children: ReactNode;
    className?: string;
    tension?: number;
    friction?: number;
    transform?: string;
}

function LevitatingObj({children, className, tension, friction, transform} : Props) {
    const styles = useSpring({
        from: {transform: 'translate3d(0, 0px, 0)'},
        to: [
            {transform: 'translate3d(0, -10px, 0)'},
            {transform: transform ? transform : 'translate3d(0, 0px, 0)'},
        ],
        config: {tension: tension ? tension : 1, friction: friction ? friction : 0}, // Adjust these values to make the animation slower
        loop: true,
    });

    const child = <img src={icon1} alt={"icon"}/>
    return (
        <animated.div style={styles} className={className ? className : ""}>
            {children ? children : child}
        </animated.div>
    );
}

export default LevitatingObj;