//Create variables here
var dog, happyDog; 
var database;
var foodS, foodStock;
var x;


function preload()
{
    //load images here
    dog= loadImage("images/Dog.png");
    happydog= loadImage("images/happydog.png");

}

function setup() {
	createCanvas(500, 500);
    dog = createSprite(100,200);
    dog.addImage("Dog",dog);
    database=firebase.database();
    console.log(database);
    foodStock= database.ref('Food');
    foodStock.on("value", readStock);


}



function draw() {  
background(46,139,87);
x=foodStock;
if(keyDown(UP_ARROW)){
  writeStock(x);
  happydog = createSprite(100,290);
  happydog.addImage(happydog);
 
}
  drawSprites();
  //add styles here
textSize(20);
Fill(red);
stroke(blue);
text("food stock is :", foodStock);
}


function readStock(data){
  foodStock= data.val();
}


function writeStock(x){
  if (x<=0 ) {
    x=0;
  }
  else{
    x=x-1;
  }

  database.ref('/').update({
    foodStock:x
  })
}

