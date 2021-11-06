const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: null,
			ships: null,
			planets: null
		},
		actions: {
			traerchar: () => {
				fetch("https://www.swapi.tech/api/people")
					.then(resp => resp.json())
					.then(data => setStore({ characters: data["results"] }));
			}
		}
	};
};

export default getState;
