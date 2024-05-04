

function addNumbers(a:number, b:number){
    return a + b;
}

function multiply(firstNumber:number, secondNumber?:number, base:number=2){
    return firstNumber * base;
}

// los backticks `` permiten concatenar strings y variables, además sirve para hacer multilineas y para definir como string lo que se encuentra dentro
// de las llaves ${} es una expresión de javascript para crear un template literal, es decir, una expresión que se evalúa y se convierte en string

const addNumbersArrow = (a:number, b:number):string => `${a + b}`;

// const result:number = addNumbers(1, 2);
// const result2:string = addNumbersArrow(1, 2);
// const multiplyResult:number = multiply(5);

// console.table({result, result2, multiplyResult})

interface Character{
    name:string;
    hp:number;
    showHp:() => void;
}

const healCharacter = (character:Character, amount:number) => {
    character.hp += amount;
}

const strider:Character = {
    name: 'Strider',
    hp: 50,
    showHp(){
        console.log(`Puntos de vida: ${this.hp}`);
    }
}

healCharacter(strider, 10);
healCharacter(strider, 50);

strider.showHp();



export{}