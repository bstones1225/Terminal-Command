 const fs = require("fs");

//write out data
 function done(output) {
     process.stdout.write(output);
     process.stdout.write('\nprompt > ');
 }

//where we will store our commands
 function evaluateCmd(userInput) {
  //parses the user input to understand which command was typed
   const userInputArray = userInput.split(" ");
   const command = userInputArray[0];
   switch (command) {
     case "echo":
      //we will add the functionality of echo next within the      	//object commandLibrary    
       commandLibrary.echo(userInputArray.slice(1).join(" "));
       break;
     case "cat":
       commandLibrary.cat(userInputArray.slice(1));
       break;
     case "head":
       commandLibrary.head(userInputArray.slice(1));
       break;
     case "tail":
       commandLibrary.tail(userInputArray.slice(1));
       break;
     case "r":
       commandLibrary.r(userInputArray.slice(1));
       break;
      default:
       commandLibrary.errorHandler(command);
       break;
   }
 }

//where we will store the logic of our commands
 const commandLibrary = {
  //the echo command
  //the echo command
      "echo": function(userInput) {
       done(userInput);
   },
  //the cat command
      "cat": function(fullPath) {
       const fileName = fullPath[0];
       fs.readFile(fileName, (err, data) => {
           if (err) throw err;
           done(data);
       });
   },
  //the head command
	 "head": function(fullPath) {
       const headFile = fullPath[0];
       fs.readFile(headFile, (err, data) => {

           if(err) throw err;

           var dataArr = data.toString().split("\n");

           done(dataArr.slice(0,10).join("\n"));

       });

   },
  //the tail command
	 "tail": function(fullPath) {
       const headFile = fullPath[0];
       fs.readFile(headFile, (err, data) => {

           if(err) throw err;

           var dataArr = data.toString().split("\n");
		var l = dataArr.length - 10;
		console.log(l);
           done(dataArr.slice(l,l + 10).join("\n"));

       });

   },
//the reverse command
	 "r": function(stringName) {
       const inputArray = stringName.toString().split("");
       const reverseArray = [];
       inputArray.forEach((element) => {
 		console.log(element);
           reverseArray.push(element);
           console.log(reverseArray);
           
	 });
       reverseArray.reverse();
       console.log(reverseArray.join(""));
       
   },
 //the default command
     "errorHandler": function(userInput) {
       console.log(userInput + " is invalid command");
   },
 };

 module.exports.commandLibrary = commandLibrary;
 module.exports.evaluateCmd = evaluateCmd;