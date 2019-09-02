"Easy Unpack"


/*
Ваше задание здесь создать функцию, которая получает массив(Array) и возвращает набор с 3 элементами - первым, третьим, вторым с конца.

Входные данные: Набор длинной не менее 3 элементов.

Выходные данные: Набор элементов.

*/


function easyUnpack(elements) {
    return [elements[0], elements[2], elements[elements.length - 2]];
}


console.log(easyUnpack([1, 2, 3, 4, 5, 6, 7, 9]))