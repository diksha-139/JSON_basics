//javascript object notation
var student = {
  name : "Hadia",
  class: 8,
  roll_no: 21,
  marks: [30,39,36,37]

};

function setup() {

  createCanvas(400, 400);
  console.log(student['class']);
  console.log(student.name);
console.log(student.marks[2]);
}
var ball={
  x:200,
  y:300,
  r:140,
  xspeed:0,
  yspeed:0,
  color:["green","pink","cyan"]
}

function draw() {
  background(220);

fill(ball.color[1]);
circle(ball.x,ball.y,ball.r)


}