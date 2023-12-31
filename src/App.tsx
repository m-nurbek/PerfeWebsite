import './assets/css/style.scss';
import Line from './components/Line';
import Navbar from './components/Navbar';
import NotTypical from './components/NotTypical';
import OurServices from './components/OurServices';
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
                <TeamDescription />
                <Line />
            </div>
        </>
    );
}


export default App;