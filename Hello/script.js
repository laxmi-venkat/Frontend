const compose = (...ops)=>{
    return(value)=>{
        return ops.reduceright((result,operation)=>{
          return operation(result)
        },value)
    };
};
console.log("Chained functions have been succesffully executed.")