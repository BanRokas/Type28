const someRandomFunction = () => {
  console.log('Hello world!');
}

/*document
  .querySelector('#elementas')
  .addEventListener('mouseover', () => {
    console.log('H2 got mouse over it');
  });*/

/*
  pavadinimasIsKeliuZodziu - camelCase
  pavadinimas_is_keliu_zodziu - snakeCase
  pavadinimas-is-keliu-zodziu - kebabCase (negalima JS'e)
*/

const htmlList0 = document.querySelector('#list0');
console.log(htmlList0);
console.dir(htmlList0);


// Kintamieji

var skaicius = 5+3; // 8
let zodis = 'Labas rytas';
const tiesa = true;
const skaiciuMasyvas = [1,5,4,8,6,7,15,16,1,61,31,6,156,51];
const asmuo = {
  vardas: "Rokas",
  pavarde: "Banaitis",
  amzius: 28,
  vedes: false,
  pomegiai: ['gaming', 'programming', 'sports', 'jogging', 'puzzles', 'reading', 'dancing'],
  gyvenamojiVieta: {
    salis: "Lietuva",
    miestas: "Kaunas",
    gatve: "Karaliau Mindaugo pr.",
    namoNumeris: 54
  }
}

console.groupCollapsed('String skaičius');
let skaicius0 = 20;
let neSkaicius = '5';
console.log(20+'5'); // '205'
console.log(20-'5'); // 15
console.log('5'*1); // 5
console.log('5'/1); // 5
console.log(Number('5')); // 5
console.log(parseInt('5.11')); // 5
console.log(parseFloat('5.11')); // 5.11
console.groupEnd();



console.groupCollapsed('Loginiai operatoriai');
console.log(true); // true
console.log(!true); // false
console.log(9 > 5); // false
console.log(!(9 > 5)); // true
console.log(true && false); // false
console.log(true && true); // true
console.log(true || false); // true
console.log(false || false); // false
console.groupEnd();


// const vartotojoAmzius = Number(window.prompt('Kiek tau metų?'));
// console.log(vartotojoAmzius);
// console.log(typeof(vartotojoAmzius)); // 'number'
// if(vartotojoAmzius >= 18){
//   console.log('Pilnametis');
// } else if(vartotojoAmzius < 0){
//   console.log('Nesiskaito');
// } else if(isNaN(vartotojoAmzius)){
//   console.log('Prašome įvesti skaičių');
// } else {
//   console.log('Ne pilnametis');
// }

// vartotojoAmzius > 18 ? console.log('Pilnametis') : console.log('Ne pilnametis');

// const vartotojoLytis = window.prompt('Kokia jūsų lytis?');
// switch(vartotojoLytis){
//   case 'Moteris':
//     console.log('Jūsų lytis yra moteriškoji.');
//     break;
//   case 'Vyras':
//     console.log('Jūsų lytis yra vyriškoji.');
//     break;
//   default:
//     // console.log('Prašome įvesti "Moteris" arba "Vyras".');
//     // console.log("Prašome įvesti 'Moteris' arba 'Vyras'.");
//     console.log(`Prašome įvesti "Moteris" arba "Vyras".`);
// }

console.group('For Ciklas');

for(let i = 0; i < 10; i++){
  console.log('Labas', i);
}
for(let i = 0; i < asmuo.pomegiai.length; i++){
  console.log(asmuo.pomegiai[i]);
}

console.groupEnd();