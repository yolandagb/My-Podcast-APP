const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
		people: [],
		 },
		actions: {
			// getPeople: data => {
			// 	const store = getStore();
			// 	const endpoint = "https://swapi.dev/api/people/";
			// 	const config = {
			// 		method: "GET"
			// 	};
			// 	fetch(endpoint, config)
			// 		.then(res => res.json())
			// 		.then(data => setStore({ people: data.results }))
			// 		.catch(err => err);
			},
			// getPodcast: data => {
			// 	// eslint-disable-next-line no-unused-vars
			// 	// const store = getStore();
			// 	const endpoint = "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json";
			// 	const config = {
			// 		method: "GET"
			// 	};
			// 	fetch(endpoint, config)
			// 		.then(res => res.json())
			// 	    .then(data => console.log(endpoint))
			// 		.catch(err => err);
			// },
			
			
			// loadSomeData: () => {
			// 	/**
			// 		fetch().then().then(data => setStore({ "foo": data.bar }))
			// 	*/
			// },
			// changeColor: (index, color) => {
			// 	//get the store
			// 	const store = getStore();

			// 	//we have to loop the entire demo array to look for the respective index
			// 	//and change its color
			// 	const demo = store.demo.map((elm, i) => {
			// 		if (i === index) elm.background = color;
			// 		return elm;
			// 	});

			// 	//reset the global store
			// 	setStore({ demo: demo });
			// }
		}
	};
};

export default getState;
