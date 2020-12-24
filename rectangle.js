module.exports = (x,y, callback) => {
    if(x <= 0 || y <= 0){
        setTimeout(() => 
        callback(new Error("Rectangle dimensions are supposed to be greater than zero: l = " + x + ", and b = " + y ),
            null), // first parameter will pass in an error and second will be null 
        2000);
    }
    else{
        setTimeout(() => 
        callback( null,
            {
                perimeter: () => (2*(x+y)),
                area: () => x*y
                
            }), // first parameter will pass in an error and second will be null 
        2000);

    }
}



