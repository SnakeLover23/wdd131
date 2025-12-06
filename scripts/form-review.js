window.addEventListener("load", function() {
  let loadCount = parseInt(localStorage.getItem('loadCount') || '0', 10);
  loadCount = loadCount + 1;
  localStorage.setItem('loadCount', loadCount);

  document.querySelector('#loaded').innerHTML = loadCount;
});

const today = new Date();
const currentyear = document.querySelector("#currentyear");
currentyear.innerHTML = `${today.getFullYear()}`;

document.getElementById("lastModified").innerHTML = document.lastModified;