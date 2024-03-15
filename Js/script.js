// we need to create a game where the player must click on the boxes inside our squares

// we create a variable to call our button from our index.html:
let elBtnPlay = document.getElementById("startBtn");
console.log(elBtnPlay);


// this button will make the game start:
elBtnPlay.addEventListener('click', function() {
    console.log('iniziamo a giocare!');
}
);