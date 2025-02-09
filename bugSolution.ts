function printNumbers(n: number): void {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

printNumbers(5); // This works fine

function printNumbers2(n: number): void {
  for (let i = 1; i <= n; i++) {
    //Using IIFE to create a closure
    (function(j) {
      setTimeout(() => {
        console.log(j);
      }, j * 1000);
    })(i);
  }
}

printNumbers2(5); //Prints 1,2,3,4,5 with delay

function printNumbers3(n: number): void {
    for (let i = 1; i <= n; i++) {
      setTimeout(() => {
        console.log(i);
      }, i * 1000);
    }
  }
  
printNumbers3(5); //Prints 1,2,3,4,5 with delay