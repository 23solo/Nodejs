var rect = require('./rectangle.js')

function solveRect(l,b){
    console.log("Solving for rect l = " +l + ", b = " +b)

    rect(l,b, (err, rectangle) =>{
        if(err){
            console.log("ERROR: ",err.message);
        }
        else{
            console.log("The area of rectangle with l= " + l + 
            "and b = " +b + "is " + rectangle.area());
            console.log("The perimeter of rectangle with l= " + l + 
            "and b = " +b + "is " + rectangle.perimeter());
        }
    });
    console.log("This is after the call to Rect");
}
solveRect(2,4);
solveRect(0,4);
solveRect(8,4);
solveRect(-2,4);