/*
 * Hello. 2 points.
 *
 * Write a function that draws "Hello, World!" on the canvas. You should
 * begin drawing at [10, 50], relative to the canvas, and your text should
 * be a 48px sans-serif font. Make sure the canvas is clear before drawing!
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Hello" button, your output should match that of the example.
 */

function sayHello() {

  let hello = document.getElementById('canvas1').getContext('2d');
  hello.clearRect(0, 0, canvas1.width, canvas1.height);
  hello.font = "48px sans-serif";
  hello.strokeText('Hello, World!', 10, 50);
  
}

/*
 * Rectangle. 3 points.
 *
 * Write a function that draws a rectangle on the canvas. You should prompt
 * the user for the height and width. You should also prompt the user for the
 * X- and Y-coordinates of the topleft corner of the rectangle.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Rectangle" button, your output should match that of the example.
 *
 * Certain values, such as heights and widths that are logically too small or
 * practically too large, should be prohibited. Check the example to see what
 * your code should do in these instances.
 *
 * Here is a list of prohibited values:
 *     - Width values less than 1
 *     - Height values less than 1
 *     - X- or Y- coordinates less than 5
 *     - Combinations of heights/widths and X-/Y-coordinates that would make
 *       it impossible to draw the rectangle within the bounds of the canvas
 */

function drawRectangle() {
  
  let width = prompt("Width:");
  let height = prompt("Height:");
  let x = prompt("X:");
  let y = prompt("Y:");

  if (Number.isInteger(Number(width)) == false || Number.isInteger(Number(height)) == false || Number.isInteger(Number(x)) == false || Number.isInteger(Number(y)) == false) {
    alert("Invalid input. Please try again and make sure all inputs are numbers.")
  }
  else if (width<1) {
    alert("Width is too small. Please try again.");
  }
  else if (width>1024) {
    alert("Width is too large. Please try again.");
  }
  else if (height>512) {
    alert("Height is too large. Please try again.");
  }
  else if (height<1) {
    alert("Height is too small. Please try again.");
  }
  else if (x<5) {
    alert("X is too small. Please try again.");
  }
  else if (y<5) {
    alert("Y is too small. Please try again.");
  }
  else if ((Number(width) + Number(x))>1024) {
    alert("X is too large. Please try again.");
  }
  else if ((Number(height) + Number(y))>512) {
    alert("Y is too large. Please try again.");
  } else {

  let ctx = document.getElementById('canvas2').getContext('2d');
  ctx.clearRect(0,0,1024,512);
  ctx.strokeRect(x,y,width,height);
}
}

/*
 * Color. 3 points.
 *
 * Write a function that draws a rectangle on the canvas. By default, the
 * rectangle will have a height and width of 50px and 100px, respectively. It
 * will be positioned at [10, 10] on the canvas. You'll need to prompt the
 * user to enter a color for the rectangle.
 *
 * Support the following colors:
 *     - black
 *     - blue
 *     - green
 *     - orange
 *     - purple
 *     - red
 *     - yellow
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Color" button, your output should match that of the example.
 *
 * Check the example to see what your code should do if the user enters an
 * unsupported color.
 */

function drawColoredRectangle() {
  const colored = document.getElementById('canvas3');
  const ctx = colored.getContext('2d');
  
  ctx.clearRect(0, 0, canvas3.width, canvas3.height)
  
  let xcor=Number(10)
  let ycor=Number(10)
  let h=Number(50)
  let w=Number(100)
  let answer = prompt('Color:')
  let backup = ans
  switch(ans){
  case answer='red':
    ctx.fillStyle = 'red';
    ctx.fillRect(xcor, ycor, w, h);
    break
  case answer='blue':
    ctx.fillStyle = 'blue';
    ctx.fillRect(xcor, ycor, w, h);
    break
  case answer='purple':
    ctx.fillStyle = 'purple';
    ctx.fillRect(xcor, ycor, w, h);
    break
  case answer='green':
    ctx.fillStyle = 'green';
    ctx.fillRect(xcor, ycor, w, h);
    break
  case answer='black':
    ctx.fillStyle = 'black';
    ctx.fillRect(xcor, ycor, w, h);
    break
  case answer='orange':
    ctx.fillStyle = 'orange';
    ctx.fillRect(xcor, ycor, w, h);
    break
  case answer='yellow':
    ctx.fillStyle = 'yellow';
    ctx.fillRect(xcor, ycor, w, h);
    break
  default:
    alert(backup + " is not a unsupported color.")
    break
  }
}

/*
 * Triangle. 5 points.
 *
 * Write a function that draws a right triangle on the canvas. The triangle
 * should be outlined only, not filled. You'll need to prompt the user for the
 * lengths of each of the sides. By default, position your triangle so that
 * its leftmost and topmost points have X- and Y-coordinates of 10.
 *
 * When drawing your right triangles, the left side shall be designated as the
 * first side and will be smallest of the three side lengths. The bottom side
 * shall be designated as the second side and will be second smallest of the
 * three side lengths. The hypotenuse shall be designated as the third side
 * and will be the largest of the three side lengths.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Triangle" button, your output should match that of the example.
 *
 * Certain values, such as side lengths that make it impossible to create a
 * valid right triangle, should be prohibited. Check the example to see what
 * your code should do in these instances.
 *
 * Here is a list of prohibited values:
 *     - Combinations of side lengths that would make it impossible to draw
 *       a valid triangle
 *     - Combinations of side lengths that would make it impossible to draw
 *       the triangle within the bounds of the canvas
 */

function drawTriangle() {
  
  let ctx = document.getElementById('canvas4').getContext('2d');
  let side1 = prompt("Side 1:");
  let side2 = prompt("Side 2:");
  let side3 = prompt("Side 3:");
  Number(side1)
  Number(side2)
  Number(side3)
  if ((side1**2) + (side2**2) != (side3**2)){
    alert("Invalid right triangle.")
  } 

  ctx.clearRect(0, 0, canvas4.width, canvas4.height)
  ctx.beginPath();
  ctx.moveTo(10, 10);
  ctx.lineTo(10, 10+side1);
  ctx.lineTo(10+side2, 10+side1)
  ctx.lineTo(10, 10);
  ctx.stroke();
}

/*
 * Smile. 7 points.
 *
 * Write a function that draws a smiley face on the canvas. The head should
 * be a perfect circle with a radius specified by the user. The eyes should
 * also be perfect circles with radii that are 10% of that of the head. The
 * radius of the mouth should be 70% of that of the head. A nose is not
 * required, and the position of the eyes and mouth are up to you (provided)
 * they are on the face.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Smile" button, your output should match that of the example.
 *
 * Certain values, such as radii that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawSmileyFace() {
  let radius = prompt("Enter radius:");
  Number(radius)
  let eyes = (radius * 0.1);
  let mouth = (radius * 0.7);
  let end = Math.PI*2

  if (radius>250) {
    alert("Radius too large!");
  }
  else if (radius<1) {
    alert("Radius too small!");
  }
  else {
  let ctx = document.getElementById('canvas5').getContext('2d');
  ctx.clearRect(0,0,1024,512);
  ctx.beginPath();
  ctx.arc(radius, radius, radius, 0, end)
  ctx.stroke()
  ctx.beginPath()
  ctx.arc(radius, radius, mouth, 0, end/2); 
  ctx.stroke();
  ctx.beginPath()
  ctx.arc(radius * 1.4, radius * 0.5, eyes, 0, end);
  ctx.stroke();
  ctx.beginPath()
  ctx.arc(radius * 0.6, radius * 0.5, eyes, 0, end);
  ctx.stroke();
 }
}

/*
 * Star. 9 points.
 *
 * Write a function that draws a five-point star on the canvas. Prompt the
 * user for the outer radius (i.e., a circle that would connect each of the
 * star's outer points) and inner radius (i.e., a circle that would connect
 * each of the star's inner points). The center of the star should be placed
 * at [125, 125].
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Star" button, your output should match that of the example.
 *
 * Certain values, such as radii that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawStar() {

  let canvas = document.getElementById("canvas6");
  let star = canvas.getContext("2d");
  star.clearRect(0, 0, canvas6.width, canvas6.height);

  let oRadius;
  let iRadius;
  let degrees = 0;

  do {
    oRadius = prompt("Please input an outer radius.");
    Number(oRadius);
  } while (oRadius < 0 || isNaN(oRadius) == true)

  do {
    iRadius = prompt("Enter the inner radius.");
    Number(iRadius);
  } while (iRadius < 0 || iRadius > oRadius || isNaN(iRadius) == true)

  star.beginPath();
  star.moveTo(125,125-oRadius);
    for (let i=0; i<=5; i++){
      star.lineTo(125 + Math.round((Math.cos(Math.PI * (degrees - 90) / 180) * oRadius)), 125 + Math.round((Math.sin(Math.PI * (degrees - 90) / 180) * oRadius)));
      
      degrees = (degrees + 36);
      
      star.lineTo(125 + Math.round((Math.cos(Math.PI * (degrees - 90) / 180) * iRadius)), 125 + Math.round((Math.sin(Math.PI * (degrees - 90) / 180) * iRadius)));
      
      degrees = (degrees + 36);
    }
    star.stroke();
    star.closePath();

}

/*
 * Stop Sign. 7 points.
 *
 * Write a function that draws a stop sign. The stop sign should be outlined
 * in black, but filled red. At the center of the stop sign, the same height
 * as the length of the sides, should be the word STOP (all capitals, white).
 * Each side length should be 80px.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Stop Sign" button, your output should match that of the example.
 *
 * The leftmost and topmost sides should have X- and Y-coordinates of 10.
 */

function drawStopSign() {    
  
  let ctx = document.getElementById('canvas7').getContext("2d");
  
  let var1 = 80;
  let cir = Number((80/Math.sqrt(2)).toFixed(0));
  let x = 70;
  let y = 10;
  
  ctx.beginPath();
  ctx.moveTo(x , y);
  ctx.lineTo((x + var1) , y);
  ctx.lineTo((x + var1 + cir) , (y + cir));
  ctx.lineTo((x + var1 + cir) , (y + var1 + cir));
  ctx.lineTo((x+ var1) , (y + var1 + cir + cir));
  ctx.lineTo(x , (y + var1 + cir + cir));
  ctx.lineTo((x - cir) , (y + var1 + cir));
  ctx.lineTo((x - cir) , (y + cir));
  ctx.lineTo(x , y);
  ctx.fillStyle="#f00";
  ctx.fill();
  ctx.closePath();
  ctx.fillStyle="#ffffff";
  ctx.font="80px sans-serif";
  ctx.fillText("STOP", 22, 133);
}

/*
 * Pyramid. 7 points.
 *
 * Write a function that draws a block pyramid, where the user specifies the
 * side length of each block. By default, we'll draw a pyramid with a base
 * of five blocks. Give the leftmost point of the pyramid an X-coordinates of
 * 10. Give the bottom of the pyramid a Y-coordinate of 10 less than the
 * height of the canvas.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Pyramid" button, your output should match that of the example.
 *
 * Certain values, such as lengths that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawPyramid() {
  let canvas = document.getElementById('canvas8');
  let ctx = canvas.getContext('2d');
  
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  let sideLen = prompt("Input side length");
  Number(sideLen)
  let x = 10;
  let y = (canvas.height - 10);
  let i = 0;
  let line = 1;
  
  while(i<5){
    for(let d = 0 + line; d <= 5; d++){
      ctx.strokeRect(x, y - sideLen, sideLen, sideLen);
      x = (x + sideLen);
    }
    y -= sideLen;
    x = (10 + (sideLen / 2) * line);
    line++;
    i++;
  }

}

/*
 * House. 7 points.
 *
 * Write a function that draws a two-story house. The house should have a
 * rectangular frame, a front door, two square windows on the first floor,
 * two square windows on the second floor, and a triangular roof. Your house
 * and front door should be painted a solid color of the user's choice (these
 * colors should be different). The windows should be light blue, and the roof
 * should be gray. Give the leftmost point of your house an X-coordinate of
 * 150, and the bottom of your house a Y-coordinate of 10 less than the
 * height of the canvas.
 *
 * Support the following front door and/or house colors:
 *     - blue
 *     - brown
 *     - green
 *     - orange
 *     - purple
 *     - red
 *     - yellow
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "House" button, your output should match that of the example.
 *
 * Check the example to see what your code should do if the user enters an
 * unsupported color.
 */

function drawHouse() {
  let canvas = document.getElementById('canvas9');
  let ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  while(true){
  let doorColor=prompt("Front door color:")
  let houseColor=prompt("House color:")
  if((doorColor=="brown" || doorColor=="blue" || doorColor=="green" || doorColor=="orange" || doorColor=="purple" || doorColor=="red" || doorColor=="yellow")
  && (houseColor=="brown" || houseColor=="blue" || houseColor=="green" || houseColor=="orange" || houseColor=="purple" || houseColor=="red" || houseColor=="yellow")) {
    break;
  }
  else{
      alert("Some of your colors are invalid. Please try again.")
  }
}
let x=150;
let lengthHouse=576;
let heightHouse=400;
let y=canvas.height-heightHouse-10;
ctx.beginPath();

ctx.fillStyle=houseColor;
ctx.fillRect(x,y,lengthHouse,heightHouse);

ctx.fillStyle=doorColor;
ctx.fillRect(x+(lengthHouse/2)-30,y+300,60,100);
ctx.strokeRect(x+(lengthHouse/2)-30,y+300,60,100);
ctx.stroke();


ctx.fillStyle="gray";
ctx.moveTo(x,y);
ctx.lineTo(x+286,150);
ctx.lineTo(x+lengthHouse,y);
ctx.lineTo(x,y);
ctx.fill();

ctx.fillStyle="#ADD8E6";
ctx.fillRect(300,y+100, 50, 50);
ctx.fillRect(526,y+100, 50, 50);
ctx.fillRect(300,y+200, 50, 50);
ctx.fillRect(526,y+200, 50, 50);
ctx.closePath();

ctx.beginPath();
ctx.fillStyle='black';
ctx.arc(450, 700, 6, 0, Math.PI*2);
ctx.fill();
ctx.closePath()
}
