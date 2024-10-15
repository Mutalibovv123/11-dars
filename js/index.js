// 1-masala
// function kvadrat(a) {
// return a ** 2
// }
// let res = kvadrat(5);
// console.log(res);

// 2-masala

// function sum(a,b) {
//     return a + b;
// }
// let res = sum(5,6);
// console.log(res);

// 3-masala
// let name = prompt("Ismingizni kirting");
// function firstName() { 
//   console.log("Salom, " + name); 
// }
// firstName(); 

// 4-masala

// function big(a,b) {
//      if (a > b) {
//         return a;
//      } else {
//         return b;
//      }
// }
// let res = big(34,35);
// console.log(res);

// 5-masala
// function massiveSum(massive) {
//     let sum = 0;
//     for (let i = 0; i < massive.length; i++) {
//         sum += massive[i]; 
//     }
//     return sum;
// }
// let sonlar = [12,34,5,5,6,6,7,7,];
// sonlarSum = massiveSum(sonlar)
// console.log(sonlarSum);

// 6-masala
// let son = +prompt("Sonni kirtiting");
// function musbat_manfiy(son) {
//     if (son > 0 ) {
//          return "Musbat";
//     } else {
//         return "Manfiy";
//     }
// }
// let res = musbat_manfiy(son);
// console.log(res);

// 7-masala
// let text = prompt("Matnni kiriting"); 
// function uzunlik(matn) { 
//   return matn.length; 
// }
// let res = uzunlik(text);
// console.log(res);

// 8-masala

// let string1 = "Salom";
// let string2 = "Salom";
// function birlashtirish(collect) {
//     return string1 + string2
// }
// let res = birlashtirish(string1,string2)
// console.log(res);

// 9-masala

// function kichik(massiv) {
//     let engKichik = massiv[0];
//     for (let i = 1; i < massiv.length; i++) {
//       if (massiv[i] < engKichik) {
//         engKichik = massiv[i]; 
//       }
//     }
//     return engKichik;
//   }

//   let sonlar = [5, 2, 8, 1, 9];
//   let small_number = kichik(sonlar);
//   console.log(small_number);

// 10-masala

// function teskari_string(matn) {
//     let teskari = "";
//     for (let i = matn.length - 1; i >= 0; i--) {
//      teskari += matn[i];
//     }
//     return teskari;
//    }
//    let text = "Mutalibov";
//    let res = teskari_string(text);
//    console.log(res);

// Function masalalar

// 1-masala
// function massivChiqar(sonlari) {
//     for (let i = 0; i <= sonlari.length; i++) {
//         console.log(sonlari[i]);
//     }

// }
// let sonlar = [1,2,3,4,5,5,6,6];
// let res = massivChiqar(sonlar)
// console.log(res);

// 2-masala

// function engKatta(katta) {
//     let eng_katta = katta[0];
//     for (let i = 1; i < katta.length; i++) {
//         if (katta[i] > eng_katta) {
//             eng_katta = katta [i]
//         }
//     }
// return eng_katta
// }
// let massive = [1,23,4,4,5,5,56,66,];
// let res = engKatta(massive);
// console.log(res);

// 3-masala

// function massivUzunligi(massive) {
//     return massive.length;
// }
// let sonlar = [1,2,3,34,4,5,5,6];
// let res = massivUzunligi(sonlar);
// console.log(res);

// 4-masala

// function yigindi(massive) {
//     sum = 0;
//     for(let i = 0; i < massive.length; i++) {
//              sum += massive[i];
//     }
//     return sum
// }
// let sonlar = [1,23,4,5,5,6,7,7,8];
// let res = yigindi(sonlar);
// console.log(res);

// 5-masala


// function elementSoniniHisobla(massive, element) {
//     let counter = 0;
//     for (let i = 0; i < massive.length; i++ ) {
//         if (massive[i] == element) {
//             counter ++;
//         } 
//     }
// return counter
// }
// let sonlar = [1,2,3,4,5,5,667,88,5,6,8,5,];
// let find = 5;
// let res = elementSoniniHisobla(sonlar, find)
// console.log(res);

// 6-masala

// function toqSonlar(massive) {
//     let newMassive = [];
//     for (let i = 0 ; i < massive.length; i ++) {
//         if (massive[i] % 2 == 1) {
//             newMassive.push(massive[i])
//         }
//     }
//     return newMassive;
// }
// let sonlar = [1,2,3,4,5,6,7,8,9,10,122];
// let res = toqSonlar(sonlar);
// console.log(res);

// 7-masala

// function teskariTartib(massive) {
//     for (let i = 0; i < massive.length; i++) {
//         massive.sort(function(a,b) {
//            return b - a
//         })
//     }
//     return massive
// }
// let sonlar = [1,2,3,4,5,5,6,7,5,4,6,53];
// let res = teskariTartib(sonlar);
// console.log(res);

// 8-masala

// function manfiySonlarniAjratish(massive) {
//     let newMassive = []
//     for (let i = 0; i < massive.length; i++) {
//         if (massive [i] < 0 ) {
//             newMassive.push(massive[i])
//         }
//     }
//     return newMassive
// }
// let sonlar = [-1,-2,-3,4,5,6,7,8,];
// let res = manfiySonlarniAjratish(sonlar);
// console.log(res);

// 9-masala

// function oxirgiElementiOlibTashlash(massive) {
//     let newMassive = [];
//     for (let i = 0; i < massive.length; i++) {
//        newMassive.push(massive[i]);
//        massive[i].pop();
//     }

//     return newMassive;
// }
// let sonlar = [1,3,4,5,6,7,7,65,4,3,2,2,3,4,4]
// let res = oxirgiElementiOlibTashlash(sonlar);
// console.log(res);

// 10-masala

// function yangiElement(massive, element) {

//     for (let i = 1; massive.length; i++) {
//         let res = [];
//          res.push(element);
//     }
//     return res;
// }
// let sonlar = [2,4,5,6,6,77,54,12,34,5,6,7,7,6,5,4,];
// let result = yangiElement(sonlar, 12);
// console.log(result);

// masala
function musbatSonlar(massive) {
    sum = 0;
    for (let i = 0; i < massive.length; i++) {
        if (massive[i] > 0) {
            sum += massive[i]
        }
    }
    return sum;
}
let sonlar = [1, 2, 3, 4, 5, 5, 56, 6,];
let res = musbatSonlar(sonlar);
console.log(res);
































