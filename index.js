var rect = require('./rectangle');

function solveRect(l, b) {
    console.log("Solving for rectange with l = " + l + " and b = " + b ); 

    if( l <= 0 || b <= 0){
        console.log("Rectangle dimensions are supposed to be greater than zero: l = " + l + ", and b = " + b );
        console.log("")
    }
    else{
        console.log("The area of the rectangle is " + rect.area(l,b));
        console.log("")
        console.log("The perimeter of the rectangle is " + rect.perimeter(l,b));

    }
}

solveRect(2,4);
solveRect(3,5);
solveRect(0,5);
solveRect(-3,5);