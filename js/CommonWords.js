// ЕЩЁ ОДНА ЗАДАЧА, КОТОРАЯ СВЯЗАНА С РАБОТОЙ СО СЛОВАМИ

/*
Ваша функция должна находить все слова, которые появляются в обеих строках. 

Результат должен быть представлен, как строка со словами разделенными запятыми и отсортированными в алфавитном порядке.

Вх. данные: Два аргумента как строки (str).

Вых. данные: Общие слова как строка (str).


*/



function commonWords(first, second) {
    let str = "";
    let arr =  [...first.split(','), ...second.split(',')];
    let map = new Map();
    arr.forEach(a => map.set(a, (map.get(a) || 0) + 1));
    arr = Array.from(new Set(arr.filter(a => map.get(a) > 1))).sort();
    return str = arr.length > 1 ? arr.join(',') : arr.join('');
}



console.log(commonWords("hello,world", "hello,earth"))
console.log(commonWords("one,two,three", "four,five,six"));
console.log(commonWords("one,two,three", "four,five,one,two,six,three"));


//Более оптимальный вариант решения 

function commonWords(first, second) {    
    return first.split(",").filter(x => second.split(",").includes(x)).sort().toString();
}
