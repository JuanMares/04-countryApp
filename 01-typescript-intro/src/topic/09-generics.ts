export function watsMyType<T>(argument:T):T{
    return argument;
}

const amIstring=watsMyType<string>("Hola mundo");
const amINumber=watsMyType<number>(100);
const amIArray=watsMyType<number[]>([1,2,3,4,5]);

console.log(amIstring.split(' '));
console.log(amINumber.toFixed());
console.log(amIArray.join('-'));