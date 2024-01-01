import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrain, faCameraRetro, faCode, faCube, faPaintBrush, faRobot } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef} from 'react';
import { useTranslation } from 'react-i18next';

function OurServices() {
  const ref = useRef(null);
  const { t } = useTranslation();
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fadeIn');
                } else {
                    entry.target.classList.remove('fadeIn');
                }
            });
        });

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        }
    }, []);
  
  return (
    <>
      <section className="container" id="services">
        <h1>{t('Our Services')}</h1>
        <section className="card__container" ref={ref}>
          <div className="card__bx">
            <div className="card__data">
              <div className="card__icon">
                <FontAwesomeIcon icon={faPaintBrush} />
              </div>
              <div className="card__content">
                <h3>{t('Web Design')}</h3>
                <p>{t('We create visually appealing and user-friendly designs in Figma to elevate the aesthetic appeal and usability of websites.')}</p>
              </div>
            </div>
          </div>
          <div className="card__bx">
            <div className="card__data">
              <div className="card__icon">
                <FontAwesomeIcon icon={faCode} />
              </div>
              <div className="card__content">
                <h3>{t('Web Development')}</h3>
                <p>{t('We craft functional and interactive websites tailored to meet specific client needs and enhance clients online presence.')}</p>
              </div>
            </div>
          </div>
          <div className="card__bx">
            <div className="card__data">
              <div className="card__icon">
                <FontAwesomeIcon icon={faBrain} />
              </div>
              <div className="card__content">
                <h3>{t('AI Integration')}</h3>
                <p>{t('We incorporate artificial intelligence to enhance user experience and optimize processes on your website.')}</p>
              </div>
            </div>
          </div>
          <div className="card__bx">
            <div className="card__data">
              <div className="card__icon">
                <FontAwesomeIcon icon={faRobot} />
              </div>
              <div className="card__content">
                <h3>{t('Creation of WhatsApp & Telegram Bots')}</h3>
                <p>{t('We design and develop intelligent chatbots to automate interactions and engage users effectively.')}</p>
              </div>
            </div>
          </div>
          <div className="card__bx">
            <div className="card__data">
              <div className="card__icon">
                <FontAwesomeIcon icon={faCameraRetro} />
              </div>
              <div className="card__content">
                <h3 style={{fontSize: '1.2em'}}>{t('Creation of Promotion Strategies for Social Media')}</h3>
                <p>{t('We formulate comprehensive plans to boost brand visibility, engagement, and reach across various social media platforms.')}</p>
              </div>
            </div>
          </div>
          <div className="card__bx">
            <div className="card__data">
              <div className="card__icon">
                <FontAwesomeIcon icon={faCube} />
              </div>
              <div className="card__content">
                <h3>{t('Integration of 3D Models')}</h3>
                <p>{t('We incorporating three-dimensional models into websites for visually stunning user experience.')}</p>
              </div>
            </div>
          </div>

        </section>
      </section>
    </>
  );
}

export default OurServices;