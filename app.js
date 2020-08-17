const $form = $('#searchform');
const $searchInput = $('#searchInput');
const $gifContainer = $('#gif-container');

// creates  gif and appends it to the DOM
const makeGif = (response) => {
	let randIdx = Math.floor(Math.random() * response.data.length);
	const gifUrl = response.data[randIdx].images.original.url;

	let $newCol = $('<div>', { class: 'col-12 col-md-4 mb-1' });
	let $newImg = $('<img>', { src: gifUrl });

	$newCol.append($newImg);
	$gifContainer.append($newCol);
};

//listens for search, adds new img to DOM
$form.on('submit', async function(e) {
	e.preventDefault();

	//get search input
	let term = $searchInput.val();
	$searchInput.val('');

	//request response from giphy
	const gifParams = { params: { api_key, q: term } };
	const res = await axios.get('https://api.giphy.com/v1/gifs/search', gifParams);

	//do something with the data
	makeGif(res.data);
});

$('#remove').on('click', (e) => {
	$gifContainer.empty();
});


