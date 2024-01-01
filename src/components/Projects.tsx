import GalleryItem from "./GalleryItem";
import MoneyOfKZ from "/MoneyOfKZ.jpg";
import PortfolioNurbek from "/PortfolioNurbek.png";
import PortfolioDariya from "/PortfolioDariya.png";
import { useTranslation } from 'react-i18next';
import { useEffect, useRef } from "react";


function Projects() {
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const { t } = useTranslation();
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
            <div className="projects" id="projects">
                <h1 className="projectsTitle">💻{t('Our Projects')}</h1>
                
                <div className="projectWrapper" ref={ref1}>
                    <div className="leftImage">
                        <GalleryItem 
                            imageUrl={MoneyOfKZ}
                            title={t("Coins of the Kazakhstan")}
                            tags={"#app #playstore"}
                        />
                    </div>
                    <div className="description rightImage">
                        {t('The app is the catalogue of the coins of Republic of Kazakhstan. It was designed and created for the')} <span>{t('National Bank of Republic of Kazakhstan')}</span>{t(', and displays the issued coins of the national currency of three types:')} <span>{t('circulation, bullion and collectible coins')}</span>{t('. All types of coins are legal tender.')}
                    </div>
                </div>

                <div className="projectWrapper" ref={ref2}>
                    <div className="description leftImage">
                        {t('This portfolio, showcasing the')} <span>{t('skills and projects')}</span> {t('of Nurbek Malikov, a backend developer, was diligently put together by our team. We aimed to highlight his')}<span>{t('experience and creativity')}</span> {t('in web development, providing a comprehensive view of his')}<span>{t('professional journey')}</span>.
                    </div>
                    <div className="rightImage">
                        <GalleryItem 
                            imageUrl={PortfolioNurbek}
                            title={t("Personal Portfolio Website for Nurbek")}
                            tags={"#website #portfolio #design"}
                        />
                    </div>
                </div>

                <div className="projectWrapper" ref={ref3}>
                    <div className="leftImage">
                        <GalleryItem 
                            imageUrl={PortfolioDariya}
                            title={t("Personal Portfolio Website for Dariya")}
                            tags={"#website #portfolio #design"}
                        />
                    </div>
                    <div className="description rightImage">
                        {t('This portfolio was meticulously crafted for Dariya Dalabayeva by our dedicated team')} <span>{t(', showcasing her extensive experience and achievements')}</span> {t('in strategic communications and public relations. Our aim was to highlight her')} <span>{t('passion, skills, and contributions')}</span> {t('in a concise and engaging manner.')}
                    </div>
                </div>
                
            </div>
        </>
    );
}

export default Projects;