"Three Words"

/*

Дана строка со словами и числами, разделенными пробелами (один пробел между словами и/или числами). Слова состоят только из букв. Вам нужно проверить есть ли в исходной строке три слова подряд. Для примера, в строке "start 5 one two three 7 end" есть три слова подряд.

Входные данные: Строка со словами (str).

Выходные данные: Ответ как логическое выражение (bool), True или False.


*/

function threeWords(data) {
    let arr = null;
    let count = 0;

    arr = data.split(' ').map(elem => +elem);

    for (let i = 0; i < arr.length; i++) {
        if (isNaN(arr[i])) {
            count++;
        } else if (!isNaN(arr[i]) && count < 3) {
            count = 0;
        }
    }

    return count >= 3 ? true : false;
}

console.log(threeWords("Hello World hello"));
console.log(threeWords("He is 123 man"));
console.log(threeWords("1 2 3 4"));
console.log(threeWords("bla bla bla bla"));
console.log(threeWords("Hi"));