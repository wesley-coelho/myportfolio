class Board{
    blackCells = [];
    whitePieces = [];
    blackPieces = [];   

    constructor(){        
        this.putPiecesOnTheBoard();
        this.blackCells = $('.black-cell');
    }

    putPiecesOnTheBoard(){

        this.removePieces();
        //posicionando peças pretas
        for( let i = 1; i < 4; i++){
            if( i % 2 == 0 ){
                for( let j = 1; j < 8; j+=2){
                    let id = '#cell-' + i + j;                   
                    $(id).append('<img src="peca-escura.png" width="50" height="50" class="black"/>');
                    let position = new Position(i,j) ;  
                    this.blackPieces.push(new Piece(position, 'black'));

                }
            }
            else{
                for( let j = 2; j < 9; j+=2){
                    let id = '#cell-' + i + j;            
                    $(id).append('<img src="peca-escura.png" width="50" height="50" class="black"/>');
                    let position = new Position(i,j) ;
                    this.blackPieces.push(new Piece( position, 'black'));
                }
            }
        }
        
        //posicionando peças brancas
        for( let i = 6; i < 9; i++){
            if( i % 2 == 0 ){
                for( let j = 1; j < 8; j+=2){
                    let id = '#cell-' + i + j;                      
                    $(id).append('<img src="peca-clara.png" width="50" height="50" class="white"/>');
                    let position = new Position(i,j) ; 
                   this.whitePieces.push(new Piece(position, 'white'));
                }
            }
            else{
                for( let j = 2; j < 9; j+=2 ){
                    let id = '#cell-' + i + j; 
                    $(id).append('<img src="peca-clara.png" width="50" height="50" class="white"/>');
                    let position = new Position(i,j) ; 
                    this.whitePieces.push(new Piece(position, 'white'));
                }
            }
        }
    }

    removePieces(){    
        //posicionando peças pretas
        for( let i = 1; i < 9; i++){
            if( i % 2 == 0 ){
                for( let j = 1; j < 8; j+=2){
                    let id = '#cell-' + i + j; 
                    if( $(id).find("img") ){
                    $(id).find("img").remove();
                    }
                }
            }
            else{
                for( let j = 2; j < 9; j+=2 ){
                    let id = '#cell-' + i + j; 
                    if( $(id).find("img") ){
                    $(id).find("img").remove();
                    }
                }
            }
        }
    }

    removeClickEventHandlerAtAllBlackCells(){
         for(let i = 0; i < this.blackCells.length; i++){
             $(this.blackCells[i]).off('click');
             $(this.blackCells[i]).css('cursor', 'default');
         }


    }
}