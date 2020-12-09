import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">StarWars API</span>
			</Link>
			<div className="ml-auto">
				<div type="button">
					<button className="btn btn-primary">Favorites</button>
					{store.favorite.map((event, index) => {
						return <div key={index}>{event}</div>;
					})}
				</div>
			</div>
		</nav>
	);
};
