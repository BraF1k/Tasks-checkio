/*

Дана строка и нужно найти ее первое слово.


Строка состоит только из английских символов и пробелов.
В начале и в конце строки пробелов нет.
Входные параметры: Строка.

Выходные параметры: Строка.

*/


function betweenMarkers(text, begin, end) {

    return text.slice(text.indexOf(begin) + 1, text.indexOf(end));

}

console.log(betweenMarkers('What is >apple<', '>', '<'))