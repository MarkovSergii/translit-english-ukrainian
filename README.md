[![Build Status](https://travis-ci.org/MarkovSergii/translit-english-ukrainian.svg?branch=master)](https://travis-ci.org/MarkovSergii/translit-english-ukrainian)

# translit-english-ukrainian
Util for transliteration from english to ukrainian

Про впорядкування транслітерації з латиницi на українську
(згідно з постановою Кабінету Міністрів України від 23.12.2015 р. N 1121)

##### http://search.ligazakon.ua/l_doc2.nsf/link1/KP100055.html

---
## Installation
```
$ npm install translit-english-ukrainian --save
```
## Usage
```
const convert = require('translit-english-ukrainian')

let word = 'Shcherbukhy';
let result = convert(word); 

console.log(result);  // Щербухи
```

## Test results
```
> node_modules/mocha/bin/mocha test/index

  Проверка обратного преобразования слов
    ✓ должно вернуть Алушта если мы передали Alushta
    ✓ должно вернуть Андрій если мы передали Andrii
    ✓ должно вернуть Борщагівка если мы передали Borshchahivka
    ✓ должно вернуть Борисенко если мы передали Borysenko
    ✓ должно вернуть Вінниця если мы передали Vinnytsia
    ✓ должно вернуть Володимир если мы передали Volodymyr
    ✓ должно вернуть Гадяч если мы передали Hadiach
    ✓ должно вернуть Богдан если мы передали Bohdan
    ✓ должно вернуть Згурський если мы передали Zghurskyi
    ✓ должно вернуть Ґалаґан если мы передали Galagan
    ✓ должно вернуть Ґорґани если мы передали Gorgany
    ✓ должно вернуть Донецьк если мы передали Donetsk
    ✓ должно вернуть Дмитро если мы передали Dmytro
    ✓ должно вернуть Рівне если мы передали Rivne
    ✓ должно вернуть Олег если мы передали Oleh
    ✓ должно вернуть Есмань если мы передали Esman
    ✓ должно вернуть Єнакієве если мы передали Yenakiieve
    ✓ должно вернуть Гаєвич если мы передали Haievych
    ✓ должно вернуть Короп'є если мы передали Koropie
    ✓ должно вернуть Житомир если мы передали Zhytomyr
    ✓ должно вернуть Жанна если мы передали Zhanna
    ✓ должно вернуть Жежелів если мы передали Zhezheliv
    ✓ должно вернуть Закарпаття если мы передали Zakarpattia
    ✓ должно вернуть Казимирчук если мы передали Kazymyrchuk
    ✓ должно вернуть Медвин если мы передали Medvyn
    ✓ должно вернуть Михайленко если мы передали Mykhailenko
    ✓ должно вернуть Іванків если мы передали Ivankiv
    ✓ должно вернуть Іващенко если мы передали Ivashchenko
    ✓ должно вернуть Їжакевич если мы передали Yizhakevych
    ✓ должно вернуть Кадиївка если мы передали Kadyivka
    ✓ должно вернуть Йосипівка если мы передали Yosypivka
    ✓ должно вернуть Стрий если мы передали Stryi
    ✓ должно вернуть Олексій если мы передали Oleksii
    ✓ должно вернуть Київ если мы передали Kyiv
    ✓ должно вернуть Коваленко если мы передали Kovalenko
    ✓ должно вернуть Лебедин если мы передали Lebedyn
    ✓ должно вернуть Леонід если мы передали Leonid
    ✓ должно вернуть Миколаїв если мы передали Mykolaiv
    ✓ должно вернуть Маринич если мы передали Marynych
    ✓ должно вернуть Ніжин если мы передали Nizhyn
    ✓ должно вернуть Наталія если мы передали Nataliia
    ✓ должно вернуть Одеса если мы передали Odesa
    ✓ должно вернуть Онищенко если мы передали Onyshchenko
    ✓ должно вернуть Полтава если мы передали Poltava
    ✓ должно вернуть Петро если мы передали Petro
    ✓ должно вернуть Решетилівка если мы передали Reshetylivka
    ✓ должно вернуть Рибчинський если мы передали Rybchynskyi
    ✓ должно вернуть Суми если мы передали Sumy
    ✓ должно вернуть Соломія если мы передали Solomiia
    ✓ должно вернуть Тернопіль если мы передали Ternopil
    ✓ должно вернуть Троць если мы передали Trots
    ✓ должно вернуть Ужгород если мы передали Uzhhorod
    ✓ должно вернуть Уляна если мы передали Uliana
    ✓ должно вернуть Фастів если мы передали Fastiv
    ✓ должно вернуть Філіпчук если мы передали Filipchuk
    ✓ должно вернуть Харків если мы передали Kharkiv
    ✓ должно вернуть Христина если мы передали Khrystyna
    ✓ должно вернуть Біла Церква если мы передали Bila Tserkva
    ✓ должно вернуть Стеценко если мы передали Stetsenko
    ✓ должно вернуть Чернівці если мы передали Chernivtsi
    ✓ должно вернуть Шевченко если мы передали Shevchenko
    ✓ должно вернуть Шостка если мы передали Shostka
    ✓ должно вернуть Кишеньки если мы передали Kyshenky
    ✓ должно вернуть Щербухи если мы передали Shcherbukhy
    ✓ должно вернуть Гоща если мы передали Hoshcha
    ✓ должно вернуть Гаращенко если мы передали Harashchenko
    ✓ должно вернуть Юрій если мы передали Yurii
    ✓ должно вернуть Корюківка если мы передали Koriukivka
    ✓ должно вернуть Яготин если мы передали Yahotyn
    ✓ должно вернуть Ярошенко если мы передали Yaroshenko
    ✓ должно вернуть Костянтин если мы передали Kostiantyn
    ✓ должно вернуть Знам'янка если мы передали Znamianka
    ✓ должно вернуть Феодосія если мы передали Feodosiia


  73 passing (30ms)
```

## License

(The MIT License)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.