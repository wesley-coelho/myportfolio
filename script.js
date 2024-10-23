

function animaTopicOver(obj){
    obj.style.cursor = "pointer";
    for(let i = 0; i < obj.childNodes.length; i++){
        if( obj.childNodes[i] instanceof HTMLDivElement ){
            obj.childNodes[i].style.width = "50px";
        }
        if( obj.childNodes[i] instanceof HTMLParagraphElement ){
            obj.childNodes[i].style.opacity = "1.0";
        }
    }
 
    
}

function animaTopicLeave(obj){
    obj.style.cursor = "default";
    for(let i = 0; i < obj.childNodes.length; i++){
        if( obj.childNodes[i] instanceof HTMLDivElement ){
            obj.childNodes[i].style.width = "30px";
        }
        if( obj.childNodes[i] instanceof HTMLParagraphElement ){
            obj.childNodes[i].style.opacity = "0.5";
        }
    }
 }