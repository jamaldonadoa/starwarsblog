import { useContext, useEffect, useState, React } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const CharacterDetail = () => {
	return (
		<div className="card" style="width: 18rem;">
			<img src="..." className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">
					Some quick example text to build on the card title and make up the bulk of the cards content
				</p>
				<Link href="#" className="btn btn-primary">
					Go somewhere
				</Link>
			</div>
		</div>
	);
};
