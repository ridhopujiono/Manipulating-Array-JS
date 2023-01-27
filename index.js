/**
 * @param array arr
 * @response string
 *  */
function printArray(arr){
   return("[\n" + arr.join(", ") + "\n]");
}

/**
 * @param array arr
 * @param string type
 * @response string result
 *  */
function findResult(arr, type){
   let result = arr[0];
   for(var i = 0; i < arr.length; i++){
         result = (type == "max" ?  arr[i] > result : arr[i] < result) ?
             arr[i] 
         : 
            result;
   }
   return result;
}
/**
 * @param array arr
 * @param string type
 * @response string result
 *  */
function splitIndex(arr, type){
   let result = [];
   for(let i = 0; i < arr.length; i++){
      if (type == "even") {
         if (i %2 == 0)  {
            result.push(arr[i]);
         }
      } else if (type == "odd") {
         if (i %2 != 0) {
            result.push(arr[i]); 
         }
      }
   }
   return result;
}

// Generate a random array
let randArray = Array.from({length: 100}, () => Math.floor(Math.random() * 50) + 1);
// Get even and odd index
let evenIndex = splitIndex(randArray, 'even');
let oddIndex = splitIndex(randArray, 'odd');
// max
let maxArray = findResult(randArray, 'max');
// min
let minArray = findResult(randArray, 'min');



// console.log(maxArray);
// console.log(minArray);
console.log(printArray(randArray));
console.log(printArray(evenIndex));
console.log(printArray(oddIndex));
