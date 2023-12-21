import {useSpring, animated, useInView} from 'react-spring';
import {useRef} from "react";


const personCardStyle = {
  padding: '15px',
  textAlign: 'center',
    opacity: 0,
    transition: 'opacity 0.8s ease-in-out',
};

const imageStyle = {
  width: '250px',
  height: '250px',
  borderRadius: '20%',
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
    link: string
}

const MyComponent = () => {
  const f12Ref = useRef<HTMLDivElement>(null); // Specify the type of ref

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const props = useSpring({
    opacity: inView ? 1 : 0,
    from: { opacity: 0 },
  });

  return (
    <animated.div ref={(el) => { ref(el); f12Ref.current = el; }} style={props}>
      {/* Your PersonCards component here */}
    </animated.div>
  );
};


const PersonCard = ({ name, role, description, src, link }: Props) => {

  return (
    <div style={personCardStyle}>
      <img src={src} alt={name} style={imageStyle} />
      <div>
        <h3 style={{fontFamily: "Montserrat"}}>{name}</h3>
        <p style={{fontSize: '15px', fontFamily: "Montserrat-Bold", fontWeight: "lighter"}}>{role}</p>
        <p style={{fontFamily: "Montserrat"}}>{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer" style={linkStyle}>
          Learn more
        </a>
      </div>
    </div>
  );
};

const PeopleRow = () => {
  const peopleRowStyle = {
    display: 'flex',
    justifyContent: 'space-around',
  };

  const f12Ref = useRef();

  return (
      <>
          <h1 style={{fontFamily: "Montserrat", fontSize: "60px"}}>Our Team </h1>
        <div style={peopleRowStyle} ref={f12Ref}>


          <PersonCard
            name="Dariya"
            role="Project Manager"
            description="Collects Deans' lists like infinity stones"
            src='/src/assets/img/Dariya.jpg'
            link="https://example.com/person1"
          />
          <PersonCard
            name="Aldamzhar"
            role="Fullstack Developer"
            description="J&J champ"
            src='/src/assets/img/Alda.jpg'
            link="https://example.com/person2"
          />
          <PersonCard
            name="Nurbek"
            role="Backend Developer"
            description="Backend+ML+CN+Frontend developer"
            src='/src/assets/img/Nurbek.jpg'
            link="https://example.com/person3"
          />
          <PersonCard
            name="Ardak"
            role="Frontend Developer"
            description="Runway model"
            src='/src/assets/img/Ardak.jpg'
            link="https://example.com/person4"
          />
        </div>
          </>
  );
};

export default PeopleRow; MyComponent;
