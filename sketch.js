var bg;
var bird;
var pipes=[];
function setup() {
    bg=loadImage("./Assets/background.jpg");
    var w = window.innerWidth;
var h = window.innerHeight;
  createCanvas(w,h);

   bird=new Bird();
    pipes.push(new Pipe());
}
var isStart=true;
var x;
function draw() {
if(isStart==true)
{
   
    fill(255);
     x = document.getElementById("abc");
    x.style.display = "block";
    return;
}
x.style.display = "none";
 background(bg);

    
     for(var i=pipes.length-1;i>=0;i--) {
            pipes[i].show();
            pipes[i].update();
            
            if(pipes[i].hits(bird)){
                console.log("HIT");
                isStart=true;
                pipes=[];
                setup();
                 
            }
               
            if(pipes[i].offscreen()){
                pipes.splice(i,1);
            }
        }
    
 bird.update();
    bird.show();   
    
    if(frameCount% 100==0){
     pipes.push(new Pipe());   
    }
  
    
   
}
function onbuttonpressed(){
    isStart=false;
    console.log("hello");
}
function keyPressed()
{
 if(key==' '){
    bird.up();
 }   
    
   
}