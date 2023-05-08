import { useState } from "react";
import { users } from "./components/testes";

import "./App.css";
import DigaMeuNome from "./components/DigaMeuNome";

function App() {
	return (
		<>
			<DigaMeuNome nome="Claudio" idade="28" />
			<div>
				{users.map((user) =>
					(({ id, name, email, address: { street, city, zipcode , geo:{lat,lng} } }) => (
						<ul key={id}>
							<li >
								{name} - {email} - {`rua`} {street} - {`cidade`} {city} - {`coordenadas`}: {lat}, {lng} - {`zip`}- {zipcode}
							</li>
						</ul>
					))(user)
				)}
			</div>
		</>
	);
}

export default App;
