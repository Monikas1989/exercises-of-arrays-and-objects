//Zadanie nr 1

const array1 = [2, 5];
const array2 = [3, 7];

const mergeArrays = (array1, array2) => {
    return [...array1,
    ...array2]
};
console.log(mergeArrays(array1, array2));

// Zadanie nr 2


const exceptFirst = (firstParameter, ...restParameters) => {
    console.log(`Pierwszy argument: ${firstParameter}`);
    console.log(`Reszta argumentów: ${restParameters}`);
};

exceptFirst(2, "delfin", "null");

//Zadanie nr 3

const names = ["Molnika", "Alicja", "Klaudia", "Tomasz"];

const last2Names = () => {
    return names.slice(2)
};
console.log(names.slice(2));

//Zadanie nr 4

const foodAndDrinks = ["kawa", "herbata", "lody", "pizza"];

const indexOf = (element, array) => {
    return foodAndDrinks.indexOf("herbata")
};

console.log(indexOf("herbata", ["kawa", "herbata", "lody", "pizza"]));



///Zadanie 5

const tasks = ([
    { content: "" },
    { content: "posprzątać" },
]);



const findContent = (tasks => tasks.content !== "");

const findNonEmptyTask = (tasks) => {
    return tasks.find(findContent);
};

console.log(findNonEmptyTask(tasks));

//Zadanie 6

const numbers = [4, 6, 7, 11];

const oddNumbers = (numbers => numbers === 7 || numbers / 7 === 1);


const firstOddNumber = (numbers) => {
    return numbers.findIndex(oddNumbers);
};
console.log(firstOddNumber(numbers));

//Zadanie 7

const fruits = ["mango", "jabłko", "mandarynka"];



const hasStrawberry = (fruits) => {
    return fruits.includes("truskawka");
};

console.log(hasStrawberry(fruits));

//Zadanie 8

const persons = [
    {
        name: "Monika",
        age: 33,

    },
    {
        name: "Tomasz",
        age: 15,
    },
];

const adult = (persons => persons.age = persons.age >
    18);

const someAdult = (persons) => {
    return persons.some(adult);
};

console.log(someAdult(persons));

//Zadanie 9

const objects = ["", "mama", "tata"];

const stringObjects = objects =>
    typeof objects === "string";



const onlyString = (objects) => {
    return objects.every(stringObjects);
};
console.log(onlyString(objects));

//Zadanie 10

const carBrands = [{
    name: "Honda",
    premium: "false",
},
{
    name: "Mazda",
    premium: "false",
},
{
    name: "BMW",
    premium: "true",
},
{
    name: "Audi",
    premium: "true",
}
];



const truePremiumBrands = (carBrands => carBrands.premium = carBrands.premium === "true");
const filterPremium = (carBrands) => {
    return carBrands.filter(truePremiumBrands);
};
console.log(filterPremium(carBrands));


//Zadanie 11

const cars = [
    {
        car: "Honda",
        color: "gold",
    },
    {
        car: "Mazda",
        color: "silver",

    },
];

const getColors = cars.map(({ color }) => color);

console.log(getColors);

//Zadanie 12

const people = [
    {
        name: "Monika",
        age: 33,

    },
    {
        name: "Tomasz",
        age: 31,
    },
];


const sortPeople = (people) => {
    return people.sort((a, b) => a.age - b.age);
};

console.log(sortPeople(people));





