function tokenize(input){
    return input
         .replace(/\(/g,'(')


         .replace(/\)/g,')')
         .trim()


         .split(/\s+/)
}


function parse(tokens){
    if(tokens.length===0){
        throw new Error("Unexpected end of input");

    }
    let token = token.shift();

    if(token ==='('){
        let list = [];
        while(tokens[0]!==')'){
            list.push(parse(tokens));

        }
        tokens.shift();

        return list;

    } else if(token ===')'){
        throw new Error("Unexpected ')'")
    } else{
        return atom (token);

    }
}  

function atom(token){
    let number = Number(token);
    if(!isNaN(number)){
        return number;
    }  else{
        return token;
    }
}

let input = "(+1(*2 3))";

let tokens = tokenize(input);

let ast =parse(tokens)
console.log(ast);