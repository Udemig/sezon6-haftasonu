/* Immediate Call Function:

Normalde JS (veya TS)'te dört şekilde fonksiyon tanımlanır. Bunlar
aşağıda tanımlandığı gibidir ve bu şekilde tanımlanan fonksiyonlar
bir isme sahiptir, tanımlandığı anda kendi kendilerini çağırmazlar,
sonradan en az bir kez çağırılmaya ihtiyaç duyarlar.

Fakat bazı durumlarda fonksiyonun tanımlandığı anda çağırılması
ve sonra asla çağırılamaması gerekir. Bunu yapabilmek için
immediate call function (derhal çağırılan fonksiyon) yazmak
gerekir.

Örn: Reactjs'de 

*/

// Yöntem 1: Normal function (with name)
function exampleFn_1() {
  console.log("exampleFn_1 invoked.");
}

// Yöntem 2: Nameless (isimsiz) function
const exampleFn_2 = function () {
  console.log("exampleFn_2 invoked.");
};

// Yöntem 3: Arrow function
const exampleFn_3 = () => {
  console.log("exampleFn_3 invoked.");

  const x = 10 + 20;
  return x;
};

exampleFn_1();
exampleFn_1;

// Yöntem 4: Single line arrow function
const exampleFn_4 = () => 10;

console.log("exampleFn_4 result: ", exampleFn_4()); // 10

/* Sintaks şu şekildedir: */
(() => {
  console.log("Bu çıktı immediate call function tarafından üretildi.");
})();

(() => {
  console.log("Bu çıktı da yine ICF tarafından üretildi.");
})();

/* Obje propertylerine köşeli parantez sintaksıyla ulaşmak: */

const obj1: any = {
  prop1: "test",
  prop2: "example",
};

console.log(obj1["prop1"]);
console.log(obj1["prop2"]);
console.log(obj1.prop1);
console.log(obj1.prop2);
obj1[0] = "test";

console.log("obj1: ", obj1);
