import './App.css';
import Banner from './Components/banner/Banner';
import Flimlist from './Components/List-view/Flimlist';
import NavBar from './Components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
     <NavBar/>
     <Banner/>
     <Flimlist/>
     <Flimlist/>
     <Flimlist/>
     <Flimlist/>
    </div>
  );
}

export default App;
