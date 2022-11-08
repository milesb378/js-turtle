function main()
{
    wrap(false);

    var rightSide = getWidth()/2
    var leftSide = -getWidth()/2
    var top = getHeight()/2
    var bottom = -getHeight()/2

    var numStairs = prompt("number of stairs:")
    var sideLength = getWidth()/numStairs

    goto(leftSide,bottom)
    
    for(var i = 0; i < numStairs; i++){
        forward(sideLength)
        right(90)
        forward(sideLength)
        left(90)
        console.log(turtle.pos)
    }
}