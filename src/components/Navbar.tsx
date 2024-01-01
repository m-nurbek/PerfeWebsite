import PerfeLogo from "/PerfeWhite.png";
import { useTranslation } from 'react-i18next';

export default function Navbar() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <nav>
      <span className='logo'><img src={PerfeLogo} alt="logo" /></span>
      <ul className="links">
        <li><a href="#about">{t("Who are we?")}</a></li>
        <li><a href="#services">{t("Our Services")}</a></li>
        <li><a href="#projects">{t("Our Projects")}</a></li>
        <li><a href="#team">{t("Our Team")}</a></li>
        <li><a href="#footer">{t('Contact Us')}</a></li>
      </ul>
      <div>
        <a onClick={() => changeLanguage("en")} style={{ margin: '0 10px', cursor: 'pointer' }}>ENG</a>
        <a onClick={() => changeLanguage("ru")} style={{ margin: '0 10px', cursor: 'pointer' }}>RUS</a>
      </div>
    </nav>
  );
  
}