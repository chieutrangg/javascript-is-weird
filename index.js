let result = true + false;
console.log(result);
/*  Number(true)  // 1
    Number(false) // 0 
    1 + 0 = 1
*/  

let arrayLength = [,,,].length;
console.log(arrayLength);
/*[,,,].length is 3. The last comma is a terminal comma. */ 


[,] + [,]; // => ""

[] + [] === [,] + [,]; // -> true

[,,,] + [,,,]; // -> ",,,," 

/*With that logic we could also have*/ 
([,,,] + [,,,]).length === [,,,,].length; 


/*The result will be [1,2,34,5,6]*/ 
let result2 = [1,2,3] + [4,5,6]
console.log(result2) 

/*0.2 + 0.1 > 0.3*/ 
let result4 = 0.1 + 0.2 > 0.3 ? true : false;
console.log(result4);// => true

let result5 = !!NaN;
console.log(result5); // => false 

/*!![] === true*/ 
let result6 = 2 +!![];
console.log(result6);

let b = !![] == true? true:false;
console.log(b)