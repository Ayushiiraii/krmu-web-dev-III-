const data = process.argv;

const operation = data[2];
const num1 = Number(data[3]);
const num2 = Number(data[4]);

if(operation === "add"){
    console.log(num1 + num2);
}

else if(operation === "subtract"){
    console.log(num1-num2);
}

else if(operation === "multiply"){
    console.log(num1*num2)
}

else if(operation === "divide"){
    if(num2 === 0){
        console.log("cannot divide by zero");
    }else{
        console.log(num1 / num2)
    }
}

// Bonus: extra operations
else if(operation === "modulus"){
    console.log(num1 % num2);
}

else if(operation === "power"){
    console.log(Math.pow(num1, num2));
}

else{
    console.log("Invalid operation")
}
console.log(data)