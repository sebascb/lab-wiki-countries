import './App.css';
import Navbar from "./components/Navbar";
import CountriesList from "./components/CountriesList";
import CountryDetails from "./components/CountryDetails";
import { Route, Routes } from "react-router-dom";

function App() {
  /*const [ countries, setCountry ] = useState('');*/

  return (
    <div className="App">
      <Navbar />
      <div className='container'>
        <div className='row'>
          <Routes>
            <Route path="/" element={<CountriesList />} /> 
            <Route path="/:countryId" element={<CountryDetails />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;