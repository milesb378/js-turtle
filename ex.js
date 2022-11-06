function main()
{
    wrap(false);

    var sideLength = 150;

    var right = getWidth()/2
    var leftSide = -getWidth()/2
    var top = getHeight()/2
    var bottom = -getHeight()/2
    
    var sideA = getWidth()
    var sideB = getHeight()

    goto(right,top)
    console.log(turtle.pos);
    console.log(sideLength);

    left(135)
    forward(sideC)

    var sideC = Math.sqrt (Math.pow (sideA,2) + Math.pow (sideB,2))

}
