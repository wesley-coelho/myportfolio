

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

 function arrowMove(obj){
    let fatherObj = obj.parentNode;
    for(let i = 0; i < fatherObj.childNodes.length; i++){
        if( i == 1 ){
            fatherObj.childNodes[i].style.color = 'rgba(0, 255, 213, 1)';
         }
        if( i == 3 ){
           fatherObj.childNodes[i].style.paddingLeft = '5px';
        }
     
    }
 }

 function arrowBack(obj){
    let fatherObj = obj.parentNode;
    for(let i = 0; i < fatherObj.childNodes.length; i++){
        if( i == 1 ){
            fatherObj.childNodes[i].style.color = 'rgba(255, 255, 255, 1)';
         }
        if( i == 3 ){
           fatherObj.childNodes[i].style.paddingLeft = '0px';
        }
     
    }
 }



 

 function hideExpandSectionExperience(){
    var element = document.getElementById("section-experience");
    if( element.classList.length == 0 ){
        element.classList.add("hide");
        $("#ExperienceArrowDown").css("display", "inline-block"); 
        $("#ExperienceArrowUp").css("display", "none"); 
    }else{
        element.classList.remove("hide"); 
        $("#ExperienceArrowDown").css("display", "none"); 
        $("#ExperienceArrowUp").css("display", "inline-block");
    }
 }

 function hideExpandSectionProjects(){
    var element = document.getElementById("section-projects");
    if( element.classList.length == 0 ){
        element.classList.add("hide");
        $("#ProjectsArrowDown").css("display", "inline-block"); 
        $("#ProjectsArrowUp").css("display", "none"); 
    }else{
        element.classList.remove("hide"); 
        $("#ProjectsArrowDown").css("display", "none"); 
        $("#ProjectsArrowUp").css("display", "inline-block");
    }
 }

 
 function mouse(evt){
    let bg = document.getElementById("bg");
    bg.style.backgroundImage = "radial-gradient(circle 700px  at " + evt.pageX+"px " + evt.pageY+"px, #11244d,#0F172A,#0F172A)";

 }

 var bg = document.getElementById("bg");
 bg.addEventListener('mousemove', mouse);

