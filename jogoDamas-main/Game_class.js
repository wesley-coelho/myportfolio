//variaveis globais da partida


class Game{
  
    constructor(board){
        this.board = board;
    }


    hasWinner(){
        if( this.board.whitePieces.length == 0 ){
            return this.board.whitePieces;
        }else if( this.board.blackPieces.length == 0 ){
            return this.board.blackPieces;
        }else{
            return null;
        }
    }
}


