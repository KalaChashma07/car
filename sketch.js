var hball,database;
var Position

function setup(){
    createCanvas(500,500);
    database = firebase.database()
    console.log(database)
 hball = createSprite(250,250,10,10);
 hball.shapeColor = "red";
 var hballPosition = database.ref('Ball/Position')
 hballPosition.on("value",readPosition,showErrors)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x,y){
    database.ref('Ball/Position').set({
        'x':Position.x+x,
        'y':Position.y+y,
    })
}
function readPosition(data){
Position = data.val()
console.log(Position.x)
hball.x = Position.x
hball.y = Position.y

}
function showErrors(){
    console.log("error in wrirting to the databse")
}