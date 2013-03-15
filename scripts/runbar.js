var showbar = new Array();


window.onload=init;

function init(){
	startbar("bar1");
	var dts = document.getElementsByTagName("dt");
	for(var i = 0; i < dts.length; i++){
		dts[i].addEventListener("click", function(){startbar(this.getAttribute("id"));}, false);
	}
}

function startbar(className){
	var bars = document.getElementsByClassName(className);
	var barobj = new Array();
	for(var i = 0; i < bars.length; i++){
		var value = bars[i].getAttribute("value");
		barobj[i] = new setBar(bars[i], value, i);
		barobj[i].begin();
	}

}

function setBar(bar, value, i){
	this.i = i;
	this.count = 0;
	this.bar = bar;
	this.value = value;
	this.showbar;
	this.begin = function(){control(this.bar, this.value, this.count, this.i)};
}

function control(bar, value, count,i){
    showbar[i] = setInterval(function(){start(bar, value, count += 5,i);}, 40);
}

function start(bar, value, count,i){
	var width = bar.width;
	var height = bar.height;
	if(count >= value){
		clearInterval(showbar[i]);    
	}
	var ctx = bar.getContext("2d");
	var grd = ctx.createLinearGradient(0,0,width,0);
	var total = width * count / 100;
	grd.addColorStop(0, "#909EF5"); 
	grd.addColorStop(1, "white"); 
	ctx.clearRect(0, 0, width, height)
	ctx.fillStyle=grd;
	ctx.fillRect(0, 0, total, height);
	ctx.font="14px scans-serif normal" ;
	ctx.strokeText(count+"%", width/2 - 10, height/2 + 5);
}
