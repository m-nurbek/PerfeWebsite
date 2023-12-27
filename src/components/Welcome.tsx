import '../css/Welcome.css';
import Desktop3D from "./Desktop3D.tsx";
import LevitatingObj from "./animation_kit/LevitatingObj.tsx";

export default function Welcome() {
  return (
    <div className='welcome'>
      <div className="text-content">
        <h1>We are PerFe</h1>
        <p>A web development agency aimed at crafting <span>functional websites</span>.</p>
        <button>Get in touch!</button>
      </div>
      <div className="icons-container">
          <LevitatingObj className="icon1"><img src="/src/assets/images/Icons1.png" alt="Icon 1" /></LevitatingObj>
          <LevitatingObj className="icon2"><img src="/src/assets/images/Icons2.png" alt="Icon 2" /></LevitatingObj>
          <LevitatingObj className="icon3"><img src="/src/assets/images/Icons3.png" alt="Icon 3" /></LevitatingObj>
          <LevitatingObj className="icon4"><img src="/src/assets/images/Icons4.png" alt="Icon 4" /></LevitatingObj>
          <LevitatingObj className="icon5"><img src="/src/assets/images/Icons5.png" alt="Icon 5" /></LevitatingObj>
          <LevitatingObj className="icon6"><img src="/src/assets/images/Icons6.png" alt="Icon 6" /></LevitatingObj>
          <LevitatingObj className="icon7"><img src="/src/assets/images/Icons7.png" alt="Icon 7" /></LevitatingObj>
          <LevitatingObj className="icon8"><img src="/src/assets/images/Icons8.png" alt="Icon 8" /></LevitatingObj>
          <Desktop3D className={"Desktop"}/>
      </div>

    </div>

  );
  
}