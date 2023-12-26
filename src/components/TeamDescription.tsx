import { motion, useAnimation } from 'framer-motion';
import 'react-reveal/Reveal';
import Dariya from '/src/assets/img/Dariya.jpg';
import Nurbek from '/src/assets/img/Nurbek.jpg';
import Alda from '/src/assets/img/Alda.jpg';
import Ardak from '/src/assets/img/Ardak.jpg';
import '/src/assets/css/Fonts.css';
import React from "react";
import {useInView} from "react-spring";

const personCardStyle = {
  height: '500px',
  padding: '40px',
  textAlign: 'center',
};

const imageStyle = {
  width: '250px',
  height: '250px',
  borderRadius: '15%',
  objectFit: 'cover',
};

const linkStyle = {
  color: '#007bff',
  textDecoration: 'none',
};

interface Props {
  name: string;
  role: string;
  description: string;
  src: string;
  link: string;
}

const PersonCard = ({ name, role, description, src, link }: Props) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false, // Trigger the animation every time the component comes into view
  });

  React.useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1 });
    }
  }, [controls, inView]);

  return (
    <motion.div ref={ref} initial={{ opacity: 0 }} animate={controls} style={{ ...personCardStyle }}>
      <img src={src} alt={name} id="top_scroll" style={imageStyle} />
      <div>
        <h3 style={{ fontFamily: 'Montserrat', fontSize: '20px' }}>{name}</h3>
        <p style={{ marginTop: '-13px', fontSize: '18px', fontFamily: 'Helvetica' }}>{role}</p>
        <p style={{ fontFamily: 'Helvetica' }}>{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer" style={linkStyle}>
          Learn more
        </a>
      </div>
    </motion.div>
  );
};

function TeamDescription() {
  const peopleRowStyle = {
    display: 'flex',
    justifyContent: 'space-around',
  };

  return (
    <>
      <h1 style={{ fontFamily: 'Montserrat', fontSize: '60px' }}>Our Team </h1>
      <div style={peopleRowStyle}>
        <PersonCard
          name="Dariya"
          role="Project Manager"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          src={Dariya}
          link="https://example.com/person1"
        />
        <PersonCard
          name="Aldamzhar"
          role="Fullstack Developer"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          src={Alda}
          link="https://example.com/person2"
        />
        <PersonCard
          name="Nurbek"
          role="Backend Developer"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          src={Nurbek}
          link="https://example.com/person3"
        />
        <PersonCard
          name="Ardak"
          role="Frontend Developer"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          src={Ardak}
          link="https://example.com/person4"
        />
      </div>
    </>
  );
}

export default TeamDescription;
