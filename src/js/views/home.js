import React, { useEffect, useContext, useState } from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import { Card } from "../component/card";

function convertPlanetIntoHTML(planet) {
	return (
		<div className="card">
			<div className="card-body">
				<img src="https://loremflickr.com/400/200/planets" />
				<h5 className="card-title">{planet.name}</h5>
				<p className="card-text">
					<div>Population: {planet.population}</div>
					<div>Terrain: {planet.terrain}</div>
				</p>
				<div href="#" className="btn btn-primary">
					Go somewhere
				</div>
			</div>
		</div>
	);
}

export const Home = () => {
	useEffect(() => {
		actions.getPlanets();
		actions.getPeople();
	}, []);

	const { actions, store } = useContext(Context);
	const [favoriteList, setFavoriteList] = useState(null);
	return (
		<div className="text-center mt-5">
			{store.planets.length == 0 ? /*<p>No planets</p>*/ "" : ""}
			<div className="w-100 people">
				{store.planets.length == 0 ? "" : <h1 className="d-flex text-danger p4">Characters</h1>}
				<div className="d-inline-flex">
					{store.people.map((event, index) => {
						return <Card key={index} data={event} />;
					})}
				</div>
			</div>
			<div className="w-100 planets">
				{store.planets.length == 0 ? "" : <h1 className="d-flex text-danger p4">Planets</h1>}
				<div className="d-inline-flex">{store.planets.map(convertPlanetIntoHTML)}</div>
			</div>
		</div>
	);
};
