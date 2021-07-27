canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

background_image="parkingLot.jpg";

car_width=85;
car_height=150;

car_X=110;
car_Y=300;




car_image="car.png";

function add(){
    background_img=new Image();
    background_img.onload=uploadBackground;
    background_img.src=background_image;

    car_img=new Image();
    car_img.onload=uploadCar;
    car_img.src=car_image;

    
}

function uploadBackground(){
    ctx.drawImage(background_img, 0, 0,canvas.width, canvas.height);

}


function uploadCar(){
    ctx.drawImage(car_img,car_X, car_Y,car_width, car_height);

}
window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    

    keypressed=e.keyCode;
    console.log(keypressed);

    if(keypressed=="37"){
       left();
        console.log("left");

    }
    if(keypressed=="38"){
       up();
    
        console.log("up");
        
    }
    if(keypressed=="39"){
        right();
        console.log("right");
        
    }
    if(keypressed=="40"){
        down();
        console.log("down");
        
    }

}
function up(){
    if(car_Y>=0)
    {
        car_Y= car_Y-10;
        console.log("When up arrow key is pressed, X is equal to "+ car_X + "And Y is equal to " + car_Y);
        uploadBackground();
        uploadCar();

    }
}
function down(){
    if(car_Y<=510)
    {
        car_Y= car_Y+10;
        console.log("When up arrow key is pressed, X is equal to "+ car_X + "And Y is equal to " + car_Y);
        uploadBackground();
        uploadCar();
        
    }
}
function left(){
    if(car_X>=0)
    {
        car_X= car_X-10;
        console.log("When up arrow key is pressed, X is equal to "+ car_X + "And Y is equal to " + car_Y);
        uploadBackground();
        uploadCar();
        
    }
}
function right(){
    if(car_X<=700)
    {
        car_X= car_X+10;
        console.log("When up arrow key is pressed, X is equal to "+ car_X + "And Y is equal to " + car_Y);
        uploadBackground();
        uploadCar();
        
    }
}






