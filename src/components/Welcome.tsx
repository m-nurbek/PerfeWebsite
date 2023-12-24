import '../css/Welcome.css';

export default function Welcome() {
  return (
    <div className='welcome'>
      <div className="text-content">
        <h1>We are PerFe</h1>
        <p>A web development agency aimed at crafting <span>functional websites</span>.</p>
        <button>Get in touch!</button>
      </div>
      <div className="icons-container">
        <img src="/src/assets/images/Icons1.png" alt="Icon 1" className="icon1" />
        <img src="/src/assets/images/Icons2.png" alt="Icon 2" className="icon2" />
        <img src="/src/assets/images/Icons3.png" alt="Icon 3" className="icon3" />
        <img src="/src/assets/images/Icons4.png" alt="Icon 4" className="icon4" />
        <img src="/src/assets/images/Icons5.png" alt="Icon 5" className="icon5" />
        <img src="/src/assets/images/Icons6.png" alt="Icon 6" className="icon6" />
        <img src="/src/assets/images/Icons7.png" alt="Icon 7" className="icon7" />
        <img src="/src/assets/images/Icons8.png" alt="Icon 8" className="icon8" />
        <img src="/src/assets/images/Rectangle.png" alt="Desktop" className="Desktop" />
      </div>

    </div>

  );
  
}