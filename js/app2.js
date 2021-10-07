// 1. Необходимо создать функцию hasElem, которая параметрами будет принимать массив и строку, и возвращать true, если строка есть в массиве, и false - если нет

const array15 = ['js', 'css', 'html',];
const str = 'html';

function hasElem(arr,str){
  for (const elem of arr){
    if (elem ===str){
      return true;
    }   
  }
  return false;
}

console.log(hasElem(array15,str))


// 2. Дан массив с числами. Проверьте, что в этом массиве есть указанное число. Если есть - вернуть true, а если нет - вернуть false.

const array16 = [1, 2, 3, 4, 5];
const number = 7;

function containsNumber(arr,num){
  for(const elem of arr){
    if(Number(elem) === num) {
      return true
    }
  }
  return false
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

const arrayRandom = []

function getRandomNumber(max,min) {
  return Math.floor(min + Math.random() * (max + 1 - min));
}

function addElementsInArray(arr) {
  const min = 15;
  const max = 78;
  for (i=0; i<10; i++){
    arr.push(getRandomNumber(max,min))
  }
}

addElementsInArray(arrayRandom)
console.log(arrayRandom)

// 5. Дан массив 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число. 

const array18 = [4, -2, 5, 19, -130, 0, 10]


function findMinMaxNunmer(arr) {
  let max = Number.MIN_VALUE;
  let min = Number.MAX_VALUE;

  for (let index = 0; index < array4.length; index++) {
  
    if (arr[index] > max) {
      max = arr[index];
    }
    if (arr[index] < min) {
      min = arr[index];
    }
}
return `min: ${min} max: ${max} `
}

console.log(findMinMaxNunmer(array18))



// 6. Дан массив arr. Найдите среднее арифметическое его элементов. Проверьте задачу на массиве с элементами 12, 15, 20, 25, 59, 79.

const array19 = [2, 15, 20, 25, 59, 79]

function averageArrayNumbers(arr) {
  
  let sum = arr.reduce(function(sum,current) {
    return sum+current  
  })
 
  return res = sum / arr.length;
}

console.log(averageArrayNumbers(array19))