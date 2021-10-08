// 1. Необходимо создать функцию hasElem, которая параметрами будет принимать массив и строку, и возвращать true, если строка есть в массиве, и false - если нет

const array15 = ['js', 'css', 'html'];
const str = 'html';

function hasElem(arr,str){
  return arr.includes(str)
}

console.log(hasElem(array15,str))


// 2. Дан массив с числами. Проверьте, что в этом массиве есть указанное число. Если есть - вернуть true, а если нет - вернуть false.

const array16 = [1, 2, 3, 4, 5];
const number = 9;

function containsNumber(arr,num){
  return arr.includes(num);
}



console.log(containsNumber(array16,number))


// 3. Дан массив с числами. Проверьте, есть ли в нем два одинаковых числа подряд. Если есть -  вернуть true, а если нет - вернуть false.

const array17 = [1, 2, 3, 5, 5]

function hasSameValue(arr) {
  for(let i=0; i < arr.length; i++){
    if (arr[i] === arr[i+1]){
      return true
    }      
  }
  return false
} 

console.log(hasSameValue(array17))

// 4. Заполните массив 10 случайными числами в диапазоне от 15 до 78. Math.random()

const arrayRandom = [];
const min = 15;
const max = 78;

function getRandomNumber(max,min) {
  return Math.floor(min + Math.random() * (max + 1 - min));
}

function addElementsInArray(arr) {
  for (let i=0; i<10; i++){
    arr.push(getRandomNumber(max,min))
  }
}

addElementsInArray(arrayRandom)
console.log(arrayRandom)

// 5. Дан массив 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число. 

const array18 = [4, -2, 5, 19, -130, 0, 10];

// 2 способ

function findMaxNumber2(arr){
  if(arr.length>0){
    return Math.min.apply(null, arr)
  }
  
}

function findMinNumber2(arr){
  if(arr.length>0){
  return Math.max.apply(null, arr)
  }
}

console.log(findMaxNumber2(array18))

console.log(findMinNumber2(array18))

// 1 способ

// function findMaxNumber(arr){
//   let max = Number.MIN_VALUE;
//   for (let index = 0; index < arr.length; index++) {
  
//     if (arr[index] > max) {
//       max = arr[index];
//     }
//   }
//     return max;
// }


// function findMinNumber(arr){
//   let min = Number.MAX_VALUE;
//   for (let index = 0; index < arr.length; index++) {
  
//     if (arr[index] < min) {
//       min = arr[index];
//     }
//   }
//     return min;
// }


// console.log(findMaxNumber(array18))

// console.log(findMinNumber(array18))



// 6. Дан массив arr. Найдите среднее арифметическое его элементов. Проверьте задачу на массиве с элементами 12, 15, 20, 25, 59, 79.

const array19 = [12, 15, 20, 25, 59, 79];


function averageArrayNumbers2(arr) {
  
  let sum = arr.reduce((a,b) => a + b , 0); 
  return res = sum / arr.length;
}

console.log(averageArrayNumbers2(array19))


// 2 способ


function sumArr(arr){
  let sum= 0;
 for (el of arr){
    sum += el;
 }
 return res = sum / arr.length;
}



console.log(sumArr(array19))



// function averageArrayNumbers(arr) {
  
//   let sum = arr.reduce(function(sum,current) {
//     return (sum+current); 
//   })
 
//   return res = sum / arr.length;
// }

// console.log(averageArrayNumbers(array19))





