import React, { useEffect, useContext } from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

export const People = props => {
	const { actions, store } = useContext(Context);
	const { urlHash } = useParams();
	const currentPerson = store.people.find(p => btoa(p.url) == urlHash);
	//console.log(props);
	//console.log(urlHash);
	if (typeof currentPerson == "undefined") return "Loading";
	return <div>Hello {currentPerson.name}</div>;
};
People.propTypes = {
	history: PropTypes.any
};
