import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Personajes = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<div className="container">
				<div className="row">
					{store.characters.map(char => {
						const photo = "https://starwars-visualguide.com/assets/img/characters/" + char.uid + ".jpg";
						return (
							<div className="col-md-4 py-3" key={char.uid}>
								<div className="card">
									<img src={photo} className="card-img-top" alt="..." />
									<div className="card-body">
										<h5 className="card-title">{char.name}</h5>
										<p className="card-text">{char.url}</p>
										<Link to={"/characters/" + char.uid + "/Detail"} className="btn btn-primary">
											Details
										</Link>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
};
