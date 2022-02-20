import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";

function CountriesList() {
	const [countries, setCountries] = useState([]);

	useEffect(() => {
		axios
		.get(`https://ih-countries-api.herokuapp.com/countries`)
		.then((response) => {
			setCountries(response.data);
		})
		.catch((error) => {
			console.log(error);
		});
	}, []);


	return (
		<div>
			<ul>
				{countries.map((country) => (
					<Link to={`/${country.alpha3Code}`}>
						<div>
							<h1 className='ulList'>{country.name.official}</h1>
						</div>
					</Link>
				))}			
			</ul>
		</div>
	)
}

export default CountriesList;