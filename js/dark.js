//Chnage theme of the page

document.getElementById('switch').onclick = function() {

	var text = document.getElementById("theme").style.backgroundColor = "black"; //BACKGROUND COLOR
	//var text1 = document.getElementById("theme").style.color = "white"; // TEXT COLOR
	var text2 = document.getElementsByClassName("MainPart").style.color = "white";;

  if (document.getElementById('theme').href == "dark.css") {
  	
    document.getElementById('theme').href = "light.css";
  } else {
    document.getElementById('theme').href = "dark.css";
  }



};