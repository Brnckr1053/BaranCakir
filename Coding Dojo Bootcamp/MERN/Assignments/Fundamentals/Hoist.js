// 1-// console.log(hello);                                   
// var hello = 'world';                                 

// var hello;
// console.log(hello); // give us undefined
// var hello = 'world';


// 2-// var needle = 'haystack';
// test();
// function test(){
//     var needle = 'magnet';
//     console.log(needle);
// }

// var needle;
// var needle = 'haystack';
// test();
// function test(){
//     var needle = 'magnet';
//     console.log(needle);
// }

// needle = " magnet"


// 3-// var brendan = 'super cool';
// function print(){
//     brendan = 'only okay';
//     console.log(brendan);
// }
// console.log(brendan);


// var brendan;
// function print(){
//     brendan = 'only okay';
//     console.log(brendan);
// }
// var brendan = 'super cool';
// console.log(brendan); // log is still "super cool"

// 4-// var food = 'chicken';
// console.log(food);
// eat();
// function eat(){
//     food = 'half-chicken';
//     console.log(food);
//     var food = 'gone';
// }


// var food;
// function eat(){
//     var food;
//     food = 'half-chicken';
//     console.log(food);
//     var food = 'gone';
// }
// var food = 'chicken';
// console.log(food); 
// eat();		   //same logs with top

// 5-// mean();
// console.log(food);
// var mean = function() {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);

// Top shows an error

// var mean;
// mean(); 
// var mean = function() {
//     var food;
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);
// console.log(food);

// bottom shows also error
// But whenb you run it together it shows undefined

//6-// console.log(genre);
// var genre = "disco";
// rewind();
// function rewind() {
//     genre = "rock";
//     console.log(genre);
//     var genre = "r&b";
//     console.log(genre);
// }
// console.log(genre); // logs undefined rock r&b disco




// var genre;
// function rewind() {
//     var genre;
//     genre = "rock";
//     console.log(genre);
//     var genre = "r&b";
//     console.log(genre);
// }
// var genre = "disco";
// rewind(); 
// console.log(genre); 
// // does not show undefined

// 7-// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
//     dojo = "seattle";
//     console.log(dojo);
//     var dojo = "burbank";
//     console.log(dojo);
// }
// console.log(dojo);
// // Shows all cities and it shows san jose again

// function learn() {
//     var dojo;
//     dojo = "seattle";
//     console.log(dojo);
//     var dojo = "burbank";
//     console.log(dojo);
// }
// dojo = "san jose";
// console.log(dojo); 
// learn();	   
// console.log(dojo); 

// nothing changed



// 8-// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));
// function makeDojo(name, students){
//     const dojo = {};
//     dojo.name = name;
//     dojo.students = students;
//     if(dojo.students > 50){
//         dojo.hiring = true;
//     }
//     else if(dojo.students <= 0){
//         dojo = "closed for now";
//     }
//     return dojo;
// }

// function makeDojo(name, students){
//     const dojo = {};
//     dojo.name = name;
//     dojo.students = students;
//     if(dojo.students > 50){
//         dojo.hiring = true;
//     }
//     else if(dojo.students <= 0){
//         dojo = "closed for now";
//     }
//     return dojo;
// }
// console.log(makeDojo("Chicago", 65)); // logs {name: "Chicago", students: 65, hiring: true}
// console.log(makeDojo("Berkeley", 0)); // returns an error, because code tried to assign "closed for now" to const variable, dojo.

// //  for Chicago one it shows {name: "Chicago", students: 65, hiring: true} but for  Berkeley code shows an error. 
