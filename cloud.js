var minimum = -getWidth()/2;
var max =  getHeight()/2;


function main()
{
    for (var i = 0; i < 4; i++)
    {
        wrap(false);
        circle(.1);
        penup()
        forward(10);
        pendown()
        circle(.15)
        penup()
        right(45);
        forward(10)
        pendown()
        circle(.2);
}

}

function circle(size)
{
    for (var i = 0; i < 360; i++)
    {
        width(10);
        forward(size);
        right(1);
    }
}
