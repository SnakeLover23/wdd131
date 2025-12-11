const form = document.querySelector(".favz");

// localStorage.clear();
let data = localStorage.getItem("favorites");
let favorites = JSON.parse(localStorage.getItem("favorites"));


form.addEventListener("submit", function() {
    const type = document.querySelector("#type")
    const text = type.value;
    if (data) {
        favorites.push(text);
        localStorage.setItem("favorites", JSON.stringify(favorites));
    } else {
        favorites = [text];
        localStorage.setItem("favorites", JSON.stringify(favorites));
    };
});

function listFavorites() {
    if (favorites !== null) {
        favorites.forEach(favorite => {
            let li = document.createElement("li");
            li.textContent = favorite;
            document.querySelector(".yourfavs").appendChild(li);
        });
    } else {
        let li = document.createElement("li");
        li.textContent = "You don't have any favorites.";
        document.querySelector(".yourfavs").appendChild(li);
    };
};

listFavorites();

const today = new Date();
const currentyear = document.querySelector("#currentyear");
currentyear.innerHTML = `${today.getFullYear()}`;

document.getElementById("lastModified").innerHTML = document.lastModified;
