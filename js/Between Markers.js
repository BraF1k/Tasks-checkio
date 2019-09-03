"Between Markers"

/*

Вам дана строка и два маркера (начальный и конечный). Вам необходимо найти текст, 
заключенный между двумя этими маркерами. Но есть несколько важных условий:

Начальный и конечный маркеры всегда разные
Если нет начального маркера, то началом считать начало строки
Если нет конечного маркера, то концом считать конец строки
Если нет ни конечного, ни начального маркеров, то просто вернуть всю строку
Если конечный маркер стоит перед начальным, то вернуть пустую строку


Input: Три аргумента. Все строки. Второй и третий аргументы это начальный и конечный маркеры.

Output: Строка.



*/

function betweenMarkers(text, begin, end) {

    if (text.includes(begin) && text.includes(end)) {
       return text.slice(text.indexOf(begin) + begin.length, text.indexOf(end)); //Ришение если присутствуют оба разделителя
    } else if (!text.includes(begin) && text.includes(end)) {
        return text.slice(0, text.indexOf(end));
    } else if (text.includes(begin) && !text.includes(end)) {
        return text.slice(text.indexOf(begin) + begin.length)
    } else {
        return text;
    }
   
}


console.log(betweenMarkers('What is >apple<', '>', '<'));
console.log(betweenMarkers("<head><title>My new site</title></head>", "<title>", "</title>"));
console.log(betweenMarkers('No[/b] hi', '[b]', '[/b]'));
console.log(betweenMarkers('No [b]hi', '[b]', '[/b]'));
console.log(betweenMarkers('No hi', '[b]', '[/b]'));
console.log(betweenMarkers('No <hi>', '>', '<'));


/*
 * БОЛЕЕ ОПТИМАЛЬНОЕ И КОМПАКТНОЕ РЕШЕНИЕ
 */

function betweenMarkers(text, begin, end) {
    return text.slice( text.includes(begin) ? text.indexOf(begin) + begin.length : 0, 
                       text.includes(end) ? text.indexOf(end) : text.length );
}
