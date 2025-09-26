let board;
const rowCount =21;
const columnCount=19;
const titleSize = 32;
const boardWidth = columnCount *titleSize;
const boradHeight=rowCount*titleSize;
let context;


// images

let blueGhostImage;
let orangeGhostImage;
let pinkGhostImage;
let redGhostImage;
let pacManupImage;
let pacMandownImage;
let pacManLeftImage;
let pacManRightImage;
let wallImage;
;
window.onload = function() {
    board = document.getElementById("board");
    board.height = boradHeight;
    board.width = boardWidth;
    context = board.getContext("2d"); // used for drawing on the board

    loadImage();
}

function loadImage(){
    wallImage = new Image();
    wallImage.src ="./images/wall.png";

    blueGhostImage= new Image();
    blueGhostImage.src ="./images/blueGhost.png";
    orangeGhostImage = new Image();
    orangeGhostImage.src = "./images/orangeGhost.png";
    pinkGhostImage = new Image();
    pinkGhostImage.src = "./images/pinkGhost.png";
    redGhostImage = new Image();
    redGhostImage.src = "./images/redGhost.png";

    pacManupImage = new Image();
    pacManupImage.src = "./images/pacmanUp.png";
    pacMandownImage = new Image();
    pacMandownImage.src = "./images/pacmanDown.png";
    pacManLeftImage = new Image();
    pacManLeftImage.src = "./images/pacmanLeft.png";
    pacManRightImage = new Image()
    pacManRightImage.src = "./images/pacmanRight.png"; 

}

