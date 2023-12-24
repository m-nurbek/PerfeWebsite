import React, {CSSProperties, ReactNode, useRef} from "react";


interface Props {
    children: ReactNode;
    maxDegreeX?: number | undefined;
    maxDegreeY?: number | undefined;
    id?: string;
}

function MouseTracking({children, maxDegreeX, maxDegreeY, id} : Props) {
    const ref = useRef<HTMLDivElement | null>(null);
    const maxDegX = maxDegreeX ? maxDegreeX : 3;
    const maxDegY = maxDegreeY ? maxDegreeY : 3;

    const styles: CSSProperties & {
        '--rotateY'?: string,
        '--rotateX'?: string
    } = {
        perspective: '2000px',
        '--rotateY': '0deg',
        '--rotateX': '0deg',
        transformStyle: 'preserve-3d',
        transform: 'scale(0.4) rotateY(var(--rotateY)) rotateX(var(--rotateX))'
    };

    function rotateElement(event: React.MouseEvent, element: React.MutableRefObject<HTMLDivElement | null>) {
        // get mouse position
        const x = event.clientX;
        const y = event.clientY;

        if (element.current) {
            // find the middle of the container that bound the element
            const rect = element.current.getBoundingClientRect();
            const middleX = (rect.left + rect.width) / 2;
            const middleY = (rect.top + rect.height) / 2;

            // get offset from the middle in %
            const offsetX = ((x - middleX) / middleX);
            const offsetY = ((y - middleY) / middleY);

            // based on that get degrees
            const degreeX = offsetX * maxDegX;
            const degreeY = offsetY * maxDegY;

            // update the style
            element.current.style.setProperty("--rotateX", -1 * degreeY + "deg");
            element.current.style.setProperty("--rotateY", degreeX + "deg");
        }
    }

    return (
        <>
            <div id={id} ref={ref} onMouseMove={(e) => rotateElement(e, ref)} style={styles}>
                {children}
            </div>
        </>
    );
}

export default MouseTracking;