const readline = require('readline'); 
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {
    if(numsLeft > 0 ){
      const ans = reader.question('Enter number: ', function(res){ 
        sum += parseInt(res); //new sum
        // console.log(`current sum: ${sum}`);
        addNumbers(sum, numsLeft-=1, completionCallback);
      })
    }
    else{
      completionCallback(sum);
    }
}


//test
 addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`)); //=>print
