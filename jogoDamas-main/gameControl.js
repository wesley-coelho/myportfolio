//Global variables
var board = null;
var game = null;
var hasWinner = null;
var turn = 'white'; 
var timer = null;
var possibleMoves = [];
var opponentPiece = [];

function reset(){
    if( timer != null ){
        timer.stop();
        timer.reset();
    }else{
        timer = new Timer(0,0,0);
    }
    turn = 'white';
    board = new Board();
    game = new Game(board);    
   
}

function start(){
   
    hasWinner = game.hasWinner();    
    if( hasWinner == null ){
        if(hasPossibleMoves().length > 0){                        
            timer.start();            
            addClickEventOnThePieces();
        }else{
            console.log("Alguém ganhou!")
            //alguem ganhou
        }   
        
        
    }
}


function hasPossibleMoves(){
    if(turn == 'white'){
        for(let i = 0; i < board.whitePieces.length; i++){
            if(board.whitePieces[i].possibleMoviments().length){
                
                return board.whitePieces[i].possibleMoviments();
            }
            
        }
        console.log(board.whitePieces[i].possibleMoviments())
        return board.whitePieces[i].possibleMoviments();
    }else{
        for(let i = 0; i < board.blackPieces.length; i++){
            if(board.blackPieces[i].possibleMoviments().length){
               
                return board.blackPieces[i].possibleMoviments();
            }
            
        }
       
        return board.blackPieces[i].possibleMoviments();
    }
  
    
}

function addClickEventOnThePieces(){

    //add evento de clique nas peças que podem jogar
    if(turn == 'white'){
        for(let i = 0; i < board.blackPieces.length; i++){
            board.blackPieces[i].removeClickEventHandler();
            board.blackPieces[i].cursorDefault();
        }
        for(let i = 0; i < board.whitePieces.length; i++){
            board.whitePieces[i].addClickEventHandler( board.whitePieces[i]);
            board.whitePieces[i].cursorPointer();
            
        }
        
    }else{
        for(let i = 0; i < board.whitePieces.length; i++){
            board.whitePieces[i].removeClickEventHandler();
            board.whitePieces[i].cursorDefault();
            
        }
        for(let i = 0; i < board.blackPieces.length; i++){
            board.blackPieces[i].addClickEventHandler(board.blackPieces[i]);
            board.blackPieces[i].cursorPointer();
            
        }
    }
}







