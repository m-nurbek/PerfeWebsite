import React, { useState, useEffect } from 'react';

interface ButtonProps extends React.HTMLProps<HTMLDivElement> {
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

const buttonStyle = {
  width: '70px',
  height: '70px',
  transition: 'opacity 0.1s ease', // Smooth opacity transition
};

const containerStyle = {
  width: '150px', // Adjust the width to fit your text
  position: 'fixed',
  bottom: '80px',
  right: '90px',
  zIndex: 1000,
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  fontFamily: 'Montserrat',
  fontWeight: 100,
  justifyContent: 'flex-end', // Align the content to the end
  transition: 'opacity 0.1s ease', // Smooth opacity transition
};

const textStyle = {
    marginTop: '8px',
    whiteSpace: 'nowrap',
  zIndex: 1000,
};

function ScrollUpButton({ onClick }: ButtonProps) {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check the scroll position to determine whether to show the button
      const scrollPosition = window.scrollY || document.documentElement.scrollTop;
      setShowButton(scrollPosition > 100); // Adjust the threshold as needed
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array to run the effect only once

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scroll behavior
    });
  };

  return (
    <div style={{ ...containerStyle, opacity: showButton ? 1 : 0 }} onClick={scrollToTop}>
      <div style={textStyle}>
        <h4>Scroll Up</h4>
      </div>
      <div style={{ ...buttonStyle, opacity: showButton ? 1 : 0 }}>
        <img src="./src/assets/svg/ScrollUp.svg" alt="Scroll Up" width={70} height={70} />
      </div>
    </div>
  );
}

export default ScrollUpButton;
