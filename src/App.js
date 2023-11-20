import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/NavbarHead.js';
import Welcome from './components/Welcome.js';
import Offering from './components/Offering.js';

function App() {
  return (
    <>
      <Navbar/>
      <Welcome/>
      <Offering/>
    </>
    
  );
}

export default App;
