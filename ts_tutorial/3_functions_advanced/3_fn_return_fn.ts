/* Fonksiyondan fonksiyon dönderilmesi:

Javascriptte (ve aynı zamanda typescriptte) bir fonksiyondan herhangi bir
değer dönderilebilir. Bunların içinde fonksiyonlar da vardır yani bir fonksiyondan
başka bir fonksiyon dönderilebilir. Örneğin aşağıdaki exampleFn_6 fonksiyonundan
bir anonim fonksiyon dönmektedir.
*/

function exampleFn_6() {
  console.log("Burası exampleFn_6'nın içi.");

  return () => {
    console.log("burası dönen fonksiyon içi.");
    return 10;
  };
}

const result_6 = exampleFn_6();
// result_6'da şuan bir anonim fonksiyon mevcut.
console.log(">>>  result_6:", result_6, typeof result_6);

// result_6 bir fonksiyon tuttuğu için onu invoke edebiliriz. Not: invoke
// etme işlemi parantezlerle yapılır.
result_6();

/* Örnekte görüldüğü üzere bir fonksiyondan yeni bir fonksiyon üretmek
ve bunu döndermek mümkün. Şimdi bu işlemin type'ını yazalım. */

type ExampleFnType_6 = () => () => void;

/* Önemli not: Aşağıdaki örnek sadece bir tane fonksiyon prototipi
tanımlanmıştır ve bundan void dönmektedir. Ama yukarıdaki örnekte
iki fonksiyon vardır ama ikinci fonksiyon birinci fonksiyondan
dönmektedir. void ise ikinci fonksiyonun dönüş türüdür. */
type ExampleFnType_7 = () => void;

const exampleFn_66: ExampleFnType_6 = (): (() => void) => {
  console.log("burası dış fonksiyon bölgesi.");
  console.log("Burada her türlü işlem yapılabilir.");

  return (): void => {
    console.log("test");
  };
};

const exampleFn_7: ExampleFnType_7 = () => {
  console.log("test");
};

type ExampleFnType_8 = () => void;

const exampleFunctions: ExampleFnType_8[] = [];
exampleFunctions.push(() => {
  console.log("sıfırıncı fonksiyon invoke edildi.");
});

exampleFunctions.push(() => {
  let result = 2 + 2;
  console.log(">>>  result:", result);
});

type ExampleTupleType_1 = [string, number, () => string];

const exampleTuple_1: ExampleTupleType_1 = [
  "test",
  10,
  () => {
    return "test";
  },
];
