export const fetchQuotes = async () => {
	const url = 'https://andruxnet-random-famous-quotes.p.rapidapi.com/?cat=famous&count=10';
	const options = {
		method: 'GET',
		headers: {
			'x-rapidapi-key': 'cb2c0f8419msh9973c3c69c76ce0p147a65jsn5c8ff8b19c0e',
			'x-rapidapi-host': 'andruxnet-random-famous-quotes.p.rapidapi.com'
		}
	};

	try {
		const response = await fetch(url, options);
		const result = await response.json();
		return result;
	} catch (error) {
		console.error('Error fetching quotes:', error);
		throw error;
	}
};