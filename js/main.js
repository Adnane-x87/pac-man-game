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

const tileMap = [
    "XXXXXXXXXXXXXXXXXXX",
    "X        X        X",
    "X XX XXX X XXX XX X",
    "X                 X",
    "X XX X XXXXX X XX X",
    "X    X       X    X",
    "XXXX XXXX XXXX XXXX",
    "OOOX X       X XOOO",
    "XXXX X XXrXX X XXXX",
    "O       bpo       O",
    "XXXX X XXXXX X XXXX",
    "OOOX X       X XOOO",
    "XXXX X XXXXX X XXXX",
    "X        X        X",
    "X XX XXX X XXX XX X",
    "X  X     P     X  X",
    "XX X X XXXXX X X XX",
    "X    X   X   X    X",
    "X XXXXXX X XXXXXX X",
    "X                 X",
    "XXXXXXXXXXXXXXXXXXX" 
];

const walls = new Set();
const foods = new Set();
const ghosts = new Set();
let pacman;



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

function loadMap(){
 walls.clear();
 foods.clear();
 ghosts.clear();

 for(let r = 0; r < rowCount; r++){
   for(let c = 0; c < columnCount; c++){
    const row = tileMap[r];
    const tileMapChar = row[c];

    const x = c*titleSize;
    const y = r*titleSize;


    if(tileMapChar == 'X'){// block wall
        const wall = new block(wallImage , x , y , titleSize , titleSize);
         walls.add(wall);

    }
else if(tileMapChar == 'b'){ // blue ghost
    const ghost = new block(wallImage , x , y,titleSize , titleSize);

}
   }

 }
}
class block {
    constructor(image , x , y , width , height){
        this.image = image;
        this.x = x;
        this. y = y;
        this.width = width;
        this.height = height;

        this.startx = x;
        this.starty = y;

    }
}