import {useState} from "react"; // Import your CSS file

import InstIcon from '../assets/svg/InstIcon.svg';
import EmailIcon from '../assets/svg/EmailIcon.svg';
import PFLogo from '../assets/svg/PF_logo.svg';


function Footer(){
  const [isClicked, setIsClicked] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const handleMouseOver = (e: React.MouseEvent<HTMLButtonElement>) => {
    (e.target as HTMLButtonElement).style.backgroundColor = '#000000';
  };

  const handleMouseOut = (e: React.MouseEvent<HTMLButtonElement>) => {
    (e.target as HTMLButtonElement).style.backgroundColor = 'transparent';
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsClicked(true);
    const buttonText = (e.target as HTMLButtonElement).innerText;

    // Copy text to clipboard
    navigator.clipboard.writeText(buttonText);
    (e.target as HTMLButtonElement).style.border = '1px solid #fff';

    setShowNotification(true);

    // Hide notification after 2 seconds (adjust as needed)
    setTimeout(() => {
      setShowNotification(false);
    }, 2000);
  };

    return (
  <div className="container">
    <div className="column" >
      <div style={{gap: '39px', display: 'inline-flex'}}>

        <img src={PFLogo} style={{marginBottom: '10px'}}/>

        <h1 style={{fontSize: '60px', width: '600px'}}>Let's Work Together</h1>
      </div>
      <div className="column" style={{marginTop:'120px', marginBottom: '100px'}}>
        <button
          type="button"
          className="btn btn-outline-light custom-transparent-btn"
          style={{
              color: "white",
            backgroundColor: 'transparent',
            border: '1px solid #fff',
            marginRight: '50px',
            height: '55px',
            outline: 'none',
            width: '230px',
            fontSize: '15px',
            borderRadius: '30px',
            transition: 'background-color 0.3s ease', // Smooth transition
            }}  onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                onClick={handleClick}
        >
          perfe_agency@gmail.com
        </button>
        <button
          type="button"
          className="btn btn-outline-rounded custom-transparent-btn"
          style={{
              color: "white",
            backgroundColor: 'transparent',
            border: '1px solid #fff',
            height: '55px',
            width: '200px',
            outline: 'none',
            fontSize: '15px',
            borderRadius: '30px',
            transition: 'background-color 0.3s ease', // Smooth transition
            }}  onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                onClick={handleClick}
        >
          +77072458844
        </button>

      {showNotification && (
        <div
          style={{
            marginLeft: '200px',
            marginTop: '50px',
            backgroundColor: '#000',
            height: '25px',
            textAlign: 'center',
            width: '300px',
            borderRadius: '20px',
            padding: '10px',
            boxShadow: '0px 0px 10px rgba(0, 0, 3, 5)',
          }}
        >
          Copied to the clipboard
        </div>
      )}

      </div>
    </div>

    <div style={{ textAlign: 'center', marginLeft: '200px', marginTop: '200px'}}>
      <div className="column">
        <h4>Find us in social media</h4>
        <div className="column">
          <div className="column">

            <img src={InstIcon} style={{ transform: 'scale(0.5)'}} />
            <span style={{ marginLeft: '0px'}}>Instagram</span>
            <img
              src={EmailIcon}

              style={{ transform: 'scale(1.2)', marginBottom: '16px', marginLeft: '10px' }}
             alt={"email icon"}/>
            <span style={{ marginLeft: '15px' }}>Email</span>
          </div>
        </div>
      </div>
    </div>


  </div>
);
}

export default Footer;