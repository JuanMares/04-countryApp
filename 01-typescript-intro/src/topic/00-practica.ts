interface Address {
    street: string;
    city: string;
    zipCode: string;
}

interface UserProfile {
    name: string;
    email: string;
    addresses: Address[];
}


const user: UserProfile = {
    name: "John Doe",
    email: "johndoe@example.com",
    addresses: [
        {
            street: "123 Elm St",
            city: "Somewhere",
            zipCode: "90210"
        },
        {
            street: "456 Maple Ave",
            city: "Anywhere",
            zipCode: "90310"
        }
    ]
};


function printShippingLabel(userProfile: UserProfile, addressIndex: number): void {
    const { name, addresses } = userProfile;
    const { street, city, zipCode } = addresses[addressIndex];

    console.log(`Shipping Label:
        Name: ${name}
        Street: ${street}
        City: ${city}
        Zip Code: ${zipCode}`);
}

// Llamar a la función usando la primera dirección
printShippingLabel(user, 0);
