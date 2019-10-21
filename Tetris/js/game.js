//логика

class Game {
    static points = {
        '1': 40,
        '2': 100,
        '3': 300,
        '4': 1200,
    }

    constructor() {
        this.reset();
    }

    get level() {
        return Math.floor(this.lines * 0.1);
    }

    getState() {
        const playfield = this.createPlayfield();
        const { y: pieceY, x: pieceX, blocks } = this.activePiece;

        for (let y = 0; y < this.playfield.length; y++){
            playfield[y] = [];

            for (let x = 0; x < this.playfield[y].length; x++) {
                playfield[y][x] = this.playfield[y][x];
            }
        }

        for ( let y = 0; y < blocks.length; y++) {
            for (let x = 0; x < blocks[y].length; x++) {
                if(blocks[y][x]) {
                    playfield[pieceY + y][pieceX + x] = blocks[y][x];
                }
            }
        }

        return {
            score: this.score,
            level: this.level,
            lines: this.lines,
            nextPiece: this.nextPiece,
            playfield,
            isGameOver: this.topOut
        };
    }

    reset() {
        this.score = 0;
        this.lines = 0;
        this.topOut = false;
        this.playfield = this.createPlayfield();
        this.activePiece = this.createPiece();
        this.nextPiece = this.createPiece();

    }

    createPlayfield() {
        const playfield = [];

        for (let y = 0; y < 20; y++){
            playfield[y] = [];

            for (let x = 0; x < 10; x++){
                playfield[y][x] = 0;
            }
        }

        return playfield;
    }

    createPiece() {
        const index = Math.floor(Math.random() * 7); 
        const type = 'IJLOSTZ'[index];
        const piece = {};

        switch (type) {
            case 'I':
                piece.blocks = [
                    [0,0,0,0],
                    [1,1,1,1],
                    [0,0,0,0],
                    [0,0,0,0]
                ];
                break;
            case 'J':
                 piece.blocks = [
                    [0,0,0],
                    [2,2,2],
                    [0,0,2]
                ];
                break;
            case 'L':
                piece.blocks = [
                    [0,0,0],
                    [3,3,3],
                    [3,0,0]
                ];
                break;
            case 'O':
                piece.blocks = [
                    [0,0,0,0],
                    [0,4,4,0],
                    [0,4,4,0],
                    [0,0,0,0]
                ];
                break;
            case 'S':
                piece.blocks = [
                    [0,0,0],
                    [0,5,5],
                    [5,5,0]
                ];
                break;
            case 'T':
                piece.blocks = [
                    [0,0,0],
                    [6,6,6],
                    [0,6,0]
                ];
                break;
            case 'Z':
                piece.blocks = [
                    [0,0,0],
                    [7,7,0],
                    [0,7,7]
                ];
                break;
            default:
                throw new Error('Неизвестный тип фигуры')
        }

        piece.x = Math.floor((10 - piece.blocks[0].length) / 2);
        piece.y = -1;

        return piece;
    }

    //методы для реализации движения фигур
    movePieceLeft() {
        this.activePiece.x -= 1;

        if (this.hasCollision()) {
            this.activePiece.x += 1;
        }
    }

    movePieceRight() {
        this.activePiece.x += 1;

        if (this.hasCollision()) {
            this.activePiece.x -= 1;
        }
    }

    movePieceDown() {
        if (this.topOut) return;

        this.activePiece.y += 1;

        if (this.hasCollision()) {
            this.activePiece.y -=1;
            this.lockPiece();
            const clearedLines = this.clearLines();
            this.updateScore(clearedLines);
            this.updatePieces();
        }

        if (this.hasCollision()) {
            this.topOut = true;
        }
    }

    rotatePiece() {
        this.rotateBlocks();

        if (this.hasCollision()) {
            this.rotateBlocks(false);
        }

    }

    rotateBlocks(clockwise = true){
        const blocks = this.activePiece.blocks;
        const length = blocks.length;
        const x = Math.floor(length /2);
        const y = length -1;

        for ( let i = 0; i < x; i++) {
            for ( let j = i; j < y -i; j++){
                const temp = blocks[i][j];

                if (clockwise) {
                    blocks[i][j] = blocks[y - j][i];
                    blocks[y - j][i] = blocks[y - i][y - j];
                    blocks[y - i][y - j] = blocks[j][y - i]
                    blocks[j][y - i] = temp;
                } else {
                    blocks[i][j] = blocks[j][y - i];
                    blocks[j][y - i] = blocks[y - i][y - j];
                    blocks[y - i][y - j] = blocks[y - j][i];
                    blocks[y - j][i] = temp;
                }

                
            }
        }
    }

    hasCollision() {
        const { y: pieceY, x: pieceX, blocks } = this.activePiece;

        for (let y = 0; y < blocks.length; y++) {
            for (let x = 0; x < blocks[y].length; x++){
                if (
                    blocks[y][x] && 
                    ((this.playfield[pieceY + y] === undefined || this.playfield[pieceY + y][pieceX + x] === undefined) ||
                    this.playfield[pieceY + y][pieceX + x])
                ) {
                    return true;
                }
            }
        }

        return false;
    }

    lockPiece() {
        const { y: pieceY, x: pieceX, blocks } = this.activePiece;

        for (let y = 0; y < blocks.length; y++) {
            for (let x = 0; x < blocks[y].length; x++){
                if (blocks[y][x]) {
                    this.playfield[pieceY + y][pieceX + x] = blocks[y][x];
                }
            }
        }
    }

    clearLines() {
        const rows = 20;
        const columns = 10;
        let lines = [];

        for (let y = rows - 1; y >=0; y--) {
            let numberOfBlocks = 0;

            for (let x = 0; x < columns; x++) {
                if (this.playfield[y][x]) {
                    numberOfBlocks +=1;
                }
            }

            if (numberOfBlocks ===0) {
                break;
            } else if (numberOfBlocks < columns) {
                continue;
            } else if (numberOfBlocks === columns) {
                lines.unshift(y);
            }
        }

        for (let index of lines) {
            this.playfield.splice(index, 1);
            this.playfield.unshift(new Array(columns).fill(0));
        }

        return lines.length;
    }

    updateScore(clearedLines) {
        if (clearedLines > 0){
            this.score += Game.points[clearedLines] * (this.level + 1);
            this.lines += clearedLines;
        }

    }

    updatePieces() {
        this.activePiece = this.nextPiece;
        this.nextPiece = this.createPiece();
    }
}


// Холст  
class View {
    static colors = {
        '1': 'cyan',
        '2': 'blue',
        '3': 'orange',
        '4': 'yellow',
        '5': 'green',
        '6': 'purple',
        '7': 'red'   
    };

    constructor(element, width, height, rows, columns) {
        this.element = element;
        this.width = width;
        this.height = height;

        this.canvas = document.createElement('canvas');
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.context = this.canvas.getContext('2d');

        this.playfieldBorderWidth = 4;
        this.playfieldX = this.playfieldBorderWidth;
        this.playfieldY = this.playfieldBorderWidth;
        this.playfieldWidth = this.width * 2 / 3;
        this.playfieldHeight = this.height;
        this.playfieldInnerWidth = this.playfieldWidth - this.playfieldBorderWidth * 2;
        this.playfieldInnerHeight = this.playfieldHeight - this.playfieldBorderWidth * 2;


        this.blockWidth = this.playfieldInnerWidth / columns;
        this.blockHeight = this.playfieldInnerHeight / rows;

        this.panelX = this.playfieldWidth + 10;
        this.panelY = 0;
        this.panelWidth = this.width /3;
        this.panelHeight = this.height;

        this.element.appendChild(this.canvas); 
    }

    renderMainScreen(state) {
        this.clearScreen();
        this.renderPlayfield(state);
        this.renderPanel(state);
    }

    renderStartScreen() {
        this.context.fillStyle = 'white';
        this.context.font = '28px "VT323"';
        this.context.textAlign = 'center';
        this.context.textBaseline = 'middle';
        this.context.fillText('Press Enter to start', this.width / 2, this.height / 2); 
    }

    renderPauseScreen() {
        this.context.fillStyle = 'rgba(0,0,0,0.75)';
        this.context.fillRect(0, 0, this.width, this.height);

        this.context.fillStyle = 'white';
        this.context.font = '28px "VT323"';
        this.context.textAlign = 'center';
        this.context.textBaseline = 'middle';
        this.context.fillText('Press Enter to resume', this.width / 2, this.height / 2); 
    }

    renderEndScreen({ score }){
        this.clearScreen();

        this.context.fillStyle = 'white';
        this.context.font = '28px "VT323"';
        this.context.textAlign = 'center';
        this.context.textBaseline = 'middle';
        this.context.fillText('GAME OVER', this. width / 2, this.height / 2 - 48);
        this.context.fillText(`Score: ${score}`, this. width / 2, this.height / 2); 
        this.context.fillText('Press ENTER to Restart', this. width / 2, this.height / 2 + 48); 
    }

    clearScreen() {
        this.context.clearRect(0, 0, this.width, this.height);
    }
    
    renderPlayfield({ playfield }) {
        for (let y = 0; y < playfield.length; y++) {
            for (let x = 0; x < playfield[y].length; x++) {
                const block = playfield[y][x];

                if (block){
                    this.renderBlock(
                        this.playfieldX + (x * this.blockWidth), 
                        this.playfieldY + (y * this.blockHeight), 
                        this.blockWidth, 
                        this.blockHeight, 
                        View.colors[block]
                    );
                }
            }
        }

        this.context.strokeStyle = 'purple';
        this.context.lineWidth = this.playfieldBorderWidth;
        this.context.strokeRect(0, 0, this.playfieldWidth, this.playfieldHeight);
    } 

    renderPanel({ level, score, lines, nextPiece }) {
        this.context.textAlign = 'start';
        this.context.textBaseline = 'top';
        this.context.fillStyle = 'white';
        this.context.font = '20px"VT323"';

        this.context.fillText(`Level: ${level}`, this.panelX, this.panelY + 0);
        this.context.fillText(`Score: ${score}`, this.panelX, this.panelY + 24);
        this.context.fillText(`lines: ${lines}`, this.panelX, this.panelY + 48);
        this.context.fillText('Next:', this.panelX, this.panelY + 96);

        for (let y = 0; y < nextPiece.blocks.length; y++) {
            for (let x = 0; x < nextPiece.blocks[y].length; x++) {
                const block = nextPiece.blocks[y][x];

                if(block) {
                    this.renderBlock(
                        this.panelX + (x * this.blockWidth * 0.5),
                        this.panelY + 100 + (y * this.blockHeight * 0.5),
                        this.blockWidth * 0.5,
                        this.blockHeight * 0.5,
                        View.colors[block]
                    );
                }
                
            }
            
        }
    }

    renderBlock(x, y, width, height, color) {
        this.context.fillStyle = color;
        this.context.strokeStyle = 'black';
        this.context.lineWidth = 2;

        this.context.fillRect(x, y, width, height);
        this.context.strokeRect(x, y, width, height);
    }
}

class Controller {
    constructor(game, view) {
        this.game = game;
        this.view = view;
        this.intervalId = null;
        this.isPlaying = false;

        document.addEventListener('keydown', this.handleKeyDown.bind(this));
        document.addEventListener('keyup', this.handleKeyUp.bind(this));
        // document.addEventListener('click', this.mobilePauseGame.bind(this));

        var startGameMusic = document.getElementById('Start_game_music');
        this.startGameMusic = startGameMusic;

        var chengePieceSound = document.getElementById('chengePieceSound');
        this.chengePieceSound = chengePieceSound;
        
        var buttonStartGame = document.getElementById('buttonStartGame');
        this.buttonStartGame = buttonStartGame;
        buttonStartGame.addEventListener('click', this.mobileStartGame.bind(this));

        var buttonPauseGame = document.getElementById('buttonPauseGame');
        this.buttonPauseGame = buttonPauseGame;
        buttonPauseGame.addEventListener('click', this.mobilePauseGame.bind(this));

        var buttonResetGame = document.getElementById('buttonResetGame');
        this.buttonResetGame = buttonResetGame;
        buttonResetGame.addEventListener('click', this.mobileResetGame.bind(this));

        var mobileLeft = document.getElementById('mobileLeft');
        this.mobileLeft = mobileLeft;
        mobileLeft.addEventListener('click', this.mobileLeftGame.bind(this));

        var mobileRight = document.getElementById('mobileRight');
        this.mobileRight = mobileRight;
        mobileRight.addEventListener('click', this.mobileRightGame.bind(this));

        var mobileDown = document.getElementById('mobileDown');
        this.mobileDown = mobileDown;
        mobileDown.addEventListener('click', this.mobileDownGame.bind(this));

        var mobileChenge = document.getElementById('mobileChenge');
        this.mobileChenge = mobileChenge;
        mobileChenge.addEventListener('click', this.mobileChengeGame.bind(this));


        this.view.renderStartScreen();
    }

    update() {
        this.game.movePieceDown();
        this.updateView();
    }

    playGame() {
        this.isPlaying = true;
        this.startTimer();
        this.updateView();
        this.startGameMusic.play();
    }

    pause() {
        this.isPlaying = false;
        this.stopTimer();
        this.updateView();
        this.startGameMusic.pause();
    }

    reset () {
        this.game.reset();
        this.playGame();
    }

    updateView(){
        const state = this.game.getState();

        if (state.isGameOver) {
            this.view.renderEndScreen(state);
        } else if (!this.isPlaying) {
            this.view.renderPauseScreen();
        } else
            this.view.renderMainScreen(state);
    }

    startTimer() {
    const speed = 1000 - this.game.getState().level * 100;

        if (!this.intervalId) {
            this.intervalId = setInterval(() => {
                this.update();
            }, speed > 0 ? speed : 100);
        }
    }

    stopTimer() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }

    handleKeyDown(event){
        const state = this.game.getState();

        switch (event.keyCode) {
            case 13: //Enter
                if(state.isGameOver) {
                    this.reset();
                } else if  (this.isPlaying) {
                    this.pause();
                } else {
                    this.playGame();
                };
                break;
            case 37: //left arrow
                this.game.movePieceLeft();
                this.updateView();
                this.chengePieceSound.play();
                break;
            case 38: //up arrow
                this.game.rotatePiece();
                this.updateView();
                this.chengePieceSound.play();
                break;
            case 39: //right arrow
                this.game.movePieceRight();
                this.updateView();
                this.chengePieceSound.play();
                break;
            case 40: //down arrow
                this.stopTimer();
                this.game.movePieceDown();
                this.updateView();
                this.chengePieceSound.play();
                break;
        }
    }

    handleKeyUp(event) {
        switch (event.keyCode) {
            case 40: //down arrow
                this.startTimer();
                break;
        }
    }
    
    mobileStartGame(){
        this.buttonStartGame = this.playGame();
    }

    mobilePauseGame(){
        this.buttonPauseGame = this.pause();
    }

    mobileResetGame(){
        const state = this.game.getState();
        
        if(state.isGameOver) {
            this.reset();
        }
    }

    mobileLeftGame(){
        this.mobileLeft = this.game.movePieceLeft();
        this.mobileLeft = this.updateView();
        this.mobileLeft = this.chengePieceSound.play();
    }

    mobileRightGame(){
        this.mobileRight = this.game.movePieceRight();
        this.mobileRight = this.updateView();
        this.mobileRight = this.chengePieceSound.play();
    }

    mobileDownGame(){
        this.mobileDown = this.game.movePieceDown();
        this.mobileDown = this.updateView();
        this.mobileDown = this.chengePieceSound.play();
    }

    mobileChengeGame(){
        this.mobileChenge = this.game.rotatePiece();
        this.mobileChenge = this.updateView();
        this.mobileChenge = this.chengePieceSound.play();
    }
    

}   


const root = document.querySelector('#root');

const game = new Game();
const view = new View(root, 480, 640, 20, 10);
const controller = new Controller(game, view);

//выводим игру в окно
window.game = game;
window.view = view;
window.controller = controller;




