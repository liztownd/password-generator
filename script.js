// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function writePassword() {


  // initial values 

  var confirmCap = true;
  var confirmLow = true;
  var confirmSpec = true;
  var confirmNumeric = true;
 

  var str = {
    num: 0,
    includSpec: ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "?"],
    includLow: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
    includCap: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
    includNum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
    finalArray: [],
    passArray: [],

    // prompt to get the number of characters from the user
  
    addToNum: function() {
      
      var userNum = prompt("How many characters would you like your password to have?");
  
      if (userNum < 8) {
        alert("Password must be longer than 8 characters.");
        this.addToNum();
      } 
  
      else if (userNum > 128) {
        alert("Password cannot have more than 128 characters.");
        this.addToNum();
      }
  
      else {
        this.num = this.num + userNum;
      }
  
    },

    // the user chooses the paremeters of their password, i.e. special characters, lower case letters, etc.
  
    addSpec: function() {
  
     confirmSpec = confirm("Would you like special characters in your password?");
  
      if (confirmSpec) {
        this.finalArray.push(this.includSpec);
      }
  
    },
  
    addLow: function() {
  
      confirmLow = confirm("Would you like to use lower case letters in your password?");
  
      if (confirmLow) {
        this.finalArray.push(this.includLow);
      
      }
    },
  
    addCap: function() {
  
      confirmCap = confirm("Would you like to use upper case letters in your password?");
  
      if (confirmCap) {
        this.finalArray.push(this.includCap);
      
      }
    },
  
    addNumeric: function() {
  
      confirmNumeric = confirm("Would you like to use numbers in your password?");
  
      if (confirmNumeric) {
        this.finalArray.push(this.includNum);
      
      }
    },

    // to flatten the array of character parameters chosen by the user
  
    flattenFinal: function() {
      
      str.passArray = this.finalArray.flat();


      // if user does not select any characters to use in their password the function will start over

      if (confirmCap === false && confirmLow === false && confirmNumeric === false && confirmSpec === false) {
        alert("You did not select any characters! Please try again.");
        writePassword();
      }
      
      else {
        generatePassword();
      }

    },
  
  
  };
  

  // calling the methods to get all the data from the user selections

  str.addToNum();
  str.addSpec();
  str.addLow();
  str.addCap();
  str.addNumeric();
  str.flattenFinal();


  //generating the password from the user inputs and writing the password to the web page

  function generatePassword() {

    var text = " ";

    for( var i=0; i < str.num; i++ )
        text += str.passArray[Math.floor(Math.random() * str.passArray.length)];

    return text;


  }



  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
