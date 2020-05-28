// kata's 1

function add(a, b) {
    return a + b
}

console.log(add(2, 4))

// kata's 2


function multiply(x, y) {
    let newTotal = 0;
    for (let i = 0; i < y; i++){
    
    newTotal = add(newTotal, x) 
}
    return newTotal;
}

console.log(multiply(4, 5))

// kata's 3


function power(e, f) {
    let powerTotal = 1;
    for (let i = 0; i < f; i++) {
        
    powerTotal = multiply(powerTotal, e)
  
    }
    return powerTotal;
}

console.log(power(3, 4))

// kata's 4



function factorial(m) {
    let factorialTotal = m;

    
    for (let i = 1; i < m; i++) {
       
    factorialTotal = multiply(factorialTotal, i)
    
    }
    return factorialTotal;
}

console.log(factorial(10));

// kata's 5
// kata's 6
// kata's 7
// kata's 8
// kata's 9
// kata's 10



































// function average(x, y, z) {
//     return (x + y + z) / average.length
// }

// console.log(average(3, 5, 6))
// let array = [1, 4, 5, 8, 10, 14, 16, 12]


// function secondLargest(array) {
//     let i = 0;
//     highest = 0;
    
//     while (i < array.length){
//        if(highest < array[i]){
//           highest = array[i];
//        }
    
//        i++
//     }


   
//     let index = array.indexOf(highest);
//     if (index > -1) {
//     array.splice(index, 1);
// }
  
// let j = 0;
// highest2 = 0;

// while (j < array.length){
//    if(highest2 < array[j]){
//       highest2 = array[j];
//    }

//    j++
// }
//     return highest2;
// }

// console.log(secondLargest(array))

// let letters = ["a", "e", "i", "o", "u", "y"];
// // let letters = "a";
// let count = 0;
// let yes = 0;
// function containsVowel(word) {

// while (count < letters.length) {
//     if (word.includes(letters[count])) {
//         yes++
//         count++
//     } else {
//         count++
//     }
   
// }
//         if (yes > 0) {
//             yes = 0;
//             count = 0
//             return true;
            
//         }else {
//             return false;
//         }
        
// }


// console.log(containsVowel('lapyasdffasdfasdfhe')); 
// console.log(containsVowel('fghjkl'));