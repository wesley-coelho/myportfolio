class Piece{  

    constructor(position, color){
       
        this.position = position;
        this.color = color;
        this.fatherCell = null;
        this.possibleMoves = [];
        
    }   

    getFatherCell(){
        let row = this.position.getRow();
        let column = this.position.getColumn();
        this.fatherCell = $('#cell-' + row + column);
        return this.fatherCell;
    }

    getNode(){
       return this.getFatherCell().children();
    }

    setPosition(position){
        this.position = position;
    }

    getPosition(){
        return this.position;
    }

    setColor(color){
        this.color = color;
    }

    getColor(){
        return this.color;
    }

    addClickEventHandler(){

            $(this.getNode()).on('click', ()=>{
               
               this.possibleMoves= this.possibleMoviments();
            
               this.addClickEventHandlerAtFreePositions();
            });        
    }

    removeClickEventHandler(){
        $(this.getNode()).off('click');
    }

    cursorPointer(){
        $(this.getNode()).css('cursor', 'pointer');
    }

    cursorDefault(){
        $(this.getNode()).css('cursor', 'default');
    }

    possibleMoviments(){
      
        let possibleMoves = [];
        let opponents = [];
        if( this.getColor() == 'white' ){
            //possible moves white pieces
            //move to front right
            let pos1 = new Position(this.getPosition().getRow()-1, this.getPosition().getColumn()+1);
            let nodeAtPosition1 = $('#cell-' + pos1.getRow() + pos1.getColumn());
            if(nodeAtPosition1.length > 0 && nodeAtPosition1.children().length == 0){
                opponents.push(null);
                possibleMoves.push(pos1);
            }
            //move to front left
            let pos2 = new Position(this.getPosition().getRow()-1, this.getPosition().getColumn()-1);
            let nodeAtPosition2 = $('#cell-' + pos2.getRow() + pos2.getColumn());
            if(nodeAtPosition2.length > 0 && nodeAtPosition2.children().length == 0){
                opponents.push(null);
                possibleMoves.push(pos2);
            }
            //move to capture opponent piece to front right
            let pos3 = new Position(this.getPosition().getRow()-2, this.getPosition().getColumn()+2);
            let nodeAtPosition3 = $('#cell-' + pos3.getRow() + pos3.getColumn());
            if(nodeAtPosition3.length > 0 && nodeAtPosition3.children().length == 0 &&
            nodeAtPosition1.children().length > 0 &&  nodeAtPosition1.children().attr('class') == 'black'){
                opponents.push(nodeAtPosition1.children());
                possibleMoves.push(pos3);
            }
             //move to capture opponent piece to front left
            let pos4 = new Position(this.getPosition().getRow()-2, this.getPosition().getColumn()-2);
            let nodeAtPosition4 = $('#cell-' + pos4.getRow() + pos4.getColumn());
            if(nodeAtPosition4.length > 0 && nodeAtPosition4.children().length == 0 &&
            nodeAtPosition2.children().length > 0 &&  nodeAtPosition2.children().attr('class') == 'black'){
                opponents.push(nodeAtPosition2.children());
                possibleMoves.push(pos4);
            }
            //move to capture opponent piece to back right
            let pos5 = new Position(this.getPosition().getRow()+2, this.getPosition().getColumn()+2);
            let nodeAtPosition5 = $('#cell-' + pos5.getRow() + pos5.getColumn());
            let nodeOpponentAtPosition5 = $('#cell-' + (this.getPosition().getRow()+1 )+ (this.getPosition().getColumn()+1));
            if(nodeAtPosition5.length > 0 && nodeAtPosition5.children().length == 0 &&
            nodeOpponentAtPosition5.children().length > 0 &&  nodeOpponentAtPosition5.children().attr('class') == 'black'){
                opponents.push(nodeOpponentAtPosition5.children());
                possibleMoves.push(pos5);
            }
            //move to capture opponent piece to back left
            let pos6 = new Position(this.getPosition().getRow()+2, this.getPosition().getColumn()-2);
            let nodeAtPosition6 = $('#cell-' + pos6.getRow() + pos6.getColumn());
            let nodeOpponentAtPosition6 = $('#cell-' + (this.getPosition().getRow()+1 )+( this.getPosition().getColumn()-1));
            if(nodeAtPosition6.length > 0 && nodeAtPosition6.children().length == 0 &&
            nodeOpponentAtPosition6.children().length > 0 &&  nodeOpponentAtPosition6.children().attr('class') == 'black'){
                opponents.push(nodeOpponentAtPosition6.children());
                possibleMoves.push(pos6);
            }
        }
        else{
            //possible moves black pieces
            //move to front right
            let pos1 = new Position(this.getPosition().getRow()+1, this.getPosition().getColumn()+1);
            let nodeAtPosition1 = $('#cell-' + pos1.getRow() + pos1.getColumn());
            if(nodeAtPosition1.length > 0 && nodeAtPosition1.children().length == 0){
                opponents.push(null);
                possibleMoves.push(pos1);
            }
            //move to front left
            let pos2 = new Position(this.getPosition().getRow()+1, this.getPosition().getColumn()-1);
            let nodeAtPosition2 = $('#cell-' + pos2.getRow() + pos2.getColumn());
            if(nodeAtPosition2.length > 0 && nodeAtPosition2.children().length == 0){
                opponents.push(null);
                possibleMoves.push(pos2);
            }
            //move to capture opponent piece to back right
            let pos3 = new Position(this.getPosition().getRow()-2, this.getPosition().getColumn()+2);
            let nodeAtPosition3 = $('#cell-' + pos3.getRow() + pos3.getColumn());
            let nodeOpponentAtPosition3 = $('#cell-' + (this.getPosition().getRow()-1) + (this.getPosition().getColumn()+1));
            if(nodeAtPosition3.length > 0 && nodeAtPosition3.children().length == 0 &&
            nodeOpponentAtPosition3.children().length > 0 &&  nodeOpponentAtPosition3.children().attr('class') == 'white'){
                opponents.push(nodeOpponentAtPosition3.children());
                possibleMoves.push(pos3);
            }
            //move to capture opponent piece to back left
            let pos4 = new Position(this.getPosition().getRow()-2, this.getPosition().getColumn()-2);
            let nodeAtPosition4 = $('#cell-' + pos4.getRow() + pos4.getColumn());
            let nodeOpponentAtPosition4 = $('#cell-' + (this.getPosition().getRow()-1) + (this.getPosition().getColumn()-1));
            if(nodeAtPosition4.length > 0 && nodeAtPosition4.children().length == 0 &&
            nodeOpponentAtPosition4.children().length > 0 &&  nodeOpponentAtPosition4.children().attr('class') == 'white'){
                opponents.push(nodeOpponentAtPosition4.children());
                possibleMoves.push(pos4);
            }
            //move to capture opponent piece to front right
            let pos5 = new Position(this.getPosition().getRow()+2, this.getPosition().getColumn()+2);
            let nodeAtPosition5 = $('#cell-' + pos5.getRow() + pos5.getColumn());
            if(nodeAtPosition5.length > 0 && nodeAtPosition5.children().length == 0 &&
            nodeAtPosition1.children().length > 0 &&  nodeAtPosition1.children().attr('class') == 'white'){
                opponents.push(nodeAtPosition1.children());
                possibleMoves.push(pos5);
                
            }
            //move to capture opponent piece to front left
            let pos6 = new Position(this.getPosition().getRow()+2, this.getPosition().getColumn()-2);
            let nodeAtPosition6 = $('#cell-' + pos6.getRow() + pos6.getColumn());
            if(nodeAtPosition6.length > 0 && nodeAtPosition6.children().length == 0 &&
            nodeAtPosition2.children().length > 0 &&  nodeAtPosition2.children().attr('class') == 'white'){
                opponents.push(nodeAtPosition2.children());
                possibleMoves.push(pos6);
            }    
        }
        opponentPiece = opponents;
        return possibleMoves;
    }


    hasMoreOpponetPiecesToCapture(){

        
        
        if( this.getColor() == 'black' ){
            //black piece
            //move to capture opponent piece to back right
            let pos3 = new Position(this.getPosition().getRow()-2, this.getPosition().getColumn()+2);
            let nodeAtPosition3 = $('#cell-' + pos3.getRow() + pos3.getColumn());
            let nodeOpponentAtPosition3 = $('#cell-' + (this.getPosition().getRow()-1) + (this.getPosition().getColumn()+1));
            if(nodeAtPosition3.length > 0 && nodeAtPosition3.children().length == 0 &&
            nodeOpponentAtPosition3.children().length > 0 &&  nodeOpponentAtPosition3.children().attr('class') == 'white'){
                opponentPiece.push(nodeOpponentAtPosition3.children());
                this.possibleMoves.push(pos3);
            }
            //move to capture opponent piece to back left
            let pos4 = new Position(this.getPosition().getRow()-2, this.getPosition().getColumn()-2);
            let nodeAtPosition4 = $('#cell-' + pos4.getRow() + pos4.getColumn());
            let nodeOpponentAtPosition4 = $('#cell-' + (this.getPosition().getRow()-1) + (this.getPosition().getColumn()-1));
            if(nodeAtPosition4.length > 0 && nodeAtPosition4.children().length == 0 &&
            nodeOpponentAtPosition4.children().length > 0 &&  nodeOpponentAtPosition4.children().attr('class') == 'white'){
                opponentPiece.push(nodeOpponentAtPosition4.children());
                this.possibleMoves.push(pos4);
            }
            //move to capture opponent piece to front right
            let pos5 = new Position(this.getPosition().getRow()+2, this.getPosition().getColumn()+2);
            let nodeAtPosition5 = $('#cell-' + pos5.getRow() + pos5.getColumn());
            let nodeOpponentAtPosition5 = $('#cell-' + (this.getPosition().getRow()+1) + (this.getPosition().getColumn()+1));
            if(nodeAtPosition5.length > 0 && nodeAtPosition5.children().length == 0 &&
            nodeOpponentAtPosition5.children().length > 0 &&  nodeOpponentAtPosition5.children().attr('class') == 'white'){
                opponentPiece.push(nodeOpponentAtPosition5.children());
                this.possibleMoves.push(pos5);
                
            }
            //move to capture opponent piece to front left
            let pos6 = new Position(this.getPosition().getRow()+2, this.getPosition().getColumn()-2);
            let nodeAtPosition6 = $('#cell-' + pos6.getRow() + pos6.getColumn());
            let nodeOpponentAtPosition6 = $('#cell-' + (this.getPosition().getRow()+1) + (this.getPosition().getColumn()-1));
            if(nodeAtPosition6.length > 0 && nodeAtPosition6.children().length == 0 &&
            nodeOpponentAtPosition6.children().length > 0 &&  nodeOpponentAtPosition6.children().attr('class') == 'white'){
                opponentPiece.push(nodeOpponentAtPosition6.children());
                this.possibleMoves.push(pos6);
            }   
        }else{
            //white piece
            //move to capture opponent piece to back right
            let pos3 = new Position(this.getPosition().getRow()+2, this.getPosition().getColumn()+2);
            let nodeAtPosition3 = $('#cell-' + pos3.getRow() + pos3.getColumn());
            let nodeOpponentAtPosition3 = $('#cell-' + (this.getPosition().getRow()+1) + (this.getPosition().getColumn()+1));
            if(nodeAtPosition3.length > 0 && nodeAtPosition3.children().length == 0 &&
            nodeOpponentAtPosition3.children().length > 0 &&  nodeOpponentAtPosition3.children().attr('class') == 'black'){
                opponentPiece.push(nodeOpponentAtPosition3.children());
                this.possibleMoves.push(pos3);
            }
            //move to capture opponent piece to back left
            let pos4 = new Position(this.getPosition().getRow()+2, this.getPosition().getColumn()-2);
            let nodeAtPosition4 = $('#cell-' + pos4.getRow() + pos4.getColumn());
            let nodeOpponentAtPosition4 = $('#cell-' + (this.getPosition().getRow()+1) + (this.getPosition().getColumn()-1));
            if(nodeAtPosition4.length > 0 && nodeAtPosition4.children().length == 0 &&
            nodeOpponentAtPosition4.children().length > 0 &&  nodeOpponentAtPosition4.children().attr('class') == 'black'){
                opponentPiece.push(nodeOpponentAtPosition4.children());
                this.possibleMoves.push(pos4);
            }
            //move to capture opponent piece to front right
            let pos5 = new Position(this.getPosition().getRow()-2, this.getPosition().getColumn()+2);
            let nodeAtPosition5 = $('#cell-' + pos5.getRow() + pos5.getColumn());
            let nodeOpponentAtPosition5 = $('#cell-' + (this.getPosition().getRow()-1) + (this.getPosition().getColumn()+1));
            if(nodeAtPosition5.length > 0 && nodeAtPosition5.children().length == 0 &&
            nodeOpponentAtPosition5.children().length > 0 &&  nodeOpponentAtPosition5.children().attr('class') == 'black'){
                opponentPiece.push(nodeOpponentAtPosition5.children());
                this.possibleMoves.push(pos5);
                
            }
            //move to capture opponent piece to front left
            let pos6 = new Position(this.getPosition().getRow()-2, this.getPosition().getColumn()-2);
            let nodeAtPosition6 = $('#cell-' + pos6.getRow() + pos6.getColumn());
            let nodeOpponentAtPosition6 = $('#cell-' + (this.getPosition().getRow()-1) + (this.getPosition().getColumn()-1));
            if(nodeAtPosition6.length > 0 && nodeAtPosition6.children().length == 0 &&
            nodeOpponentAtPosition6.children().length > 0 &&  nodeOpponentAtPosition6.children().attr('class') == 'black'){
                opponentPiece.push(nodeOpponentAtPosition6.children());
                this.possibleMoves.push(pos6);
            }   
        }

        if( opponentPiece.length > 0 ){
            return true;
        }else{
            return false;
        }
        
    }

    addClickEventHandlerAtFreePositions(){
        board.removeClickEventHandlerAtAllBlackCells();
       for(let i = 0; i <this.possibleMoves.length; i++){
            let node = $('#cell-' + this.possibleMoves[i].getRow() + this.possibleMoves[i].getColumn());
            node.on('click', ()=>{              

                this.move(this.possibleMoves[i]);
              
                if(opponentPiece[i] != null){
                  
                    this.capturePiece(opponentPiece[i]);
                    
                    if(this.hasMoreOpponetPiecesToCapture()){
                        //tem mais peça para comer
                    }else{
                        //não tem mais peça para comer
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
                //verifica se a peça ficou em posição de dama
                if(this.getColor() == 'white' && this.getPosition().getRow() == 1 && !(this instanceof Dama)){
                  //transforma peça em Dama
                    let dama = new Dama(this);
                  

                }

                if(this.getColor() == 'black' && this.getPosition().getRow() == 8 && !(this instanceof Dama)){
                    //transforma peça em dama
                    let dama = new Dama(this);
                   
                }
                
                
                
            });
            node.css('cursor', 'pointer');        
        }
       
    }

    move(posTarget){
       let cellTarget = this.getCellfromPosition(posTarget);
       cellTarget.append(this.getNode());
       this.setPosition(posTarget);    
    }
    
    getCellfromPosition(position){
        if(position.getRow() > 8 || position.getRow() < 1){
            return null;
        }

        if(position.getColumn() > 8 || position.getColumn() < 1){
            return null;
        }

        return $('#cell-'+ position.getRow()+ position.getColumn());
    }

    getPieceFromPosition(position){
        let cell = this.getCellfromPosition(position);
        if(cell.children().length > 0 ){
            let cellPiece = cell.children();
            if( cellPiece.attr('class') == 'black' ){
                for(let i = 0; i < board.blackPieces.length; i++){
                    if( board.blackPieces[i].getPosition().getRow() == position.getRow() && board.blackPieces[i].getPosition().getColumn() == position.getColumn() ){
                        return board.blackPieces[i];
                    }
                }
            }else{
                for(let i = 0; i < board.whitePieces.length; i++){
                    if( board.whitePieces[i].getPosition().getRow() == position.getRow() && board.whitePieces[i].getPosition().getColumn() == position.getColumn() ){
                        return board.whitePieces[i];
                    }
                } 
            }
        }
        
        return null;
    }

    capturePiece(opponent){
       let row = opponent.parent().attr('id').substr(5,1);
       let column = opponent.parent().attr('id').substr(6,1);
       let pos = new Position(row, column);
    
        if( opponent.attr('class') == 'white' ){
         
            for(let i = 0; i < board.whitePieces.length; i++){
                if(board.whitePieces[i].getPosition().getRow() == pos.getRow() && 
                board.whitePieces[i].getPosition().getColumn() == pos.getColumn() ){                    
                    board.whitePieces[i].getNode().remove();
                    board.whitePieces.splice(i,1);        
                    opponentPiece = [];

                }
            }
        }else if( opponent.attr('class') == 'black'){
          
            for(let i = 0; i < board.blackPieces.length; i++){
                if(board.blackPieces[i].getPosition().getRow() == pos.getRow() && 
                board.blackPieces[i].getPosition().getColumn() == pos.getColumn() ){                    
                    board.blackPieces[i].getNode().remove();
                    board.blackPieces.splice(i,1);             
                    opponentPiece = [];
                }
            }
        }



    }
    

}


