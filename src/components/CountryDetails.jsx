import { Link, useParams } from "react-router-dom";
import countriesData from "./../countries.json";

function CountryDetails() {

    const {countryId} = useParams();

    const foundCountry = countriesData.find((country) => {
        return country.alpha3Code === countryId;
    });

  return (
   <div>
     {foundCountry && (
       <>
         <img
           src={`https://flagpedia.net/data/flags/icon/72x54/${foundCountry.alpha2Code.toLowerCase()}.png`} alt="flag"
         />
         <h2>{foundCountry.name.official}</h2>
         <h4>Capital: {foundCountry.capital}</h4>
         <h4>Area: {foundCountry.area}<sup>2</sup></h4>
         <div>
           <h4>Borders:</h4> {foundCountry.borders.map((countryCode, i) => {
             return(
               <li key={'bordersId + i'}>
                 <Link to={`/${countryCode}`} >
                   {countriesData.map((country, i) => {
                         if (country.alpha3Code === countryCode) {
                           
                           return(
                             <p key={'border' + i}>{country.name.official}</p>
                           )
                         } else {
                           return null;
                         }
                   })}
                 </Link>
               </li>
             )
           })}
         </div>
       </>
     )}
     <br />
     <Link className="linkdetail" to="/">Home</Link>
   </div>
  )
}

export default CountryDetails;