import TeamDescription from "./components/TeamDescription.tsx";
import ScrollUpButton from "./components/ScrollUpButton.tsx";
import OurServices from "./components/OurServices.tsx";
import Footer from "./components/Footer.tsx";
import WelcomeScreen from "./components/WelcomeScreen.tsx";
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import NotTypical from './components/NotTypical';
import './assets/css/style.scss';


function App() {
    return (
        <>
            <Navbar />
            <Welcome/>
            <NotTypical/>
            <WelcomeScreen />
            <OurServices/>
            <TeamDescription/>
            <Footer/>
            <ScrollUpButton onClick={() => predictionCarRef.current?.scrollIntoView({behavior: 'instant'})}/>
        </>
    );
}

export default App;