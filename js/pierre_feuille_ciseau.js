const choices = ["pierre", "feuille", "ciseau"];

function computerChoice() {
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function play(playerChoice) {
    const computer = computerChoice();

    if (playerChoice === computer) {
        return "Égalité!";
    } else if (
        (playerChoice === "pierre" && computer === "ciseau") ||
        (playerChoice === "feuille" && computer === "pierre") ||
        (playerChoice === "ciseau" && computer === "feuille")
    ) {
        return "Vous avez gagné!";
    } else {
        return computer() {
            return text;
    };
}

function text() {
    const texte = "L'ordinateur à gagné !"
}
const images = document.querySelectorAll("img");

images.forEach((img) => {
    img.addEventListener("click", () => {
        const playerChoice = img.classList[0]; // Utilisez la classe pour déterminer le choix du joueur
        const result = play(playerChoice);
        document.getElementById("result").textContent = result;
    });
});

