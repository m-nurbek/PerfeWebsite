import './assets/css/App.css'
import ContactForm from "./components/ContactForm.tsx";
import TeamDescription from "./components/TeamDescription.tsx";
import ScrollUpButton from "./components/ScrollUpButton.tsx";
import OurServices from "./components/OurServices.tsx";
import Footer from "./components/Footer.tsx";

function App() {
    return (
        <>
            <OurServices/>
            <ScrollUpButton onClick={() => predictionCarRef.current?.scrollIntoView({behavior: 'instant'})}/>
            <TeamDescription/>
            <Footer/>
        </>
    );
}
export default App;
