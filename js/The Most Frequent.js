// НАЙТИ САМОЕ ЧАСТОЕ ЗНАЧЕНИЕ В МАССИВЕЕ


/* Определите наиболее часто встречающийся элемент в последовательности.

Input: НЕТ ПУСТЫХ МАССИВОВ.

Output: сТРОКА.
*/

"The Most Frequent"

function mostFrequent(data) {
    let freq = new Map();
    let max = 0;

    data.forEach(element => {
        freq.set(element, (freq.get(element) || 0) + 1)
    });

    for (let val of freq) {
        if (val[1] > max) {
            freq = val[0];
            max = val[1];
        }
    }

    return freq;
}


console.log(mostFrequent([
    'a', 'b', 'c',
    'a', 'b',
    'a'
]))