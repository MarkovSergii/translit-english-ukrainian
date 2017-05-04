const assert = require('assert')
const expect = require('expect')

const R = require('ramda')
const convert = require('../index')

describe('Проверка обратного преобразования слов', function() {

    let correctMapping = {
      'Алушта':'Alushta',
      'Андрій':'Andrii',
      'Борщагівка':'Borshchahivka',
      'Борисенко':'Borysenko',
      'Вінниця':'Vinnytsia',
      'Володимир':'Volodymyr',
      'Гадяч':'Hadiach',
      'Богдан':'Bohdan',
      'Згурський':'Zghurskyi',
      'Ґалаґан':'Galagan',
      'Ґорґани':'Gorgany',
      'Донецьк':'Donetsk',
      'Дмитро':'Dmytro',
      'Рівне':'Rivne',
      'Олег':'Oleh',
      'Есмань':'Esman',
      'Єнакієве':'Yenakiieve',
      'Гаєвич':'Haievych',
      'Короп\'є':'Koropie',
      'Житомир':'Zhytomyr',
      'Жанна':'Zhanna',
      'Жежелів':'Zhezheliv',
      'Закарпаття':'Zakarpattia',
      'Казимирчук':'Kazymyrchuk',
      'Медвин':'Medvyn',
      'Михайленко':'Mykhailenko',
      'Іванків':'Ivankiv',
      'Іващенко':'Ivashchenko',
      'Їжакевич':'Yizhakevych',
      'Кадиївка':'Kadyivka',
      'Йосипівка':'Yosypivka',
      'Стрий':'Stryi',
      'Олексій':'Oleksii',
      'Київ':'Kyiv',
      'Коваленко':'Kovalenko',
      'Лебедин':'Lebedyn',
      'Леонід':'Leonid',
      'Миколаїв':'Mykolaiv',
      'Маринич':'Marynych',
      'Ніжин':'Nizhyn',
      'Наталія':'Nataliia',
      'Одеса':'Odesa',
      'Онищенко':'Onyshchenko',
      'Полтава':'Poltava',
      'Петро':'Petro',
      'Решетилівка':'Reshetylivka',
      'Рибчинський':'Rybchynskyi',
      'Суми':'Sumy',
      'Соломія':'Solomiia',
      'Тернопіль':'Ternopil',
      'Троць':'Trots',
      'Ужгород':'Uzhhorod',
      'Уляна':'Uliana',
      'Фастів':'Fastiv',
      'Філіпчук':'Filipchuk',
      'Харків':'Kharkiv',
      'Христина':'Khrystyna',
      'Біла Церква':'Bila Tserkva',
      'Стеценко':'Stetsenko',
      'Чернівці':'Chernivtsi',
      'Шевченко':'Shevchenko',
      'Шостка':'Shostka',
      'Кишеньки':'Kyshenky',
      'Щербухи':'Shcherbukhy',
      'Гоща':'Hoshcha',
      'Гаращенко':'Harashchenko',
      'Юрій':'Yurii',
      'Корюківка':'Koriukivka',
      'Яготин':'Yahotyn',
      'Ярошенко':'Yaroshenko',
      'Костянтин':'Kostiantyn',
      'Знам\'янка':'Znamianka', 
      'Феодосія':'Feodosiia'
    }

  R.mapObjIndexed((num, key, obj)=>{
    it('должно вернуть '+key+' если мы передали '+obj[key], function() {

      expect(key).toMatch(convert(obj[key]));

    });
  },correctMapping)
});
