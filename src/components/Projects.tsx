import GalleryItem from "./GalleryItem";
import Image from "../assets/img/Service1.png";
import { useEffect, useRef } from "react";


function Projects() {
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                } else {
                    entry.target.classList.remove('animate');
                }
            });
        });

        if (ref1.current) {
            observer.observe(ref1.current);
        }
        if (ref2.current) {
            observer.observe(ref2.current);
        }
        if (ref3.current) {
            observer.observe(ref3.current);
        }

        return () => {
            if (ref1.current) {
                observer.unobserve(ref1.current);
            }
            if (ref2.current) {
                observer.unobserve(ref3.current);
            }
            if (ref3.current) {
                observer.unobserve(ref3.current);
            }
        }
    }, []);
    
    return (
        <>
            <div className="projects">
                <h1 className="projectsTitle">💻Our Projects</h1>
                
                <div className="projectWrapper" ref={ref1}>
                    <div className="leftImage">
                        <GalleryItem 
                            imageUrl={Image}
                            title={"Монеты Казахстана"}
                            tags={"#app #playstore"}
                        />
                    </div>
                    <div className="description rightImage">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor dolorem, veniam assumenda porro alias cum facere praesentium id, enim doloribus suscipit quam ad labore sapiente voluptatum. Dolorem odio adipisci dolores?
                    </div>
                </div>

                <div className="projectWrapper" ref={ref2}>
                    <div className="description leftImage">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor dolorem, veniam assumenda porro alias cum facere praesentium id, enim doloribus suscipit quam ad labore sapiente voluptatum. Dolorem odio adipisci dolores?
                    </div>
                    <div className="rightImage">
                        <GalleryItem 
                            imageUrl={Image}
                            title={"Монеты Казахстана"}
                            tags={"#app #playstore"}
                        />
                    </div>
                </div>

                <div className="projectWrapper" ref={ref3}>
                    <div className="leftImage">
                        <GalleryItem 
                            imageUrl={Image}
                            title={"Монеты Казахстана"}
                            tags={"#app #playstore"}
                        />
                    </div>
                    <div className="description rightImage">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor dolorem, veniam assumenda porro alias cum facere praesentium id, enim doloribus suscipit quam ad labore sapiente voluptatum. Dolorem odio adipisci dolores?
                    </div>
                </div>
                
            </div>
        </>
    );
}

export default Projects;