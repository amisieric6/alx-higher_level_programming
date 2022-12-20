#!/usr/bin/node
<<<<<<< HEAD

let myVar = process.argv.split(2);
console.log(myVar);
if{myVar === true;}
else{
    console.log("No argument");
}

/*if (process.argv[2] === undefined){
    console.log("No argument");}
else{console.log(process.argv[2]);}*/
=======
if (process.argv[2] === undefined) {
  console.log('No argument');
} else {
  console.log(process.argv[2]);
}
>>>>>>> d995a5d7839f6d37bb9a7c6cc94ed56a7a2f5d6c
