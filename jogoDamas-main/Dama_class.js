class Dama extends Piece{
  

    constructor(piece){
        super(piece.getPosition(), piece.getColor());
        if(piece.getColor() == 'white'){
            for(let i = 0; i < board.whitePieces.length; i++){
                if(board.whitePieces[i].getPosition().getRow() == piece.getPosition().getRow() && 
                board.whitePieces[i].getPosition().getColumn() == piece.getPosition().getColumn() ){                   
                    
                    board.whitePieces.splice(i,1); 
                    board.whitePieces.push(this);
                    super.move(piece.getPosition()); 
                    addClickEventOnThePieces(); // função dentro do arquivo gameControl
    
                }
            }
        }else{
            for(let i = 0; i < board.blackPieces.length; i++){
                if(board.blackPieces[i].getPosition().getRow() == piece.getPosition().getRow() && 
                board.blackPieces[i].getPosition().getColumn() == piece.getPosition().getColumn() ){                    
              
                    board.blackPieces.splice(i,1); 
                    board.blackPieces.push(this); 
                    super.move(piece.getPosition()); 
                    addClickEventOnThePieces();        
    
                }
            }  
        }

        this.possibleMoves = [];
        
    }

    addClickEventHandler(){
        $(super.getNode()).on('click', ()=>{               
            this.possibleMoves= this.possibleMoviments();                  
            this.addClickEventHandlerAtFreePositions();
         });        
    }

    capturePiece( piecePositionBeforeMove){
        while(opponentPiece.length > 0){
  
            
            let row = opponentPiece[0].parent().attr('id').substr(5,1);
            let column = opponentPiece[0].parent().attr('id').substr(6,1);
            let opponentPosition = new Position(row, column);
            let piecePositionAfterMove = this.getPosition();

            if( this.isInDiagonalPositions(piecePositionAfterMove, opponentPosition) ){
                
                if( piecePositionBeforeMove.getRow() <  opponentPosition.getRow() && piecePositionAfterMove.getRow() > opponentPosition.getRow()){
                    //comeu peça
                    if( opponentPiece[0].attr('class') == 'white' ){
         
                        for(let i = 0; i < board.whitePieces.length; i++){
                            if(board.whitePieces[i].getPosition().getRow() == opponentPosition.getRow() && 
                            board.whitePieces[i].getPosition().getColumn() == opponentPosition.getColumn() ){                    
                                board.whitePieces[i].getNode().remove();
                                board.whitePieces.splice(i,1);        
                                opponentPiece.shift();
                        
            
                            }
                        }
                    }else{
                        for(let i = 0; i < board.blackPieces.length; i++){
                            if(board.blackPieces[i].getPosition().getRow() == opponentPosition.getRow() && 
                            board.blackPieces[i].getPosition().getColumn() == opponentPosition.getColumn() ){                    
                                board.blackPieces[i].getNode().remove();
                                board.blackPieces.splice(i,1);        
                                opponentPiece.shift();
           
            
                            }
                        }
                    }

                }else if(piecePositionBeforeMove.getRow() >  opponentPosition.getRow() && piecePositionAfterMove.getRow() < opponentPosition.getRow()){
                    //comeu peça
                    if( opponentPiece[0].attr('class') == 'white' ){
         
                        for(let i = 0; i < board.whitePieces.length; i++){
                            if(board.whitePieces[i].getPosition().getRow() == opponentPosition.getRow() && 
                            board.whitePieces[i].getPosition().getColumn() == opponentPosition.getColumn() ){                    
                                board.whitePieces[i].getNode().remove();
                                board.whitePieces.splice(i,1);        
                                opponentPiece.shift();
                             
            
                            }
                        }
                    }else{
                        for(let i = 0; i < board.blackPieces.length; i++){
                            if(board.blackPieces[i].getPosition().getRow() == opponentPosition.getRow() && 
                            board.blackPieces[i].getPosition().getColumn() == opponentPosition.getColumn() ){                    
                                board.blackPieces[i].getNode().remove();
                                board.blackPieces.splice(i,1);        
                                opponentPiece.shift();
                           
            
                            }
                        }
                    }
                }else{
                    break;
                }
            }else{
                //não comeu
                break;
            }    
        }
          
     }

    addClickEventHandlerAtFreePositions(){
        board.removeClickEventHandlerAtAllBlackCells();
       for(let i = 0; i <this.possibleMoves.length; i++){
            let node = $('#cell-' + this.possibleMoves[i].getRow() + this.possibleMoves[i].getColumn());
            node.on('click', ()=>{              
                let piecePositionBeforeMove = this.getPosition();
                
                super.move(this.possibleMoves[i]);           
              
              
                if(opponentPiece.length > 0){ 
                                  
                    this.capturePiece( piecePositionBeforeMove);
                    opponentPiece = []; 
                    if( this.hasMoreOpponetPiecesToCapture() ){

                    }else{
                        if(this.getColor() == 'white'){
                            turn = 'black';
                        }else{
                        turn = 'white';
                        }
                        timer.stop();
                        timer.reset();
                        start(); 
                    }
                       
                }else{
                    if(this.getColor() == 'white'){
                        turn = 'black';
                    }else{
                    turn = 'white';
                    }
                    timer.stop();
                    timer.reset();
                    start();
                }

                board.removeClickEventHandlerAtAllBlackCells(); 
            });
            node.css('cursor', 'pointer');        
        }
       
    }

   

    possibleMoviments(){

        let possibleMoves = [];
        let opponents = [];
        if(super.getColor() == 'white'){
           
            for( let i = 1; i < 9 ; i++ ){
                
                let pos = new Position( super.getPosition().getRow() + i, super.getPosition().getColumn() + i );
                let pos2 = new Position( super.getPosition().getRow() + i+1, super.getPosition().getColumn() + i+1 );
                let cell = super.getCellfromPosition(pos);
                let cell2 = super.getCellfromPosition(pos2);
                if(cell == null || cell.children().length > 0 && cell2 == null){
                    break;
                }
                if( cell.length > 0 && cell.children().length == 0){
                    possibleMoves.push(pos);
                }else if( cell.length > 0 && cell.children().length >0 && super.getPieceFromPosition(pos).getColor() == 'black' && cell2.length > 0 && cell2.children().length == 0){
                    opponents.push(cell.children());
                
                }else if(super.getPieceFromPosition(pos)!= null  && super.getPieceFromPosition(pos).getColor() == 'white'){
                    break;
                }else if(super.getPieceFromPosition(pos)!= null && super.getPieceFromPosition(pos2)!= null  && super.getPieceFromPosition(pos).getColor() == 'black' && super.getPieceFromPosition(pos2).getColor() == 'black'){
                    break;
                }
            }    

            for( let i = 1; i < 9 ; i++ ){
                let pos = new Position( super.getPosition().getRow() + i, super.getPosition().getColumn() - i );
                let pos2 = new Position( super.getPosition().getRow() + i+1, super.getPosition().getColumn() - i-1 );
                let cell = super.getCellfromPosition(pos);
                let cell2 = super.getCellfromPosition(pos2);
                if(cell == null || cell.children().length > 0 && cell2 == null){
                    break;
                }
                if( cell.length > 0 && cell.children().length == 0 ){
                    possibleMoves.push(pos);
                }else if( cell.length > 0 && cell.children().length >0 && super.getPieceFromPosition(pos).getColor() == 'black' && cell2.length > 0 && cell2.children().length == 0){
                        opponents.push(cell.children());
                    
                }else if(super.getPieceFromPosition(pos)!= null  && super.getPieceFromPosition(pos).getColor() == 'white'){
                    break;
                }else if(super.getPieceFromPosition(pos)!= null && super.getPieceFromPosition(pos2)!= null  && super.getPieceFromPosition(pos).getColor() == 'black' && super.getPieceFromPosition(pos2).getColor() == 'black'){
                    break;
                }
            }

            for( let i = 1; i < 9 ; i++ ){
                let pos = new Position( super.getPosition().getRow() - i, super.getPosition().getColumn() + i );
                let pos2 = new Position( super.getPosition().getRow() - i-1, super.getPosition().getColumn() + i+1 );
                let cell = super.getCellfromPosition(pos);
                let cell2 = super.getCellfromPosition(pos2);
                if(cell == null || cell.children().length > 0 && cell2 == null){
                    break;
                }

                if( cell.length > 0 && cell.children().length == 0 ){
                    possibleMoves.push(pos);              
                }else if( cell.length > 0 && cell.children().length >0 && super.getPieceFromPosition(pos).getColor() == 'black' && cell2.length > 0 && cell2.children().length == 0){
                    opponents.push(cell.children());
              
                }else if(super.getPieceFromPosition(pos)!= null  && super.getPieceFromPosition(pos).getColor() == 'white'){
                    break;
                }else if(super.getPieceFromPosition(pos)!= null && super.getPieceFromPosition(pos2)!= null  && super.getPieceFromPosition(pos).getColor() == 'black' && super.getPieceFromPosition(pos2).getColor() == 'black'){
                    break;
                }
            }
            for( let i = 1; i < 9 ; i++ ){
                let pos = new Position( super.getPosition().getRow() - i, super.getPosition().getColumn() - i );
                let pos2 = new Position( super.getPosition().getRow() - i-1, super.getPosition().getColumn() - i-1 );
                let cell = super.getCellfromPosition(pos);
                let cell2 = super.getCellfromPosition(pos2);

                if(cell == null || cell.children().length > 0 && cell2 == null){
                    break;
                }
               
                if( cell.length > 0 && cell.children().length == 0 ){
                    possibleMoves.push(pos);
                }else if( cell.length > 0 && cell.children().length >0 && super.getPieceFromPosition(pos).getColor() == 'black' && cell2.length > 0 && cell2.children().length == 0){
                    opponents.push(cell.children());
              
                }else if(super.getPieceFromPosition(pos)!= null  && super.getPieceFromPosition(pos).getColor() == 'white'){
                    break;
                }else if(super.getPieceFromPosition(pos)!= null && super.getPieceFromPosition(pos2)!= null  && super.getPieceFromPosition(pos).getColor() == 'black' && super.getPieceFromPosition(pos2).getColor() == 'black'){
                    break;
                }
            }
        }

        if(super.getColor() == 'black'){
           
            for( let i = 1; i < 9 ; i++ ){
                
                let pos = new Position( super.getPosition().getRow() + i, super.getPosition().getColumn() + i );
                let pos2 = new Position( super.getPosition().getRow() + i+1, super.getPosition().getColumn() + i+1 );
                let cell = super.getCellfromPosition(pos);
                let cell2 = super.getCellfromPosition(pos2);
                if(cell == null || cell.children().length > 0 && cell2 == null){
                    break;
                }
                if( cell.length > 0 && cell.children().length == 0){
                    possibleMoves.push(pos);
                }else if( cell.length > 0 && cell.children().length >0 && super.getPieceFromPosition(pos).getColor() == 'white' && cell2.length > 0 && cell2.children().length == 0){
                    opponents.push(cell.children());
                
                }else if(super.getPieceFromPosition(pos)!= null  && super.getPieceFromPosition(pos).getColor() == 'black'){
                    break;
                }else if(super.getPieceFromPosition(pos)!= null && super.getPieceFromPosition(pos2)!= null  && super.getPieceFromPosition(pos).getColor() == 'white' && super.getPieceFromPosition(pos2).getColor() == 'white'){
                    break;
                }
            }    

            for( let i = 1; i < 9 ; i++ ){
                let pos = new Position( super.getPosition().getRow() + i, super.getPosition().getColumn() - i );
                let pos2 = new Position( super.getPosition().getRow() + i+1, super.getPosition().getColumn() - i-1 );
                let cell = super.getCellfromPosition(pos);
                let cell2 = super.getCellfromPosition(pos2);
                if(cell == null || cell.children().length > 0 && cell2 == null){
                    break;
                }
                if( cell.length > 0 && cell.children().length == 0 ){
                    possibleMoves.push(pos);
                }else if( cell.length > 0 && cell.children().length >0 && super.getPieceFromPosition(pos).getColor() == 'white' && cell2.length > 0 && cell2.children().length == 0){
                        opponents.push(cell.children());
                    
                }else if(super.getPieceFromPosition(pos)!= null  && super.getPieceFromPosition(pos).getColor() == 'black'){
                    break;
                }else if(super.getPieceFromPosition(pos)!= null && super.getPieceFromPosition(pos2)!= null  && super.getPieceFromPosition(pos).getColor() == 'white' && super.getPieceFromPosition(pos2).getColor() == 'white'){
                    break;
                }
            }

            for( let i = 1; i < 9 ; i++ ){
                let pos = new Position( super.getPosition().getRow() - i, super.getPosition().getColumn() + i );
                let pos2 = new Position( super.getPosition().getRow() - i-1, super.getPosition().getColumn() + i+1 );
                let cell = super.getCellfromPosition(pos);
                let cell2 = super.getCellfromPosition(pos2);
                if(cell == null || cell.children().length > 0 && cell2 == null){
                    break;
                }

                if( cell.length > 0 && cell.children().length == 0 ){
                    possibleMoves.push(pos);              
                }else if( cell.length > 0 && cell.children().length >0 && super.getPieceFromPosition(pos).getColor() == 'white' && cell2.length > 0 && cell2.children().length == 0){
                    opponents.push(cell.children());
              
                }else if(super.getPieceFromPosition(pos)!= null  && super.getPieceFromPosition(pos).getColor() == 'black'){
                    break;
                }else if(super.getPieceFromPosition(pos)!= null && super.getPieceFromPosition(pos2)!= null  && super.getPieceFromPosition(pos).getColor() == 'white' && super.getPieceFromPosition(pos2).getColor() == 'white'){
                    break;
                }
            }
            for( let i = 1; i < 9 ; i++ ){
                let pos = new Position( super.getPosition().getRow() - i, super.getPosition().getColumn() - i );
                let pos2 = new Position( super.getPosition().getRow() - i-1, super.getPosition().getColumn() - i-1 );
                let cell = super.getCellfromPosition(pos);
                let cell2 = super.getCellfromPosition(pos2);

                if(cell == null || cell.children().length > 0 && cell2 == null){
                    break;
                }
               
                if( cell.length > 0 && cell.children().length == 0 ){
                    possibleMoves.push(pos);
                }else if( cell.length > 0 && cell.children().length >0 && super.getPieceFromPosition(pos).getColor() == 'white' && cell2.length > 0 && cell2.children().length == 0){
                    opponents.push(cell.children());
              
                }else if(super.getPieceFromPosition(pos)!= null  && super.getPieceFromPosition(pos).getColor() == 'black'){
                    break;
                }else if(super.getPieceFromPosition(pos)!= null && super.getPieceFromPosition(pos2)!= null  && super.getPieceFromPosition(pos).getColor() == 'white' && super.getPieceFromPosition(pos2).getColor() == 'white'){
                    break;
                }
            }
        }
        opponentPiece = opponents;

        return possibleMoves;
    }

    hasMoreOpponetPiecesToCapture(){
        this.possibleMoviments();
        if( opponentPiece.length >0 ){
            return true;
        }else{
            return false;
        }
    }

    diagonalPositions(opponentPosition){
        let diagonalPositions = [];

        let row = opponentPosition.getRow();
        let column = opponentPosition.getColumn();    
        while( row > 1 && column > 1 ){
            row--;
            column--;
            diagonalPositions.push(new Position(row, column));
        }

        row = opponentPosition.getRow();
        column = opponentPosition.getColumn();    
        while( row > 1 && column < 8 ){
            row--;
            column++;
            diagonalPositions.push(new Position(row, column));
        }

        row = opponentPosition.getRow();
        column = opponentPosition.getColumn();    
        while( row < 8 && column < 8 ){
            row++;
            column++;
            diagonalPositions.push(new Position(row, column));
        }

        row = opponentPosition.getRow();
        column = opponentPosition.getColumn();    
        while( row < 8 && column > 1 ){
            row++;
            column--;
            diagonalPositions.push(new Position(row, column));
        }

        return diagonalPositions;


    }

    isInDiagonalPositions(position, opponentPosition){
        let diagonal = this.diagonalPositions(opponentPosition);
        for( let i = 0; i <  diagonal.length; i++){
            if( position.getRow() == diagonal[i].getRow() && position.getColumn() == diagonal[i].getColumn() ){
                return true;
            }
        }
        return false;
    }
}