// we need to create a game where the player must click on the boxes inside our squares

// we create a variable to call our button from our index.html:
let elBtnPlay = document.getElementById("startBtn");
console.log(elBtnPlay);


// this button will make the game start:
elBtnPlay.addEventListener('click', function() {
    console.log('iniziamo a giocare!');

}
);


//we do a function to create our grid into our "mineField" container:
function createGrid () {
    const mineField = document.getElementById("mineField");
    // here we define the number of cell we need:
    const cellCount = 100;
    // now we tell the machine how to create our cells
    for (let i = 0; i < cellCount; i++) {
        const cell = document.createElement("div");
        // here we add to our cells the classes we want to give them:
        cell.classList.add("ls-cell");
        // with cell.textContent we are telling the machine to print sequentially the text
        cell.textContent = i - 1;
        mineField.appendChild(cell);   
    }
}

//when the user clicks on play a grid of cells has to happear into our "mineField"

//the user will be able to click on each of the squares inside the minefield and a color and a number will happear into these boxes