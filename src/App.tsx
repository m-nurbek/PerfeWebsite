import './assets/css/App.css'
import ContactForm from "./components/ContactForm.tsx";
import TeamDescription from "./components/TeamDescription.tsx";
import ScrollUpButton from "./components/ScrollUpButton.tsx";

function App() {
    return (
        <>
            <ContactForm/>
            <TeamDescription/>
            <ScrollUpButton onClick={() => predictionCarRef.current?.scrollIntoView({behavior: 'instant'})}/>

        </>
    );
}
export default App;
