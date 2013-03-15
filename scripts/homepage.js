var i = 0;
function startbar(){
	showbar=setInterval("setbar()",100);    
}
function setbar(){
    i+=5;
    if(i>=100){
        clearInterval(showbar);    
    }
    document.getElementById("bar").style.width=i+"%";
    document.getElementById("bar").innerHTML=i+"%";
}






