const R = require('ramda')

var matches={
  'Shch':'Щ',
  'shch':'щ',
  'zgh':'зг',
  'tsk': 'цьк',
  'yye':'ие',
  'oye': 'оє',
  'nky\\b':'ньки',
  'iie': 'іє',
  '’ye':'`є',
  '’ya':'`я',
  '’yi':'`ї',
  'pie':"п'є",
  'skyi\\b':'ський',
  '\\bZgh':'Зг',
  '\\Byi\\B': 'иї',
  '\\Bmia\\B':"м'я",
  '\\Baie\\B':'ає',
  '\\Bkhai\\B':'хай',
  'aiv\\b':'аїв',
  'ie': '\'є',
  'sk': 'ськ',
  'Zh':'Ж',
  'zh':'ж',
  'Kh':'Х',
  'kh':'х',
  'Ts':'Ц',
  'ts':'ц',
  'Ch':'Ч',
  'ch':'ч',
  'Sh':'Ш',
  'sh':'ш',
  'iu':'ю',
  'ia':'я',
  'oi':'ої',
  'yo':'йо',
  'ya':'я',
  'yi\\B': 'ї',
  '\\bYe': 'Є',
  '\\bye': 'є',
  '\\bYi': 'Ї',
  '\\byi': 'ї',
  '\\bYu': 'Ю',
  '\\bYa': 'Я',
  'ii\\b':'ій',
  'yi\\b':'ий',
  'yy\\b':'ий',
  '\\bY': 'Й',
  'A':'А',
  'a':'а',
  'B':'Б',
  'b':'б',
  'V':'В',
  'v':'в',
  'H':'Г',
  'h':'г',
  'G':'Ґ',
  'g':'ґ',
  'D':'Д',
  'd':'д',
  'E':'Е',
  'e':'е',
  'Z':'З',
  'z':'з',
  'Y':'И',
  'y':'и',
  'I':'І',
  'i':'і',
  'K':'К',
  'k':'к',
  'L':'Л',
  'l':'л',
  'M':'М',
  'm':'м',
  'N':'Н',
  'n':'н',
  'O':'О',
  'o':'о',
  'P':'П',
  'p':'п',
  'R':'Р',
  'r':'р',
  'S':'С',
  's':'с',
  'T':'Т',
  't':'т',
  'U':'У',
  'u':'у',
  'F':'Ф',
  'f':'ф',
  '`':'’'
};



let convert = (word)=>{

  let result = word;
  R.mapObjIndexed((num, key, obj)=>{
    const reg =  new RegExp(key, 'g');
    const _result = result
    result = result.replace(reg,obj[key]);
    if (_result!= result) console.log(result, obj[key])
  },matches)

  return result.trim()
}


module.exports = convert