

const result = document.getElementById('result');
const btn = document.getElementById('btn');

btn.addEventListener('click', getRandomBrewery);

function getRandomBrewery() {
	fetch('https://api.openbrewerydb.org/breweries?by_state=kentucky')
		.then(res => res.json())
		.then(data => {
			console.log(data);
			let brew = data[Math.floor(Math.random() * data.length)];
			result.innerHTML = `${brew.name}<br />
			 -<br />
			 ${brew.city},
			 ${brew.state}<br />
			 -<br />
			 ${brew.street}<br />
			 -<br />
			 <a href='${brew.website_url}'>${brew.website_url}</a>`;
			})
			.catch((error) => {
				console.error('Error:', error);    
		});
}

