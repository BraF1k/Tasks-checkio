/*
Нужно найти анаграммы

Анаграмма - слово или словосочетание, образованное путём перестановки букв, составляющих другое слово (или словосочетание).
"Примеры анаграмм: «пила» и «липа», «пост» и «стоп»"

*/

const convert = str => str.toLowerCase().match(/\w/g).sort().join('');
const anagram = (strA, strB) => strA !== '' && strB !== '' && convert(strA) === convert(strB);

/**
 * Как мен кажется это удобное и локаничное ришение этой задачи.
 */