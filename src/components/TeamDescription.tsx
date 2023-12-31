import Ardak from "../assets/img/Ardak.jpg";
import Nurbek from "../assets/img/Nurbek.jpg";
import Alda from "../assets/img/Alda.jpg";
import Dariya from "../assets/img/Dariya.jpg";


function TeamDescription() {
  return (
    <>
    <div className="teamContainer">
      <h1>Our Team</h1>

      <ul>
        <li>
          <div className="single-img">
            <a href="#">
              <img src={Ardak} alt="Ardak" />
              <div className="text">
                Ardak Atagulov <br/> <span>Front End Developer</span>
              </div>
            </a>
          </div>
        </li>

        <li>
          <div className="single-img">
            <a href="#">
              <img src={Nurbek} alt="Nurbek" />
              <div className="text">
                Nurbek Malikov <br/> <span>Back End Developer</span>
              </div>
            </a>
          </div>
        </li>

        <li>
          <div className="single-img">
            <a href="#">
              <img src={Dariya} alt="Dariya" />
              <div className="text">
                Dariya Dalabayeva <br/> <span>Project Manager</span>
              </div>
            </a>
          </div>
        </li>

        <li>
          <div className="single-img">
            <a href="#">
              <img src={Alda} alt="Alda" />
              <div className="text">
                Aldamzhar Kiikbayev<br/> <span>Full Stack Developer</span>
              </div>
            </a>
          </div>
        </li>
      </ul>
    </div>
    </>
  );
}

export default TeamDescription;