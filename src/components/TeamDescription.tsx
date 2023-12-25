import {CSSProperties} from 'react';
import Reveal from 'react-reveal/Reveal';
import Dariya from '/src/assets/img/Dariya.jpg'
import Nurbek from '/src/assets/img/Nurbek.jpg'
import Alda from '/src/assets/img/Alda.jpg'
import Ardak from '/src/assets/img/Ardak.jpg'


const personCardStyle: CSSProperties = {
  height: '500px',
  padding: '15px',
  textAlign: 'center',
    opacity: 0,
    transition: 'opacity 0.8s ease-in-out',
};

const imageStyle: CSSProperties = {
  width: '250px',
  height: '250px',
  borderRadius: '15%',
  objectFit: 'cover',
};

const linkStyle: CSSProperties = {
  color: '#007bff',
  textDecoration: 'none',
};

interface Props {
    name: string;
    role: string;
    description: string;
    src: string;
    link: string
}


const PersonCard = ({ name, role, description, src, link }: Props) => {

  return (

      <div>
        <Reveal effect="fadeInDown">
        <div style={personCardStyle}>
          <img src={src} alt={name} id="top_scroll" style={imageStyle} />
          <div>
            <h3 style={{fontFamily: 'Montserrat-Bold'}}>{name}</h3>
            <p style={{fontSize: '15px', fontFamily: "Montserrat-Bold", fontWeight: "lighter"}}>{role}</p>
            <p style={{fontFamily: "Montserrat"}}>{description}</p>
            <a href={link} target="_blank" rel="noopener noreferrer" style={linkStyle}>
              Learn more
            </a>
          </div>
        </div>
        </Reveal>
      </div>
  );
};

function TeamDescription(){
  const peopleRowStyle = {
    display: 'flex',
    justifyContent: 'space-around',
  };


  return (
      <>
          <h1 style={{fontFamily: "Montserrat", fontSize: "60px"}}>Our Team </h1>
        <div style={peopleRowStyle} >


          <PersonCard
            name="Dariya"
            role="Project Manager"
            description="Collects Deans' lists like infinity stones"
            src={Dariya}
            link="https://example.com/person1"
          />
          <PersonCard
            name="Aldamzhar"
            role="Fullstack Developer"
            description="J&J champ"
            src={Alda}
            link="https://example.com/person2"
          />
          <PersonCard
            name="Nurbek"
            role="Backend Developer"
            description="Backend+ML+CN+Frontend developer"
            src={Nurbek}
            link="https://example.com/person3"
          />
          <PersonCard
            name="Ardak"
            role="Frontend Developer"
            description="Runway model"
            src={Ardak}
            link="https://example.com/person4"
          />
        </div>
          </>
  );
}


export default TeamDescription;

