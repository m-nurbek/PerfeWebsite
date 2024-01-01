import DesktopImg from "/icons/Rectangle.png";
import Snow1 from "../assets/svg/Snow1";
import Snow2 from "../assets/svg/Snow2";
import Snow3 from "../assets/svg/Snow3";
import Snow4 from "../assets/svg/Snow4";
import Snow5 from "../assets/svg/Snow5";
import { useTranslation } from 'react-i18next';

function Welcome() {
  const scrollToIconsWrapper = () => {
    const element = document.getElementById('footer');
    element.scrollIntoView({ behavior: 'smooth' });
  };
  const { t } = useTranslation();

  return (
    <div className='welcome_container'>
      <div className="text">
        <h1>{t('We are PerFe')}</h1>
        <p>{t('A web development agency aimed at crafting')} <span>{t('functional websites')}</span></p>
        <button onClick={scrollToIconsWrapper}>{t('Get in touch!')}</button>
      </div>
      <div className="icons_wrapper">

        <div className="desktop">
          <img src={DesktopImg} alt="desktop" />
        </div>
        <div className="snow">
          <Snow1 className="snow1"/>
          <Snow2 className="snow2"/>
          <Snow3 className="snow3"/>
          <Snow4 className="snow4"/>
          <Snow5 className="snow5"/>
          <Snow2 className="snow6"/>
          <Snow3 className="snow7"/>
          <Snow4 className="snow8"/>
        </div>

      </div>
    </div>
  );
}

export default Welcome;