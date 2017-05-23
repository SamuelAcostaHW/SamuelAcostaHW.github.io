var resize = false;
var song;
//var Slider;


function setup() {
	createCanvas(1200, 700);
	//slider = createSlider(10, 100, 20);
	save('myCanvas', 'jpg');
	brushSize = 20
	brushColor= 'black'
	song = loadSound("1.mp3");
	song.setVolume(0.5);
	
}

function loaded(){
	song.play();
}

function draw() {
  //background(237, 34, 93);
  cursor(CROSS);
  fill('white');
  stroke(1);
  rect(900, -1, 300, 300);
  rect(0, -1, 900, 210);
  fill('black');
  textSize(20);
	text("Created by Samuel Acosta", 10, 20);
	noStroke();
	text("Hello this is my drawing application created with P5JS, here are a couple tips for you :) have fun!", 10, 50);
	text("RIGHT Click = Draw | Scroll Down/Up = Random Brush Color",10, 80);
	text("[ = Degcrease Brush Size | ] = Increase Brush Size",10, 110);
	text("e = Erasor | b= Brush | c = Clear Screen",10, 140);
	text("Brush Colors 1 = Red | 2 = Blue | 3 = Green | 4 = Yellow | 5 = Purple | 6 = Orange",10, 170);
	text("7 = Brown | 8 = Pink | 9 = Cyan | 0 = Black ",10, 200); 
  fill('white');
  noStroke();
  ellipse(1150, 50, brushSize, brushSize);
  fill(brushColor);
  

  if(brushSize <= 309){
  ellipse(1050, 150, brushSize, brushSize);
  }
  else{
  	ellipse(1050, 150, 300, 300)
  }


  //ellipse(mouseX, mouseY, brushSize, brushSize);
  	if (mouseIsPressed) {
    	if (mouseButton == LEFT){
      	ellipse(mouseX, mouseY, brushSize, brushSize);

    
  		}
	}
	
}

function keyPressed(){
	if (keyCode == SHIFT){
		resize = !resize;
		console.log(resize);
	}
}

function keyTyped(){
	// ] Increse brush size
	if(key === '1'){
		brushColor = 'red'
	}
	if(key === '2'){
		brushColor = 'blue'
	}
	if(key === '3'){
		brushColor = 'green'
	}
	if(key === '4'){
		brushColor = 'yellow'
	}
	if(key === '5'){
		brushColor = 'purple'	
	}
	if(key === '6'){
		brushColor = 'orange'
	}
	if(key === '7'){
		brushColor = 'brown'
	}
	if(key === '8'){
		brushColor = 'pink'
	}
	if(key === '9'){
		brushColor = 'cyan'
	}
	if(key === '0'){
		brushColor = 'black'
	}
	if (key === ']'){
		if (brushSize < 300){
			brushSize +=10;
		}
		else{
			brushSize = 300
		}
		console.log(brushSize);
	}
	if (key === '['){
		// [ decrease brush size
		if (brushSize > 10) {
			brushSize -=10;
		}
		else{
			brushSize = 10
		}
		console.log(brushSize)
	}
	if(key === 'c'){
		//whipes out the page
		background(255)
		console.log('clear');
	}

	if(key === 'e'){
		brushColor = 'white'
		fill(0)
	}
	if(key === 'b') {
		brushColor = 'black'
		fill(255)
	}
}
function mouseWheel(){
	//if mouse wheel is scroll you will change colors
	if (resize){
		brushSize +=1;
	}
	
	else{
		brushColor = color(random(0, 255), random(0, 255), random(0, 255));
	}
}

//function preload() {
  //mySound = loadSound('assets/1.mp3');
//}