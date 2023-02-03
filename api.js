let elSubmit = document.querySelector('.submitPost');
let formInput = document.querySelector(".post");
const allTitlesButton = document.querySelector(".getAllMessageLetter");

let value = '';

function createResults(event) 
{
	const master = document.querySelector(".all_messages");
	master.innerHTML = "";
	event.preventDefault();
	if(formInput.value !== NaN)
		getNbPost(formInput.value);
}

function getTitlesLetter(event)
{
	const all_results = document.querySelectorAll(".singlePost > h2");
	if(all_results.length > 0)
	{
		let numbers = 0;
		Array.prototype.forEach.call(all_results, (title) => {
			numbers += countLetter(title.textContent);
		});
		showResult(numbers);
	} 
}

function getTitleLetter(event)
{
	const parentNode = event.target.parentNode;
	
	const nb_letters = countLetter(parentNode.querySelector('h2').textContent);
	showResult(nb_letters);
}

function showResult(value)
{
	const result_box = document.getElementById("showNumberOfLetter");
	result_box.innerHTML = "";
	result_box.style = "border: 2px solid black";
	result_box.appendChild(document.createTextNode(`Le nombre de lettre "e" est de: ${value}`));
}

function countLetter(string, letter="e")
{
	return string.split("").reduce((acc, char) => char === letter ? acc+=1 : acc, 0)
}

function getNbPost(nb)
{
	const url = "https://jsonplaceholder.typicode.com/posts";
	fetch(url)
	.then(response => response.json())
	.then((datas) => {
			datas
			.filter((post, index) => index < nb)
			.map(data => printResults(data));
	})
}

function ConstructResults(data)
{
	const fragment = new DocumentFragment();
	const div = document.createElement("div");
	div.classList.add("singlePost");
	const title = document.createElement("h2");
	title.appendChild(document.createTextNode(data.title));
	const body = document.createElement("p");
	body.appendChild(document.createTextNode(data.body));
	const credit = document.createElement("p");
	credit.appendChild(document.createTextNode(`Post ID: ${data.id}, User ID: ${data.userId}`));
	const button = document.createElement("button");
	button.appendChild(document.createTextNode(`Compter tous les "e" dans le titre de ce Post`));
	button.addEventListener('click', getTitleLetter, false)
	button.classList.add("singlePostButton");
	div.appendChild(title);
	div.appendChild(body);
	div.appendChild(credit);
	div.appendChild(button);
	fragment.appendChild(div);
	return fragment;
}

function printResults(data, index)
{
	const master = document.querySelector(".all_messages");
	master.appendChild(ConstructResults(data, index));
}

elSubmit.addEventListener('click', createResults);
allTitlesButton.addEventListener('click', getTitlesLetter);


