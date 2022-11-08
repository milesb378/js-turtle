function main()
{
    wrap(false);

    var sideLength = 150;

    var rightSide = getWidth()/2
    var leftSide = -getWidth()/2
    var top = getHeight()/2
    var bottom = -getHeight()/2
    
    var sideA = getWidth()
    var sideB = getHeight()

    goto(rightSide,top)
    console.log(turtle.pos);
    console.log(sideLength);

    left(135)

    var sideC = Math.sqrt (Math.pow (sideA,2) + Math.pow (sideB,2))

    forward(sideC)
    console.log(turtle.pos);

    goto(leftSide,top)
    left(90)
    forward(sideC)

}
