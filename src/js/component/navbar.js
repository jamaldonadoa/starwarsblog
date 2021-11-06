import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container-fluid">
				<a className="navbar-brand" to="#">
					<img
						src="https://icon-library.com/images/star-war-icon/star-war-icon-15.jpg"
						alt=""
						width="60"
						height="60"
					/>
				</a>
				<ul className="navbar-nav me-auto mb-2 mb-lg-0">
					<li className="nav-item">
						<Link className="nav-link active h3" aria-current="page" to="/">
							Home
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link h3" to="/characters">
							Characters
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link h3" to="/ships">
							Ships
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link h3" to="/planets">
							Planets
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};
