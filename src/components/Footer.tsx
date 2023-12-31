import InstagramSVG from "../assets/svg/InstagramSVG";
import TelegramSVG from "../assets/svg/TelegramSVG";
import WhatsappSVG from "../assets/svg/WhatsappSVG";


function Footer() {

  return (
    <>
      <footer id="footer">
        <div className="leftColumn">
          <h1>Contact Us☎️</h1>
          <p>Type your <span>Phone number</span> or <span>Email</span> and we will contact you soon!😉</p>
          <div className="inputWrapper">
            <input type="email" name="email" id="email" placeholder="example@gmail.com"/>
          </div>
          <div className="inputWrapper">
            <input type="tel" name="phone" id="tel" placeholder="+7 777 777 7777"/>
          </div>
        </div>
        <div className="rightColumn">
          <h1></h1>
          <ul className="social_links">
            <li><a href=""><InstagramSVG /> Instagram</a></li>
            <li><a href=""><WhatsappSVG /> WhatsApp</a></li>
            <li><a href=""><TelegramSVG /> Telegram</a></li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Footer;