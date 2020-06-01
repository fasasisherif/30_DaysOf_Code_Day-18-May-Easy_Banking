var ham = document.getElementsByClassName("ham");
var myham = document.getElementsByClassName("myham");
var drop = document.getElementsByClassName("drop");


ham[0].addEventListener ("click",myfunc)


var a = 0
function myfunc(){
drop[0]	.style.height ="365px"	
drop[0]	.style.width ="85%"
myham[0].src = "icon-close.svg"
a++;

if (a%2 === 0)	{
drop[0]	.style.height ="0px"	
drop[0]	.style.width ="85%"	
myham[0].src = "icon-hamburger.svg"	
		}	
	}

