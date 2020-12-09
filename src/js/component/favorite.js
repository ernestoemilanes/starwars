import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const Favorite = ({ myFavorite }) => {
	const [select, setSelected] = useState(false);
	const { store, actions } = useContext(Context);
	return (
		<div className={"navbar navbar-light bg-light mb-3"}>
			<div
				className={"btn btn-primary " + (select ? "bg-dark" : "bg-primary") + " d-flex justify-content-between"}
				type="button"
				onClick={() => {
					setSelected(!select);
					actions.addToFavorite(myFavorite.name);
					//console.log(select);
				}}>
				☆
			</div>
		</div>
	);
};

Favorite.propTypes = {
	myFavorite: PropTypes.func
};