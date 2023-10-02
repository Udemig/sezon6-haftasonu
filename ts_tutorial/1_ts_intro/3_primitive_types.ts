/* Primitive Types:

Javascript'in kendisinde mevcut olan temel typelara primitive types
denir. Bunları şu şekilde sıralayabiliriz:

- string
- number
- boolean
- object
- null
- undefined
- symbol

Not: null ve undefined genelde diğer typelarla birlikte kullanılırlar.
Yani tek başlarına kullanılmazlar. Çünkü mantıksal olarak hiçbirşey
ömür boyu null veya undefined olamaz, geçici bir süreliğine olur.
Buna binaen bu türler diğer türlerle birleşerek union type oluşturur
ve bu şekilde kullanılırlar (union konusunu ilerleyen zamanlarda
daha detaylı şekilde işleyeceğiz).

*/

let obj_1: object = {};
console.log(">>>  obj_1:", obj_1, typeof obj_1);

obj_1 = {
  id: "test",
};
console.log(">>>  obj_1:", obj_1, typeof obj_1);

obj_1 = {
  id: 10,
};
console.log(">>>  obj_1:", obj_1, typeof obj_1);

obj_1 = {
  firstname: "test",
  lastname: "example",
};
console.log(">>>  obj_1:", obj_1, typeof obj_1);

/* Değer ile referans arasındaki fark: */
let foo_4 = {
  prop1: "test",
  prop2: "example",
};

let obj_2 = {
  id: 1,
  foo_4,
};

let obj_3 = obj_2;
let obj_4 = obj_3;
let obj_5 = obj_4;
// Burada shallow copy yapıyoruz, deep copy değil.
let obj_6 = { ...obj_2 };
obj_6.foo_4.prop1 = "merhaba";
console.log(foo_4.prop1);

obj_5.id = 2;

console.log(obj_2.id);
console.log(obj_3.id);
console.log(obj_4.id);
console.log(obj_5.id);

let x1 = 10;
let x2 = x1;
let x3 = x2;
let x4 = x3;
let x5 = x4;
x5 = 20;

console.log(x1);
console.log(x2);
console.log(x3);
console.log(x4);
console.log(x5);

console.log("---------------------------");

// null türünün JS'de ve TS'deki davranışları farklı olabilir.
let foo_5: object | null = null;
console.log(">>>  foo_5:", foo_5, typeof foo_5);

foo_5 = { id: 1 };
console.log(">>>  foo_5:", foo_5, typeof foo_5);

foo_5 = null;
console.log(">>>  foo_5:", foo_5, typeof foo_5);
