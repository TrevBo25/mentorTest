//JS Basics
//Run npm test in the command line to test your solutions
module.exports = {
  reverseIt: function (str){
    return str.split('').reverse().join('');
  },

  //uncomment and finish the reverseIt function. It will take in one parameter which is a String and
  //reverse it

  removeDups: function(arr){
    return [ ...new Set(arr)]
  },

  //uncomment and finish the removeDups function. It will take in one parameter which is an Array
  //remove all duplicates

  titleIt: function (str){
    let taco = str.split(' ');
    let cat = '';
    for (let i = 0; i<taco.length; i++){
      if(i !== (taco.length - 1)){
        for ( let j = 0; j<taco[i].length; j++){
          if( typeof taco[i][j] === 'string'){
            if(j === 0){
              cat += taco[i][j].toUpperCase();
            } else {
              cat += taco[i][j].toLowerCase();
            }
          } else {
            cat += taco[i][j].toString();
          }
        }
        cat += " ";
      } else {
          for ( let j = 0; j<taco[i].length; j++){
          if( typeof taco[i][j] === 'string'){
            if(j === 0){
              cat += taco[i][j].toUpperCase();
            } else {
              cat += taco[i][j].toLowerCase();
            }
          } else {
            cat += taco[i][j].toString();
          }
        }
      }
    }
    return cat;
  },

  //uncomment and finish the titleIt function. It will take in one parameter which is a String and
  //capitalize the first letter of each word tacocat

  vowelCounter: function(str){
    let winner = 0;
    str.split('').forEach((v,i,a) => {
      if('aeiou'.includes(v)){
        winner++;
      }
    })
    return winner;
  },

  //uncomment and finish the vowelCounter function. It will take in one parameter which is a String and
  //return the number of vowels in the string

  isPrime: function (n){
    if ( n < 0 ){
      return false
    }
    var arr = [];
    for (i = 2; i <= n / 2; i++) {
      n % i === 0 ? arr.push(i) : (arr = arr);
    }
    if (arr.length === 0) {
      return true;
    } else {
      return false;
    }
  },

  //uncomment and finish the isPrime function. It will take in one parameter which is a Number and
  //return true if it is prime and false if it is not

  //what is the value of foo?
  //var foo = 10 + '20';
  //uncomment the foo property and give your answer as its value

  foo: "1020",

  //what is the outcome of the two console.logs below?
  //   var foo = "Hello";
  // (function() {
  //   var bar = " World";
  //   console.log(foo + bar);
  // })();
  // console.log(foo + bar);
  // uncomment the log1 and log2 properties and give your answers as their values

  log1: "Hello World",
  log2: undefined
}
