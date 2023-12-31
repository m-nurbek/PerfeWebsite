import PerfeLogo from "/PerfeWhite.png";


export default function Navbar() {

  return (
    <nav>
      <span className='logo'><img src={PerfeLogo} alt="logo" /></span>
      <ul className="links">
        <li><a href="#about">Who are we?</a></li>
        <li><a href="#services">Our Services</a></li>
        <li><a href="#projects">Our Projects</a></li>
        <li><a href="#team">Our Team</a></li>
        <li><a href="#footer">Contact Us</a></li>
      </ul>
    </nav>
  );
  
}