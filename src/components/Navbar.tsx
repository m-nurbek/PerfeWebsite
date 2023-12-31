import PerfeLogo from "../assets/img/PerfeWhite.png";


export default function Navbar() {
  return (
    
    <nav>
      <span className='logo'><img src={PerfeLogo} alt="logo" /></span>
      <ul className="links">
        <li><a href="">Who are we?</a></li>
        <li><a href="">Our Services</a></li>
        <li><a href="">Our Team</a></li>
        <li><a href="">Contact Us</a></li>
      </ul>
    </nav>
  );
  
}