// -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru

//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
//  Приклад результату
//    {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//         attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//         ]

//    }

function Tags(titleOfTag, action) {
    this.aatitleOfTag = titleOfTag;
    this.actionOfTag = action;
    this.attrs = [];

    this.addAttr = function(titleOfAttr, actionOfAttr) {
        let attr = { title: titleOfAttr, action: actionOfAttr }
        this.attrs.push(attr)
    };

};
let a = new Tags("a", "предназначен для создания ссылок")
a.addAttr("href", "Задает адрес документа, на который следует перейти")
a.addAttr("target", "Имя окна или фрейма, куда браузер будет загружать документ")
a.addAttr("title", "Добавляет всплывающую подсказку к тексту ссылки")
console.log(a)

let div = new Tags("div", "предназначен для выделения фрагмента документа с целью изменения вида содержимого")
div.addAttr("align", "Задает выравнивание содержимого тега <div>")
div.addAttr("title", "Добавляет всплывающую подсказку к содержимому")
console.log(div)

let h1 = new Tags("h1", "HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка. Так, тег <h1> представляет собой наиболее важный заголовок первого уровня. Теги <h1>,...,<h6> относятся к блочным элементам, они всегда начинаются с новой строки, а после них другие элементы отображаются на следующей строке. Кроме того, перед заголовком и после него добавляется пустое пространство.")
h1.addAttr("align", "Определяет выравнивание заголовка")
h1.addAttr("title", "Добавляет всплывающую подсказку")
console.log(h1)

let span = new Tags("span", " с помощью тега <span> можно выделить часть информации внутри других тегов и установить для нее свой стиль")
span.addAttr("id", "Указывает имя стилевого идентификатора")
span.addAttr("style", "Применяется для определения стиля элемента с помощью правил CSS")
console.log(span)

let input = new Tags("input", "предназначен для создания текстовых полей, различных кнопок, переключателей и флажков")
input.addAttr("type", "Сообщает браузеру, к какому типу относится элемент формы")
input.addAttr("alt", "Альтернативный текст для кнопки с изображением")
input.addAttr("checked", "Предварительно активированный переключатель или флажок")
console.log(input)

let form = new Tags("form", "Связывает поле с формой по её идентификатору. ")
form.addAttr("id", "Идентификатор формы")
console.log(form)

let option = new Tags("option", "Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>.")
option.addAttr("disabled", "Заблокировать для доступа элемент списка")
option.addAttr("label", "Указание метки пункта списка")
option.addAttr("value", "Значение пункта списка, которое будет отправлено на сервер или прочитано с помощью скриптов")
console.log(option)

let select = new Tags("select", "Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором")
select.addAttr("size", "Количество отображаемых строк списка")
select.addAttr("form", "Связывает список с формой")
select.addAttr("required", "Список обязателен для выбора перед отправкой формы")
console.log(select)


// -  Створити класс  для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru

//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
//  Приклад результату
//    {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//         attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//         ]

//    }

class Tags {
    constructor(titleOfTag, action) {
        this.aatitleOfTag = titleOfTag;
        this.actionOfTag = action;
        this.attrs = [];
    }

    addAttr(titleOfAttr, actionOfAttr) {
        let attr = { title: titleOfAttr, action: actionOfAttr }
        this.attrs.push(attr)
    };
}

let a = new Tags("a", "предназначен для создания ссылок")
a.addAttr("href", "Задает адрес документа, на который следует перейти")
a.addAttr("target", "Имя окна или фрейма, куда браузер будет загружать документ")
a.addAttr("title", "Добавляет всплывающую подсказку к тексту ссылки")
console.log(a)

let div = new Tags("div", "предназначен для выделения фрагмента документа с целью изменения вида содержимого")
div.addAttr("align", "Задает выравнивание содержимого тега <div>")
div.addAttr("title", "Добавляет всплывающую подсказку к содержимому")
console.log(div)

let h1 = new Tags("h1", "HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка. Так, тег <h1> представляет собой наиболее важный заголовок первого уровня. Теги <h1>,...,<h6> относятся к блочным элементам, они всегда начинаются с новой строки, а после них другие элементы отображаются на следующей строке. Кроме того, перед заголовком и после него добавляется пустое пространство.")
h1.addAttr("align", "Определяет выравнивание заголовка")
h1.addAttr("title", "Добавляет всплывающую подсказку")
console.log(h1)

let span = new Tags("span", " с помощью тега <span> можно выделить часть информации внутри других тегов и установить для нее свой стиль")
span.addAttr("id", "Указывает имя стилевого идентификатора")
span.addAttr("style", "Применяется для определения стиля элемента с помощью правил CSS")
console.log(span)

let input = new Tags("input", "предназначен для создания текстовых полей, различных кнопок, переключателей и флажков")
input.addAttr("type", "Сообщает браузеру, к какому типу относится элемент формы")
input.addAttr("alt", "Альтернативный текст для кнопки с изображением")
input.addAttr("checked", "Предварительно активированный переключатель или флажок")
console.log(input)

let form = new Tags("form", "Связывает поле с формой по её идентификатору. ")
form.addAttr("id", "Идентификатор формы")
console.log(form)

let option = new Tags("option", "Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>.")
option.addAttr("disabled", "Заблокировать для доступа элемент списка")
option.addAttr("label", "Указание метки пункта списка")
option.addAttr("value", "Значение пункта списка, которое будет отправлено на сервер или прочитано с помощью скриптов")
console.log(option)

let select = new Tags("select", "Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором")
select.addAttr("size", "Количество отображаемых строк списка")
select.addAttr("form", "Связывает список с формой")
select.addAttr("required", "Список обязателен для выбора перед отправкой формы")
console.log(select)

// -Створити об 'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'
// єм двигуна.додати в об 'єкт функції:
//     --drive() - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
//     --info() - яка виводить всю інформацію про автомобіль
//     --increaseMaxSpeed(newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     --changeYear(newValue) - змінює рік випуску на значення newValue
//     --addDriver(driver) - приймає об 'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'
// єкт car

let car = {
    model: "модель",
    producer: "виробник",
    year: 2005,
    maxSpeed: 200,
    engineVolume: "20L",
    drive: function() {
        console.log("їдемо зі швидкістю" + this.maxSpeed + "км на годину")
    },
    info: function() {
        console.log(this);
    },
    increaseMaxSpeed: function(newSpeed) {
        this.maxSpeed += newSpeed
    },
    changeYear: function(newValue) {
        this.year = newValue
    },
    addDriver: function(driver) {
        this.driver = driver
    }
};
// car.drive = car.drive.toString()
// car.info = car.info.toString()
// car.increaseMaxSpeed = car.increaseMaxSpeed.toString()
// car.changeYear = car.changeYear.toString()
// car.addDriver = car.addDriver.toString()
// let s = JSON.stringify(car)    не знаю як передати і зловити функції через JSON, але може цього і не треба
// let car1 = JSON.parse(s)
// console.log(car1)
car.model = "toyota"
car.producer = "bjjjjj"
car.year = 5
car.maxSpeed = 10
car.engineVolume = 1
car.drive()
car.info()
car.increaseMaxSpeed(200)
car.changeYear(20000)
car.addDriver({ name: "Vasyl", age: 36 })


// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, 
// об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car


function Cars(model, producer, year, maxSpeed, engineVolume) {

    this.model = model,
        this.producer = producer,
        this.year = year,
        this.maxSpeed = maxSpeed,
        this.engineVolume = engineVolume,
        this.drive = function() {
            console.log("їдемо зі швидкістю" + this.maxSpeed + "км на годину")
        },
        this.info = function() {
            console.log(this);
        },
        this.increaseMaxSpeed = function(newSpeed) {
            this.maxSpeed += newSpeed
        },
        this.changeYear = function(newValue) {
            this.year = newValue
        },
        this.addDriver = function(driver) {
            this.driver = driver
        }
}

let car1 = new Cars("toyota", "toyota prod", 2003, 250, 52)
car1.info();
car1.increaseMaxSpeed(50);
car1.changeYear(2020);
car1.addDriver({ name: "vas", age: 26 })

// - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

class Cars {
    constructor(model, producer, year, maxSpeed, engineVolume) {
        this.model = model,
            this.producer = producer,
            this.year = year,
            this.maxSpeed = maxSpeed,
            this.engineVolume = engineVolume
    }
    drive() {
        console.log("їдемо зі швидкістю" + this.maxSpeed + "км на годину")
    }
    info() {
        console.log(this);
    }
    increaseMaxSpeed(newSpeed) {
        this.maxSpeed += newSpeed
    }
    changeYear(newValue) {
        this.year = newValue
    }
    addDriver(driver) {
        this.driver = driver
    }
}
let car1 = new Cars("toyota", "toyota prod", 2003, 250, 52)
car1.info();
car1.increaseMaxSpeed(50);
car1.changeYear(2020);
car1.addDriver({ name: "vas", age: 26 })

// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом

class Cinderella {
    constructor(name, age, footSize) {
        this.name = name,
            this.age = age,
            this.size = footSize
        this.cidnerellas = []
    }

}
let cidnerella1 = new Cinderella("Vika1", 25, 35)
let cidnerella2 = new Cinderella("Vika2", 26, 36)
let cidnerella3 = new Cinderella("Vika3", 28, 37)
let cidnerella4 = new Cinderella("Vika4", 18, 38)
let cidnerella5 = new Cinderella("Vika5", 29, 39)
let cidnerella6 = new Cinderella("Vika6", 26, 40)
let cidnerella7 = new Cinderella("Vika7", 30, 36)
let cidnerella8 = new Cinderella("Vika8", 35, 42)
let cidnerella9 = new Cinderella("Vika9", 32, 37)
let cidnerella10 = new Cinderella("Vika10", 55, 41)

let cinderellas = [cidnerella1, cidnerella2, cidnerella3, cidnerella4, cidnerella5, cidnerella6, cidnerella7, cidnerella8, cidnerella9, cidnerella10]

class Prince {
    constructor(name, age, shoeSize) {
        this.name = name,
            this.age = age,
            this.size = shoeSize
    }
}
let prince1 = new Prince("Vasyl", 25, 40)

for (const iterator of cinderellas) {
    if (iterator.size === prince1.size) {
        console.log(`Cinderella ${iterator.name} must be with prince ${prince1.name}`)
    }

}


// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить

// function Cinderella(name, age, footSize) {
//     this.name = name,
//         this.age = age,
//         this.footSize = footSize
// }

let cidnerella1 = new Cinderella("Vika1", 25, 35)
let cidnerella2 = new Cinderella("Vika2", 26, 36)
let cidnerella3 = new Cinderella("Vika3", 28, 37)
let cidnerella4 = new Cinderella("Vika4", 18, 38)
let cidnerella5 = new Cinderella("Vika5", 29, 39)
let cidnerella6 = new Cinderella("Vika6", 26, 40)
let cidnerella7 = new Cinderella("Vika7", 30, 36)
let cidnerella8 = new Cinderella("Vika8", 35, 42)
let cidnerella9 = new Cinderella("Vika9", 32, 37)
let cidnerella10 = new Cinderella("Vika10", 55, 41)

let cinderellas = [cidnerella1, cidnerella2, cidnerella3, cidnerella4, cidnerella5, cidnerella6, cidnerella7, cidnerella8, cidnerella9, cidnerella10]

function Prince(name, age, shoeSize) {
    this.name = name,
        this.age = age,
        this.shoeSize = shoeSize
    this.foundCinderella = function(arr) {
        for (const iterator of arr) {
            if (iterator.footSize === this.shoeSize) {
                console.log(`Cinderella ${iterator.name} must be with prince ${this.name}`)
            }

        }
    }
}
let prince1 = new Prince("Vasyl", 25, 40)
prince1.foundCinderella(cinderellas)