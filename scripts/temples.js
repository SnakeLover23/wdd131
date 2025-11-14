const menuButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

menuButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	menuButton.classList.toggle('open');
});




const today = new Date()
const currentyear = document.querySelector("#currentyear")
currentyear.innerHTML = `${today.getFullYear()}`

document.getElementById("lastModified").innerHTML = document.lastModified;