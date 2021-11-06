import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import "bootstrap/dist/css/bootstrap.min.css";

import "bootstrap/dist/js/bootstrap.bundle";

import { Home } from "./views/home";
import { Personajes } from "./views/personajes";
import { Ships } from "./views/ships";
import { Planets } from "./views/planets";
import { CharacterDetail } from "./views/charDetail";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

const Layout = () => {
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<div className="container">
					<ScrollToTop>
						<Navbar />
						<Switch>
							<Route exact path="/characters/:chars/detail">
								<CharacterDetail />
							</Route>
							<Route exact path="/">
								<Home />
							</Route>
							<Route exact path="/characters">
								<Personajes />
							</Route>
							<Route exact path="/ships">
								<Ships />
							</Route>
							<Route exact path="/planets">
								<Planets />
							</Route>
							<Route>
								<h1>Not found!</h1>
							</Route>
						</Switch>
						<Footer />
					</ScrollToTop>
				</div>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
