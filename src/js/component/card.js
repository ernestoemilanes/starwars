import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Favorite } from "./favorite";

export const Card = ({ data }) => {
	const [select, setSelected] = useState(false);
	return (
		<div className="card">
			<div className="card-body">
				<img src="https://loremflickr.com/320/240/starwars" />
				<h5 className="card-title">{data.name}</h5>
				<p className="card-text">
					<div>Gender: {data.gender}</div>
					<div>Hair Color: {data.hair_color}</div>
					<div>Eye Color: {data.eye_color}</div>
				</p>

				<div className="d-flex justify-content-between">
					<Link to={"./people/" + btoa(data.url)}>
						<div className="btn btn-primary" type="button" id={data.url}>
							Learn More
						</div>
					</Link>
					<Favorite key={data.name} myFavorite={data} />
				</div>
			</div>
		</div>
	);
};
Card.propTypes = {
	data: PropTypes.any
};

