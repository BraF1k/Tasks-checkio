"Bigger Price"


/*
Дана таблица всех доступных продуктов на складе. Данные представлены в виде массива объектов (array of objects)

Ваша миссия тут - это найти ТОП самых дорогих товаров. Количество товаров, которые мы ищем, будет передано в первом аргументе, а сами данные по товарам будут переданы вторым аргументом.

Вх. данные: Число и массив объектов (Integer and array of objects). У каждого объекта 2 атрибута "name" и "price"

Вых. данные: Такой же как и второй аргумент.

*/


function biggerPrice(limit, data) {
    let resArr = data.sort((a,b) => b.price > a.price ? 1 : -1);
    resArr.length = limit;
    return resArr;
}

console.log(biggerPrice(2, [{
        "name": "bread",
        "price": 100
    },
    {
        "name": "wine",
        "price": 138
    },
    {
        "name": "meat",
        "price": 15
    },
    {
        "name": "water",
        "price": 1
    }
]))