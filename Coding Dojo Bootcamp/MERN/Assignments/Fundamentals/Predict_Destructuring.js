const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar)
console.log(otherRandomCar)

//  I predicted Tesla and Mercedes and it shows the same wow.



const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
console.log(name);
console.log(otherName);
// predicted is undefined but it shows error :'(



    const person = {
        name: 'Phil Smith',
        age: 47,
        height: '6 feet'
    }
    const password = '12345';
    const { password: hashedPassword } = person;  
    //Predict the output
    console.log(password);
    console.log(hashedPassword);

    // Prediction is 12345 and error but it shows 12345 and undefined


const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first == second);
console.log(first == third);

//  flase and true as I predicted



const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);


// predicted value and [ 1, 5, 1, 8, 3, 3 ] and 1 and 5








