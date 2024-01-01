import InstagramSVG from "../assets/svg/InstagramSVG";
import TelegramSVG from "../assets/svg/TelegramSVG";
import WhatsappSVG from "../assets/svg/WhatsappSVG";
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (event.currentTarget.classList.contains('disabled')) {
      event.preventDefault();
    }
  };

  return (
    <>
      <footer id="footer">
        <div className="leftColumn">
          <h1>{t('Contact Us')}☎️</h1>
          <p>{t('Type your')} <span>{t('Phone number')}</span> {t('or')} <span>{t('Email')}</span> {t('and we will contact you soon!')}😉</p>
          <div className="inputWrapper">
            <input type="email" name="email" id="email" placeholder="example@gmail.com"/>
          </div>
          <div className="inputWrapper">
            <input type="tel" name="phone" id="tel" placeholder="+7 777 777 7777"/>
          </div>
          <button style={{marginTop: '3em', width: 'fit-content'}}>{t('Send it!')}</button>
        </div>
        <div className="rightColumn">
          <h1></h1>
          <ul className="social_links">
            <li><a href="https://www.instagram.com/perfe_agency"><InstagramSVG /> Instagram</a></li>
            <li><a href="" className="disabled" onClick={handleClick}><WhatsappSVG /> WhatsApp</a></li>
            <li><a href="" className="disabled" onClick={handleClick}><TelegramSVG /> Telegram</a></li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Footer;