import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import NotTypical from './components/NotTypical';
import './App.css'

function App() {

  return (
    <div>
      <Navbar />
      <Welcome/>
      <NotTypical/>
      {/* other components or JSX */}
    </div>
  )
}

export default App
