//BG art done by https://www.deviantart.com/forheksed
//Monkey art by https://www.deviantart.com/hendryroesly/art/Little-Monkey-552401896
//Music 1: Aquatic Reflections · Kainbeats
//Music 2: Warm Zephyr · Kainbeats
//Music 3: Lilac (Original Mix) · Kainbeats

var songs = ['Y2Mate.is - Aquatic Reflections-xCQXsqxrcvw-160k-1647725276599.mp3','yt5s.com - Warm Zephyr (128 kbps).mp3','yt5s.com - Lilac (Original Mix) (128 kbps).mp3','yt5s.com - Toshifumi Hinata-Reflections (128 kbps).mp3']

let x = 0
var w = 100;
var h = 50;
var sounds = [];
var mode = 0


function preload() {
   let url = "https://api.openweathermap.org/data/2.5/weather?q=New%20York&units=imperial&APPID=e812164ca05ed9e0344b89ebe273c141";
  json = loadJSON(url);
  Monkey1=loadImage('pixilart-drawing.png')
  bgmusic= loadSound("yt5s.com - sftspkn - promise (w. Ayzic) (128 kbps).mp3")
  Tree=loadImage('pixilart-drawing (1).png')
  start=loadImage('loadingscreen.png')
  bird = loadImage('birdie.png')
  BG=loadImage('forrest background.png')
  sun=loadImage('pixel-leaf-vector-1481606.png')
 snow=loadImage('pngfind.com-snow-flakes-png-845479.png')
  monkey=loadImage("Little Monkey by HendryRoesly on DeviantArt.png")
  for(let i = 0; i<songs.length;i++){
  sounds[i] = loadSound(songs[i]);
 }
  rainSound = loadSound('heavy_rain_sound_effect_non_copyrighted_free_download_1676662281634673767.mp3')
 }

let leafY = [];
let rainY = []
let fireflyY = []
function setup() {
  noCursor()
  weather = json.weather[0].id
  button = createImg('pixil-frame-0 (1).png')
  button.size(150,150)
  button.position(windowWidth/2.5, windowHeight/2.5);
  button.mousePressed(updatemode);
  createCanvas(windowWidth, windowHeight);
  bgmusic.play()
  sounds[x].play()
  amp = new p5.Amplitude()
  let virus = random(300,500)
  for (let i = 0; i < virus; i++) {
    leafY[i] = random(height)
    rainY[i] = random(height)
    fireflyY[i] =random(height)
  }
}


function draw() {
 let time  = hour()
 if (mode == 0) {
  sounds[x].setVolume(0)
  let vol1 = amp.getLevel() * 5
  background(207, 235, 52);
  image(start,0,0,windowWidth,windowHeight)
  image(bird,mouseX,mouseY+(vol1*20),100,100)
  }
else{
  bgmusic.stop()
 sounds[x].setVolume(1)
push()
  let vol1 = amp.getLevel() * 5
  if (x==2 || time > 19){
   tint(102,165,229)
   background(BG)
  push()
   noTint()
   image(bird,mouseX,mouseY+(vol1*20),100,100)
  pop()

    }else if (622> weather > 600 ){
   tint(199, 199, 199)
   background(BG)
  push()
   noTint()
   image(bird,mouseX,mouseY+(vol1*20),100,100)
  pop()
  }else if (x==1 || 16 < time && time < 19){
   tint(255,227,105)
   background(BG)
  push()
    noTint()
    image(bird,mouseX,mouseY+(vol1*20),100,100)
  pop()

  push()
    for(let i=0;i < 10;i++){
    noStroke()
    fill(33,110,32)
    rect(500, 0, 5, 200+(vol1*20),30);
    image(monkey,windowWidth/2-35,20+(vol1*20),150)
  pop()
 }

  }else if (time < 16) {
     background(BG)
     noTint()
     image(bird,mouseX,mouseY+(vol1*20),100,100)
   }
 pop()
  let vol = amp.getLevel() * 5

if (mouseIsPressed || weather < 531) {
 for (let i = 0; i < rainY.length; i++) {
    noStroke()
    fill(63,191,191)
    let rainX = width * i / rainY.length;
    rect(rainX, rainY[i] *(10+vol), 5,10);
    rainY[i]++;

    if (rainY[i] > height) {
      rainY[i] = 0;
     }
    }
  }
else if (x==0 || x==3 && 622 < weather || weather < 600 ){
 for (let i = 0; i < leafY.length; i++) {
    let leafX = width * i / leafY.length
    image(sun,leafX, leafY[i]+vol, 15,15)
    rotate(radians(leafX))
    leafY[i]+= vol;
    if (leafY[i] > height) {
      leafY[i] = 0;
    }
    }
  }else if (x==2 && 622 < weather || weather < 600){
     for (let i = 0; i < fireflyY.length; i++) {
      let fireflyX = width * i / fireflyY.length
      fill(245,239,55,70)
      stroke(300,239,55,70)
      strokeWeight(vol1*10)
      circle(fireflyX, fireflyY[i]+vol1, 5)
      rotate(radians(fireflyX))
      fireflyY[i]+=1;
    if (fireflyY[i] > height) {
      fireflyY[i] = 0;
    }
    }
  }else if (x==1 && 622 < weather || weather < 600){
    for (let i = 0; i < leafY.length; i++) {
    let leafX = width * i / leafY.length
    image(sun,leafX, leafY[i]+vol, 15,15)
    rotate(radians(leafX))
    leafY[i]+= vol;
    if (leafY[i] > height) {
      leafY[i] = 0;
    }
    }
    }else if (622> weather > 600){
     for (let i = 0; i < fireflyY.length; i++) {
      let fireflyX = width * i / fireflyY.length
      image(snow,fireflyX, fireflyY[i]+vol, 15,15)
      rotate(radians(fireflyX))
      fireflyY[i]+= 3+vol;
    if (fireflyY[i] > height) {
      fireflyY[i] = 0;
    }
    }
  }
}
}
function mousePressed() {
 rainSound.setVolume(.4,1)
 rainSound.play()
}

function mouseReleased() {
  rainSound.stop()
}
function keyPressed() {
  if (keyCode === ENTER) {
    sounds[x].stop()
    if (x<3){
      x+=1
    }
    else{
     x= 0
    }
    sounds[x].play()
    sounds[x].loop()
  }
}
function updatemode() {
  button.hide();
  if (mode == 0){
    mode += 1
     }
    else{
     mode=1
    }
}
