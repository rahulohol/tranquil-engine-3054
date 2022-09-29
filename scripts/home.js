
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '759701f7ccmsh0315dfeef7121a4p1479c5jsn9296ca4c2c07',
		'X-RapidAPI-Host': 't20-cricket-news.p.rapidapi.com'
	}
};

fetch('https://t20-cricket-news.p.rapidapi.com/news', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));