import './assets/css/style.scss';
import Footer from './components/Footer';
import Line from './components/Line';
import Navbar from './components/Navbar';
import NotTypical from './components/NotTypical';
import OurServices from './components/OurServices';
import Projects from './components/Projects';
import TeamDescription from './components/TeamDescription';
import Welcome from './components/Welcome';


function App() {

    return (
        <>
            <div className="page">
                <Navbar />
                <Welcome />
                <Line />
                <NotTypical />
                <Line />
                <OurServices />
                <Line />
                <Projects />
                <Line />
                <TeamDescription />
                <Line />
                <Footer />
            </div>
        </>
    );
}


export default App;