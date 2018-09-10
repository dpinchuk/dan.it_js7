/*
 Реализовать функцию нахождения уникальных объектов в массиве при сравнении с другим массивом, по указанному пользователем свойству.

 Технические требования:
 - Написать функцию excludeBy(), которая в качестве первых двух параметров будет принимать на вход два массива с
 объектами любого типа, например:
 const users = [{
  name: "Ivan",
  surname: "Ivanov",
  gender: "male",
  age: 30
},
 {
    name: "Anna",
    surname: "Ivanova",
    gender: "female",
    age: 22
}]
 - В качестве третьего параметра функция должна принимать имя поля, по которому будет проводиться сравнение.
 - Функция должна вернуть новый массив, который будет включать те объекты из первого массива, значение указанного
 свойства которых не встречается среди объектов, представленных во втором массиве. Например, вызов функции
 excludeBy(peopleList, excluded, 'name') должен возвращать массив из тех пользователей peopleList,
 имя которых (свойство name) не встречается у пользователей, которые находятся в массиве excluded.
*/

const users = [
    {
        name: "Ivan",
        surname: "Ivanov",
        gender: "male",
        age: 30
    },
    {
        name: "Anna",
        surname: "Ivanova",
        gender: "female",
        age: 22
    },
    {
        name: "Dima",
        surname: "Pinchuk",
        gender: "male",
        age: 39
    },
    {
        name: "Vita",
        surname: "Vitas",
        gender: "female",
        age: 30
    }
];

const people = [
    {
        name: "Gerasim",
        surname: "Mu-mu",
        gender: "male",
        age: 30,
        position: "dogger"
    },
    {
        name: "Miron",
        surname: "Flaviy",
        gender: "male",
        age: 44,
        position: "philosopher"
    },
    {
        name: "Anna",
        surname: "Ivanova",
        gender: "female",
        age: 23,
        isGood: true
    },
    {
        name: "Vita",
        surname: "Vitas",
        gender: "female",
        age: 30
    },
    {
        name: "Vita",
        surname: "Mitas",
        gender: "female",
        age: 30
    },
    {
        name: "Aaron",
        surname: "Vitas",
        gender: "male",
        age: 33
    }
];

let excludeBy = (arr1, arr2, field) => {
    let fieldItem = [];
    let newArr = [];

    arr1.forEach((item) => {
        fieldItem.push(item[field])
    });

    arr2.forEach((item) => {
        let isNotCoincidence = true;
        for (let i = 0; i < fieldItem.length; i++) {
            if (item[field] === fieldItem[i]) {
                isNotCoincidence = false;
                break;
            }
        }
        if (isNotCoincidence) {
            newArr.push(item);
        }
    });
    return newArr;
};

let arr = excludeBy(users, people, "name");
console.log(arr);