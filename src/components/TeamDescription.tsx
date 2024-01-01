import Ardak from "/Ardak.jpg";
import Nurbek from "/Nurbek.jpg";
import Alda from "/Alda.jpg";
import Dariya from "/Dariya.jpg";
import { useEffect, useRef} from 'react';
import { useTranslation } from 'react-i18next';

function TeamDescription() {
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
    <div className="teamContainer" ref={ref} id="team">
      <h1>{t('Our Team')}</h1>

      <ul className="teamCard">
        <li>
          <div className="single-img">
            <a href="#">
              <img src={Ardak} alt="Ardak" />
              <div className="text">
                {t('Ardak Atagulov')} <br/> <span>{t('Front End Developer')}</span>
              </div>
            </a>
          </div>
        </li>

        <li>
          <div className="single-img">
            <a href="https://m-nurbek.github.io/PersonalPortfolio/">
              <img src={Nurbek} alt="Nurbek" />
              <div className="text">
                {t('Nurbek Malikov')} <br/> <span>{t('Back End Developer')}</span>
              </div>
            </a>
          </div>
        </li>

        <li>
          <div className="single-img">
            <a href="https://m-nurbek.github.io/DariyaPortfolio/">
              <img src={Dariya} alt="Dariya" />
              <div className="text">
                {t('Dariya Dalabayeva')} <br/> <span>{t('Project Manager')}</span>
              </div>
            </a>
          </div>
        </li>

        <li>
          <div className="single-img">
            <a href="#">
              <img src={Alda} alt="Alda" />
              <div className="text">
                {t('Aldamzhar Kiikbayev')}<br/> <span>{t('Full Stack Developer')}</span>
              </div>
            </a>
          </div>
        </li>
      </ul>
    </div>
    </>
  );
}

export default TeamDescription;