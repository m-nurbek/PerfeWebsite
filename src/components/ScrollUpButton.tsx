import React from 'react';




interface ButtonProps extends React.HTMLProps<HTMLDivElement> {
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

const buttonStyle = {
  position: 'fixed',
  bottom: '20px',
  right: '20px',
  zIndex: 1000,
     src: "./src/assets/svg/ScrollUp.svg",
}

const containerStyle = {
  position: 'fixed',
  bottom: '27px',
  right: '90px',
  zIndex: 1000,
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
    fontFamily: "Montserrat",
    fontWeight: "100"
}


const textStyle = {
  marginLeft: '8px',
    zIndex:1000,
}


function ScrollUpButton({onClick}: ButtonProps) {
    const scrollToSection = () => {

    const section = document.getElementById('top_scroll');

    if (section) {
      // Smooth scroll behavior
      section.scrollIntoView({
        behavior: 'smooth',
          block: 'center', // Align to the top of the viewport
        inline: 'nearest',
      });
    }
    };

      return (
            <div style={containerStyle} onClick={scrollToSection}>
              <div style={textStyle}>
                <h4>Scroll Up</h4>
                <div style={buttonStyle}>
                  <img
                    src="./src/assets/svg/ScrollUp.svg"
                    width={70}
                    height={70}
                  />
                </div>
              </div>
            </div>
      );
}

export default ScrollUpButton;