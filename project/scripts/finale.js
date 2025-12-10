const snakes = [
    {
        title: "Smallist",
        image: "images/barbados-threadsnake.webp",
        description: "Tetracheilostoma carlae or the Barbados threadsnake is the smallest snake in the world only measuring at most 10 centimeters in length. This species of snake is criticly endangured with no wild specimins being found between 2005 and 2025."
    },
    {
        title: "Constrictors",
        image: "images/boa-constrictor.webp",
        description: "Many snakes use constriction to subdue their prey, this involves the snake wraping their body around their prey snd squeezing the life out of them."
    },
    {
        title: "Venomous",
        image: "images/inland-taipan.webp",
        description: "Many snakes use vonom eather as a means of self defence or as a way to imobalize prey, venomous snakes typically only have one of two types of venom, hemotoxin or neurotoxin."
    },
    {
        title: "Ovivores",
        image: "images/red-bellied-black-snake.webp",
        description: "Some snakes are ovivores which means their diet consist entirly of eggs"
    },
    {
        title: "Largest",
        image: "images/reticulated-python.webp",
        description: "The largest snake in the world is the Reticulated Python from southeast Aisa able to grow to an impressive 6.5 meters though longer snakes growing up to 7.6 meters have been recorded."
    },
    {
        title: "Flying",
        image: "images/paradise-flying-snake.webp",
        description: "Chrysopelea paradisi or the Paradise Flying Snake is a snake with the fascinating ability to glide between trees, it does this by stretching and flatening its ribcage to give its body more surface area when it jumps."
    },
    {
        title: "Swimming",
        image: "images/sea-krait.webp",
        description: "Many snakes are capable of swiming with some of them being semi or fully aquatic, some species like the Sea krait are fully adapted to life in the water."
    },
    {
        title: "Slithering",
        image: "images/sidewinder.webp",
        description: "Snakes move around by slithering because they don't have any limbs, this is done by rhythmically contracting and expanding the muscles lining their belly."
    },
    {
        title: "Sheding",
        image: "images/snake-shedding.webp",
        description: "Snakes bodies are covered in tough scales that don't stretch so when a snake grows it needs to shed its old scales."
    }
];

const rng = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

function randomsnake() {
    const snake = snakes[rng(0,snakes.length - 1)]
    let img = document.querySelector("#randimg")
    img.setAttribute("src", snake.image)
};

randomsnake();

const today = new Date()
const currentyear = document.querySelector("#currentyear")
currentyear.innerHTML = `${today.getFullYear()}`

document.getElementById("lastModified").innerHTML = document.lastModified;