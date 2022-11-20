function main()
{
//activites the green tube
left(90);
forward(sideLength*2);
right(90);
forward(50);
Greentube(50);

}

/*

GRREEEEN TUBE BY MARCOOOO
This makes 3 diffrent Tubes in difrent areas and sizes 
The turtle goes back to the bottom left
*/ 


function Greentube(sideLength){

//This makes the first rectangle 

strafe(sideLength / 2);
width(sideLength/1.5);
colour(78, 188, 0,1);
forward(sideLength*1.2);
penup();
forward(sideLength/2);
left(180);
strafe(-sideLength/2);
width(2);
colour(0,0,0,1);

// This makes the 2nd rectangle adding it to the frist rectangle making the tube 
strafe(sideLength / 2);
width(sideLength/1.1);
colour(78, 188, 0,1);
forward(sideLength/2);
penup();
left(180);
forward(sideLength/2);
left(180);
strafe(-sideLength/2);
width(2);
colour(0,0,0,1);

//This moves the turtle into an optimal positon for the 2nd tube 
penup();
forward(sideLength/2);
forward(sideLength*1.2);
right(90);
forward(sideLength*5);
right(90);

//This makes the first rectangle part of the 2nd tube 
strafe(sideLength / 2);
width(sideLength/1.5);
colour(78, 188, 0,1);
forward(sideLength);
penup();
forward(sideLength/2);
left(180);
strafe(-sideLength/2);
width(2);
colour(0,0,0,1);

//This makes the 2nd rectangle part of the 2nd tube 
strafe(sideLength / 2);
width(sideLength/1.1);
colour(78, 188, 0,1);
forward(sideLength/2);
penup();
left(180);
forward(sideLength/2);
left(180);
strafe(-sideLength/2);
width(2);
colour(0,0,0,1);

//This moves the turtle into an optimal positon for the 3nd tube 
penup();
forward(sideLength/2);
forward(sideLength);
right(90);
forward(sideLength*4);
right(90);


//This makes the first rectangle part of the 3rd tube 
strafe(sideLength / 2);
width(sideLength/1.5);
colour(78, 188, 0,1);
forward(sideLength*1.6);
penup();
forward(sideLength/2);
left(180);
strafe(-sideLength/2);
width(2);
colour(0,0,0,1);

//This makes the 2nd rectangle part of the 3nd tube 
strafe(sideLength / 2);
width(sideLength/1.1);
colour(78, 188, 0,1);
forward(sideLength/2);
penup();
left(180);
forward(sideLength/2);
left(180);
strafe(-sideLength/2);
width(2);
colour(0,0,0,1);
penup();    

//this moves it back to the bottom left 
goto(0,0);
forward(max);
right(90);
forward(max);
right(90);
}