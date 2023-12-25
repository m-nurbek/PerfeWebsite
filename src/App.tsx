// import ContactForm from "./components/ContactForm.tsx";
import TeamDescription from "./components/TeamDescription.tsx";
import ScrollUpButton from "./components/ScrollUpButton.tsx";
import OurServices from "./components/OurServices.tsx";
import Footer from "./components/Footer.tsx";
import './assets/css/style.scss';


function App() {
    return (
        <>
            <OurServices/>
            <TeamDescription/>
            <Footer/>
            <ScrollUpButton onClick={() => predictionCarRef.current?.scrollIntoView({behavior: 'instant'})}/>
        </>
    );
}
export default App;
