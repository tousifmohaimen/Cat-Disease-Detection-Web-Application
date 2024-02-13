var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
document.body.appendChild(canvas);
var bkg='#334';
const PI2=Math.PI*2;
var size,s,r,u;
var mouse={tail:[]};
var cat={};
var key={};
var out=false;
var draw=function(){
  size=0.8*Math.min(innerWidth,innerHeight);
  s=size/2;
  r=size/2.2;
  u=size/100;
  canvas.width=size;
  canvas.height=size;
  // background circle
  ctx.fillStyle=bkg;
  ctx.beginPath();
  ctx.arc(s,s,r,0,PI2);
  ctx.fill();
  ctx.fillStyle='#fff';
  ctx.strokeStyle='#fff';
  ctx.lineJoin='round';
  ctx.lineCap='round';
  ctx.lineWidth=size/300;
  // mouse
  if(!mouse.x) {mouse.x=s; mouse.y=s};
  mouse.speed = 0.2*u;
  if(key.up)    mouse.y-=mouse.speed;
  if(key.down)  mouse.y+=mouse.speed;
  if(key.left)  mouse.x-=mouse.speed;
  if(key.right) mouse.x+=mouse.speed;
  mouse.angle=Math.atan2(s-mouse.y,s-mouse.x)+Math.PI;
  mouse.d=Math.sqrt(Math.pow(s-mouse.y,2)+Math.pow(s-mouse.x,2));
  // draw
  ctx.beginPath();
  ctx.arc(mouse.x,mouse.y,size/100,0,PI2);
  ctx.fill();
  ctx.arc(mouse.x+u,mouse.y-u,size/180,0,PI2);
  ctx.fill();
  ctx.arc(mouse.x-u,mouse.y-u,size/180,0,PI2);
  ctx.fill();
  // tail
  if(mouse.tail.length<10){
    mouse.tail.unshift({x:mouse.x,y:mouse.y});
  } else if (!(mouse.x==mouse.tail[0].x &&
               mouse.y==mouse.tail[0].y)){
    mouse.tail.pop();
  }
  ctx.beginPath();
  ctx.moveTo(mouse.x, mouse.y);
  for(var i=0; i<mouse.tail.length; i++){
    ctx.lineTo(mouse.tail[i].x,mouse.tail[i].y);
  }
  ctx.stroke();
  // cat
  if(!cat.x) {cat.x=s-r; cat.y=s};
  cat.speed = 0.0041*u;
  cat.angle=Math.atan2(s-cat.y,s-cat.x)+Math.PI;
  var diff = mouse.angle-cat.angle;
  if(diff>Math.PI) diff-=PI2;
  if(diff<-Math.PI) diff+=PI2;
  if(mouse.d<r) {
    if(diff>cat.speed) cat.angle+=cat.speed;
    if(diff<-cat.speed) cat.angle-=cat.speed;
  }
  cat.x=s+r*Math.cos(cat.angle);
  cat.y=s+r*Math.sin(cat.angle);
  // draw
  ctx.beginPath();
  ctx.arc(cat.x,cat.y,size/50,0,PI2);
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(cat.x,cat.y-u);
  ctx.lineTo(cat.x-1.5*u,cat.y-3*u);
  ctx.lineTo(cat.x-2*u,cat.y);
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(cat.x,cat.y-u);
  ctx.lineTo(cat.x+1.5*u,cat.y-3*u);
  ctx.lineTo(cat.x+2*u,cat.y);
  ctx.fill();
  // collision
  var exit=3*cat.speed;
  if(mouse.d>r) {
    if(diff<exit && diff>-exit) bkg='#f33';
    else bkg='#3f3';
  } else bkg='#334';
  requestAnimationFrame(draw);
};
draw();
// keyboard events
addEventListener('keydown',function(e){
  if(e.key=='w'||e.key=='ArrowUp')    key.up=1;
  if(e.key=='s'||e.key=='ArrowDown')  key.down=1;
  if(e.key=='a'||e.key=='ArrowLeft')  key.left=1;
  if(e.key=='d'||e.key=='ArrowRight') key.right=1;
});
addEventListener('keyup',function(e){
  if(e.key=='w'||e.key=='ArrowUp')    key.up=0;
  if(e.key=='s'||e.key=='ArrowDown')  key.down=0;
  if(e.key=='a'||e.key=='ArrowLeft')  key.left=0;
  if(e.key=='d'||e.key=='ArrowRight') key.right=0;
});