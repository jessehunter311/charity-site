const result = document.getElementById('result');
const btn = document.getElementById('btn');

btn.addEventListener('click', getRandomBrewery);

function getRandomBrewery() {
	fetch('https://api.openbrewerydb.org/breweries?by_state=kentucky')
		.then(res => res.json())
		.then(data => {
			let brew = data[Math.floor(Math.random() * data.length)];
			result.innerHTML = `${brew.name}<br />
			 -<br />
			 ${brew.city},
			 ${brew.state}<br />
			 -<br />
			 ${brew.street}<br />
			 -<br />
			 <a target="_blank" rel="noopener noreferrer" href='${brew.website_url}'>Visit Site</a>`;
		})
		.catch((error) => {
			console.error('Error:', error);
		});
}


let modal = document.getElementById("myModal");
let modalBtn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];

modalBtn.onclick = function () {
	modal.style.display = "block";
}

span.onclick = function () {
	modal.style.display = "none";
}

window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}