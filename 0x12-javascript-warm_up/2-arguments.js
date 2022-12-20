#!/usr/bin/node
<<<<<<< HEAD
if (ProcessingInstruction.argv.length === 2){
    console.log("No argument");
}else if (ProcessingInstruction.argv.length === 3){
    console.log("Argument found");
}else {
    console.log("Arguments found");
=======
if (process.argv.length === 2) {
  console.log('No argument');
} else if (process.argv.length === 3) {
  console.log('Argument found');
} else {
  console.log('Arguments found');
>>>>>>> d995a5d7839f6d37bb9a7c6cc94ed56a7a2f5d6c
}
