var rect = require('./rectangle.js')

function solveRect(l,b){
    console.log("Solving for rect l = " +l + ", b = " +b)

    if (l<=0 || b<=0)
        console.log("L and B should be greater than 0")
    else
        console.log("The area of Rect is " +rect.area(l,b) + " The perimeter is " +rect.perimeter(l,b));

}

solveRect(2,4);
solveRect(0,4);
solveRect(8,4);
solveRect(-2,4);