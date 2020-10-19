//This is an array. It contains objects with properties -> name; type, race, age, gender
let pets = [
    {
    name: ' Fids',
    type: 'Dog',
    race: 'Shitzsu',
    age: 2,
    gender: 'Male',
    vaccinated: true
    },
    {
    name: ' Lorena',
    type: 'Dog',
    race: 'Golden',
    age: 9,
    gender: 'Female',
    vaccinated: false
    }
];


//Here I am listing the properties from the array.
function listingPets(){
    for (let i = 0; i < pets.length; i++) {
        console.log('Name: ' + pets[i].name)
        console.log('Type: ' + pets[i].type)
        console.log('Race: ' + pets[i].race)
        console.log('Age: ' + pets[i].age)
        console.log('Gender: ' + pets[i].gender)
    };
};


//Validating the data
function validatingDataPets(newPet){
    return (
    newPet.name && 
    newPet.type && 
    newPet.race && 
    newPet.age && 
    newPet.gender && 
    typeof (newPet.vaccinated) == 'boolean' // validating if the type of the propertie is boolean.
    ) 
};

//Here I created a function in which I add a new object in the array
function addPet(...objetcPet) {
    if(typeof objetcPet == 'object'){ //verifying
        if(validatingDataPets(...objetcPet)){ 
            pets.push(...objetcPet)
            listingPets();
        }else{
            console.log('The object does not have all the properties nedeed');
        };
    }else{
        console.log('Please, insert a valid object');

    };
};


let newPetObj = { //New Pet
    name: ' Nina',
    type: 'bird',
    race: 'cockatiel',
    age: 10,
    gender: 'Female',
    vaccinated: true
    
};

let newPetObjTwo = { //New Pet 2
    name: ' Sarah',
    type: 'Cat',
    race: 'unknown',
    age: 29,
    gender: 'Female',
    vaccinated: true
};

let newPetObjThree = { //New Pet 2
    name: ' Caetano',
    type: 'Bird',
    race: 'Cocktail',
    age: 3,
    gender: 'Male',
    vaccinated: false
};

addPet(newPetObj); //adding an object to an array


// Verifying if the Pet were Vaccinated 
function vaccinated(pets) {

    let vaccinatedPets = [];
    let nonVaccinatedPets = [];
    let numVaccinatedPets = 0;
    let numNonVaccinatedPets = 0;

    for (let i = 0; i < pets.length; i++) {
        if (pets[i].vaccinated) {
            vaccinatedPets.push(pets[i].name);
            numVaccinatedPets++ // accumulator variable
        }else{
            nonVaccinatedPets.push(pets[i].name);
            numNonVaccinatedPets++ // accumulator variable
        };
    };
    console.log(' ') // A space between the info about the pets

    console.log('Vaccinated pets: ' + numVaccinatedPets);
    console.log('List of vaccinated pets: ' + vaccinatedPets);

    console.log(' ') // A space between the info about the pets 

    console.log('Non vaccinated pets: ' + numNonVaccinatedPets);
    console.log('List of non vaccinated pets: ' + nonVaccinatedPets);
};

vaccinated(pets);

// Services - using callback - bathing and trimming the pet

// function service(pet, trim, bathe){
//     typeService(pet)
// };


// function bathe(pet){
//     console.log(pet + "was bathed successfully");
// };


// function trim(pet){
//     console.log(pet + "was trimmed successfully");
// };


