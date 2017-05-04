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

## License

(The MIT License)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.