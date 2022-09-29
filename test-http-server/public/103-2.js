let div = document.querySelector('div');
let button = document.querySelector('button');

button.addEventListener('click', async function() {
	const response = await fetch('/handler/?num=2');
    const text = await response.text();
    div.innerHTML = text;
});