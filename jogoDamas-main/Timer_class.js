class Timer{
   
    
    constructor(m,s1, s2){
        this.segundo1 = s1;
        this.segundo2 = s2;
        this.minuto = m;
        this.timer= null;
    }

    start(){
        
       this.timer= setInterval(()=>{
            this.segundo2++;
            if(this.segundo2 == 10 ){
                this.segundo2 = 0;
                this.segundo1++;             
            }

            if( this.segundo1 == 6){
                this.minuto++;
                this.segundo1 = 0;
            }
            if( this.minuto == 1){
                this.stop();
                this.reset();
                this.start();
                if(turn == 'white'){
                    turn = 'black';
                    addClickEventOnThePieces();
                }else{
                    turn = 'white';
                    addClickEventOnThePieces();
                }
            }
            
            $("#timer").text(this.minuto + ":" + this.segundo1 + this.segundo2);
           
        }
    ,1000);
    
    }

    stop(){
        clearInterval(this.timer);
    }

    reset(){
        this.minuto = 0;
        this.segundo1 = 0;
        this.segundo2 = 0;
        $("#timer").text(this.minuto + ":" + this.segundo1 + this.segundo2);
    }
}