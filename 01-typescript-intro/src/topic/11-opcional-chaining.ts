export interface Passenger{
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'Juan Perez'
}

const passenger2: Passenger = {
    name: 'Luisa Perez',
    children: ['Luis', 'Laura']
}

function printChildren(passenger: Passenger): void {
    const numChildren = passenger.children?.length || 0;
    console.log(numChildren);
}

printChildren(passenger1);
printChildren(passenger2);