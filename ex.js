function main()
{
    forward(100);
    //https://www.w3resource.com/javascript-exercises/javascript-math-exercise-35.php//
    console.log(pythagorean(200, 300));
}

function pythagorean(sideA, sideB)
{
    return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
}
