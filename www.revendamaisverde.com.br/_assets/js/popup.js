function Popfechar(obj2){

	if(document.getElementById){
	var cd = document.getElementById(obj2);
		if(cd.style.display != "block"){ 
		
			cd.style.display = "none";
		}else{
			cd.style.display = "none";
		}
	}
}



N = (document.all) ? 0 : 1;

var ob;

var over = false;



function MD(e) {

if (over)

{

if (N) {

ob = document.getElementById("popup");

X=e.layerX;

Y=e.layerY;

return false;

}

else {

ob = document.getElementById("popup");

ob = ob.style;

X=event.offsetX;

Y=event.offsetY;





}

}

}



function MM(e) {

if (ob) {

if (N) {

ob.style.top = e.pageY-Y;

ob.style.left = e.pageX-X;



}

else {

ob.pixelLeft = event.clientX-X + document.body.scrollLeft;

ob.pixelTop = event.clientY-Y + document.body.scrollTop;

return false;

      }

   }

}



function MU() {

ob = null;

}



if (N) {

document.captureEvents(Event.MOUSEDOWN | Event.MOUSEMOVE | Event.MOUSEUP);

}



document.onmousedown = MD;

document.onmousemove = MM;

document.onmouseup = MU;