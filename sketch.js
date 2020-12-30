const Engine=Matter.Engine;
const World= Matter.World;
const Bodies=Matter.Bodies;
var thunder;
var engine,world, umb,umbrella;
var maxDrops=100;
var drops=[];
var drop,thun,thun2,thun3,thun4;
var visibility=250;
var vis=visibility-5;
function preload(){
    umb=loadImage("walking_1.png");
    thun=loadImage("1.png");
thun2=loadImage("2.png");
thun3=loadImage("3.png");
thun4=loadImage("4.png");
}

function setup(){
   createCanvas(1900,800);
   background("black");
    engine=Engine.create();
    world=engine.world;
    umbrella= new Umbrella(800,500,500);
      thunder=createSprite(400,300,100,100);
   thunder.lifetime=12;
    thunder.addImage("thnder",thun);
    
    // for(var k=0;k<maxDrops;k++){
    //     drops.push(new Drop(400,400,200,200));
    // }
   
     
    

           
}

function draw(){
    umbrella.display();
    // push();
  if(thunder.lifetime===0){
      thunder.visible=false;
  }
    // tint(255,vis);
    // pop();
    // for(var i=0;i<drops.length;i++){    
    //     drops[i].display();
    // }
   
    console.log(thunder.lifetime)
    drawSprites();
  
  
}
function thunderblast()  {
    
   
  

//console.log(thunder.lifeTime)



   
   
    
   
   
   
   
}


    
       
       
    
    

