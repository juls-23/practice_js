// concat
//     1. Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.


const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const array3 = array1.concat(array2);

// reverse
//     2. Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].

array1.reverse();


// push, unshift
//     3. Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.

const array4 = [1, 2, 3];

array2.forEach(element => {
   array4.push(element)
});


//     4. Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.

const array5 = [1, 2, 3];

array2.forEach(element => {
  array5.unshift(element)
});

// Для обратного порядка добавления
// array2.reverse().forEach(element => {
//   array5.unshift(element)
// });

// shift, pop
//     5. Дан массив ['js', 'css', ‘html']. Выведите на экран первый элемент и удалите его.

const array6 = ['js', 'css', 'html'];

console.log(array6[0])
array6.shift()


//     6.  Дан массив ['js', 'css', ‘html']. Выведите на экран последний элемент и удалите его.

const array7 = ['js', 'css', 'html'];

console.log(array7[array7.length-1])
array7.pop()

// slice
//     7. Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].

const array8 = [1, 2, 3, 4, 5];

const newArray8 = array8.slice(0,3)


//     8. Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].

const newArray9 = array8.slice(3)

// splice
//     9.  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].


const array9 = [1, 2, 3, 4, 5];

array9.splice(1,2)



//     10. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].

const array10 = [1, 2, 3, 4, 5];

const newArray10 = array10.splice(1,3)


//     11.  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].

const array11 = [1, 2, 3, 4, 5];

array11.splice(3, 0, 'a', 'b', 'c')

//     12.  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].

const array12 = [1, 2, 3, 4, 5];

array12.splice(1,0, 'a', 'b');
array12.splice(6,0, 'c');
array12.splice(8,0, 'e');

// sort
//     13. Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.

const array13 = [3, 4, 1, 2, 7];

array13.sort()


// Object.keys
//     14. Дан объект {js:'test', jq: 'hello', css: 'world'}. Получите массив его ключей.
const arratKeys = []
const object1 = {
  js:'test',
  jq: 'hello', 
  css: 'world'
}

for (obj in object1){
  arratKeys.push(obj)
}




