import PerfeImg from "../assets/img/laptop_display.jpg";
import MouseTracking from "./animation_kit/MouseTracking.tsx";


function Desktop3D() {
    return (
        <>
            <MouseTracking id={"scene"}>
                <div className="laptop">
                    <div className="lid">
                        <div className="top">
                            <svg id="apple" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M118.667 93.913c-2.985 6.653-4.421 9.626-8.267 15.519-5.364 8.226-12.928 18.469-22.309 18.545-8.327.09-10.474-5.457-21.778-5.389-11.304.06-13.661 5.494-22.002 5.411-9.374-.083-16.541-9.325-21.905-17.551C7.399 87.463 5.82 60.481 15.074 46.128c6.583-10.191 16.967-16.151 26.723-16.151 9.928 0 16.174 5.479 24.396 5.479 7.975 0 12.83-5.494 24.314-5.494 8.693 0 17.903 4.764 24.456 12.983-21.486 11.846-18.007 42.711 3.704 50.968zM81.799 20.78C85.974 15.391 89.138 7.775 87.994 0c-6.823.474-14.798 4.839-19.451 10.529-4.242 5.155-7.728 12.825-6.367 20.268 7.459.234 15.157-4.237 19.623-10.017z"
                                    fill="#fff"/>
                            </svg>
                        </div>

                        <div className="facet front"></div>
                        <div className="facet back"></div>
                        <div className="facet left"></div>
                        <div className="facet right"></div>

                        <span className="corner fl"></span>
                        <span className="corner bl"></span>
                        <span className="corner ll"></span>
                        <span className="corner rl"></span>

                        <div className="inner">
                            <span className="camera"></span>

                            <div className="screen">
                                <img src={PerfeImg} alt={"/PF - operative and efficient"} style={{width: "100%", height: "100%"}}/>
                            </div>

                            <div className="text">Perfe Agency</div>

                            <span className="glare">
                                <span></span>
                            </span>
                        </div>
                    </div>

                    <div className="base">
                        <span className="hinges"></span>

                        <span className="speakers left"></span>
                        <span className="speakers right"></span>

                        <div className="keyboard-container">
                            <div className="keyboard">
                                <div className="keyboard-row thin">
                                    <div className="key"></div>
                                    <div className="key"></div>
                                    <div className="key"></div>
                                    <div className="key"></div>
                                    <div className="key"></div>
                                    <div className="key"></div>
                                    <div className="key"></div>
                                    <div className="key"></div>
                                    <div className="key"></div>
                                    <div className="key"></div>
                                    <div className="key"></div>
                                    <div className="key"></div>
                                    <div className="key"></div>
                                    <div className="key"></div>
                                </div>
                                <div className="keyboard-row">
                                    <div className="key"></div>
                                    <div className="key"></div>
                                    <div className="key"></div>
                                    <div className="key"></div>
                                    <div className="key"></div>
                                    <div className="key"></div>
                                    <div className="key"></div>
                                    <div className="key"></div>
                                    <div className="key"></div>
                                    <div className="key"></div>
                                    <div className="key"></div>
                                    <div className="key"></div>
                                    <div className="key"></div>
                                    <div className="key extra-size"></div>
                                </div>
                                <div className="keyboard-row">
                                    <div className="key extra-size"></div>
                                    <div className="key"></div>
                                    <div className="key"></div>
                                    <div className="key"></div>
                                    <div className="key"></div>
                                    <div className="key"></div>
                                    <div className="key"></div>
                                    <div className="key"></div>
                                    <div className="key"></div>
                                    <div className="key"></div>
                                    <div className="key"></div>
                                    <div className="key"></div>
                                    <div className="key"></div>
                                    <div className="key"></div>
                                </div>
                                <div className="keyboard-row">
                                    <div className="key extra-size-two"></div>
                                    <div className="key"></div>
                                    <div className="key"></div>
                                    <div className="key"></div>
                                    <div className="key"></div>
                                    <div className="key"></div>
                                    <div className="key"></div>
                                    <div className="key"></div>
                                    <div className="key"></div>
                                    <div className="key"></div>
                                    <div className="key"></div>
                                    <div className="key"></div>
                                    <div className="key extra-size-two"></div>
                                </div>
                                <div className="keyboard-row">
                                    <div className="key double-size"></div>
                                    <div className="key"></div>
                                    <div className="key"></div>
                                    <div className="key"></div>
                                    <div className="key"></div>
                                    <div className="key"></div>
                                    <div className="key"></div>
                                    <div className="key"></div>
                                    <div className="key"></div>
                                    <div className="key"></div>
                                    <div className="key"></div>
                                    <div className="key double-size"></div>
                                </div>
                                <div className="keyboard-row bottom-row">
                                    <div className="key"></div>
                                    <div className="key"></div>
                                    <div className="key"></div>
                                    <div className="key extra-size-two"></div>
                                    <div className="key space-bar"></div>
                                    <div className="key extra-size-two"></div>
                                    <div className="key"></div>
                                    <div className="arrows">
                                        <div className="key"></div>
                                        <div className="up-down">
                                            <div className="key"></div>
                                            <div className="key"></div>
                                        </div>
                                        <div className="key"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="touchpad"></div>

                        <span className="slit invert"></span>

                        <div className="facet front">
                            <span className="slit"></span>
                        </div>
                        <div className="facet back">
                            <span className="hinges"></span>
                        </div>
                        <div className="facet left">
                            <span className="power"></span>
                            <span className="usb"></span>
                            <span className="usb"></span>
                        </div>
                        <div className="facet right">
                            <span className="usb"></span>
                            <span className="slot"></span>
                        </div>

                        <span className="corner fl"></span>
                        <span className="corner bl"></span>
                        <span className="corner ll"></span>
                        <span className="corner rl"></span>

                        <div className="bottom">
                            <span className="hinges"></span>

                            <span className="rubber-leg fl"></span>
                            <span className="rubber-leg fr"></span>
                            <span className="rubber-leg bl"></span>
                            <span className="rubber-leg br"></span>

                            {/*Left side*/}
                            <i className="screw rl"></i>
                            <i className="screw ml"></i>
                            <i className="screw fl"></i>

                            {/*Front side*/}
                            <i className="screw fml"></i>
                            <i className="screw fmr"></i>

                            {/*Rear side*/}
                            <i className="screw rml"></i>
                            <i className="screw rmr"></i>

                            {/*Right side*/}
                            <i className="screw rr"></i>
                            <i className="screw mr"></i>
                            <i className="screw fr"></i>
                        </div>
                    </div>
                </div>
            </MouseTracking>
        </>
    );
}

export default Desktop3D;