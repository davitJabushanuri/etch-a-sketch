const container = document.getElementById('container');
const divWidth = container.clientWidth;
const numOfDivs = prompt(`enter the column width`);
const divs = numOfDivs * numOfDivs;
const calcWidth = divWidth / numOfDivs;
let colorButton = document.getElementById('colorPicker');
let color = `black`;

colorButton.onchange = function () {
	color = colorButton.value;
};

for (let i = 0; i < divs; i++) {
	const div = document.createElement('div');
	div.style.height = calcWidth + `px`;
	div.style.width = calcWidth + `px`;
	div.style.backgroundColor = `#fff`;
	div.classList.add('box');

	container.appendChild(div);
}

const box = document.querySelectorAll('.box');
box.forEach((box) => {
	box.addEventListener('mouseover', (e) => {
		e.target.style.backgroundColor = color;
	});
});

const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', () => {
	document.querySelectorAll('.box').forEach((box) => {
		box.style.backgroundColor = '#fff';
	});
});
