//5-1 Import

import {hello,showError} from './functions.js';

// Je renomme la fonction anonyme par default en 'anonymous' pour pouvoir l'utiliser
import {default as anonymous} from './functions.js';

hello();
showError('msg erreur!!!!!!!!!!!!!!!!!!!')
anonymous()

// 5-2 Export
import {sub,sum,multiply,divide,pow} from './math.js';
const [a, b] = [7, 9];

console.log(sub(a,b))
console.log(sum(a,b))
console.log(multiply(a,b))
console.log(divide(a,b))
console.log(pow(a,b))