var rect = require('./rectangle');

function solveRect(l, b) {
    console.log("Solving for rectange with l = " + l + " and b = " + b ); 
    console.log("");
    
    rect(l, b, (err, rectangle) => {
        if(err){
            console.log("Error: ", err.message);
            console.log("");
        }
        else{
            console.log("The area of rectangle of dimensions l = " + l + " and b = " + b +  " is " + rectangle.area());
            console.log("");
            console.log("The perimeter of rectangle of dimensions l = " + l + " and b = " + b +  " is " + rectangle.perimeter());

        }
    });
    console.log("this statement is after the call to rect()");          
}

solveRect(2,4);
solveRect(3,5);
solveRect(0,5);
solveRect(-3,5);

