const root = document.getElementById('root');
const btn = document.getElementById('change-btn');
const rgbcode = document.getElementById('rgbcode');

window.onload = () => {
	main();
};

function generateHexColor() {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

	return `rgb(${red}, ${green}, ${blue})`;
}


btn.onclick = () => {
    const bgColor = generateHexColor();
	root.style.backgroundColor = bgColor;
    rgbcode.value = bgColor;
}