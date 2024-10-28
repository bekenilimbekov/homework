// ### Задача 3: Фильтрация чисел больше 10
// Задача:  
// Дан массив чисел.Используйте filter, чтобы создать новый массив, содержащий только числа больше 10.

// Пример:  
// Для массива[5, 12, 8, 20, 3] новый массив должен быть[12, 20].
// const num = [5, 12, 8, 20, 3]
// const numFilter= num.filter(num =>{
//    return num > 10
// })
// console.log(numFilter)

// ---

// ### Задача 4: Фильтрация по наличию определённой буквы
// Задача:  
// Создайте массив строк.Используйте filter, чтобы создать новый массив, который содержит только 
// строки, начинающиеся с буквы "А"(регистр букв не учитывать).

//     Пример:  
// Для массива['апельсин', 'яблоко', 'арбуз', 'банан'] новый массив должен быть['апельсин', 'арбуз'].
// const fruit= ['апельсин', 'яблоко', 'арбуз', 'банан']
// const fruitlong = fruit.filter(fruit =>
//     fruit.toLowerCase(). startsWith('a'))
// console.log(fruitlong)

// ---

// ### Задача 5: Фильтрация объектов по возрасту
// Задача:  
// Дан массив объектов, где каждый объект представляет собой пользователя с полями name и age.Используйте filter,
//  чтобы создать новый массив, содержащий только тех пользователей, которым больше 18 лет.

// const people = [
//     { name: "John", age: 17 },
//     { name: "Jane", age: 22 },
//     { name: "Mark", age: 19 },
//     { name: "Anna", age: 16 },
//     { name: "Bob", age: 24 }
// ];
// const peopleOld = people.filter(people =>
//     people.age > 18)
// console.log(peopleOld)
// ### Задача 1: Фильтрация чётных чисел
// Задача:  
// Дан массив чисел. Используйте filter, чтобы создать новый массив, содержащий только чётные числа.

// Пример: 
// новый массив должен быть [2, 4, 6]. 
// const num = [1, 2, 3, 4, 5, 6] 
// const numEven = num.filter(num => 
//     num % 2 === 0 
// )
// console.log(numEven)

// ---

// ### Задача 2: Фильтрация строк по длине
// Задача:  
// Создайте массив строк. Используйте filter, чтобы создать новый массив, который содержит только те строки, длина которых больше 3 символов.

// Пример:  
// Для массива ['кот', 'собака', 'тигр', 'лев'] новый массив должен быть ['собака', 'тигр'].
// const animal = ['кот', 'собака', 'тигр', 'лев']
// const animalShort = animal.filter(animal => 
//     animal.length > 3
// )
// console.log(animalShort)