/* any, void, never typeları:

>> any type:
Adından da anlaşılacağı üzere bu türde tanımlanmış olan değişken herhangi
bir türde değer alabilir.

Özellikler:
- Her türde değer alması gereken değişkenler için kullanıllır.

- any olarak tanımlanmış değişkenlerde otomatik tamamlama özelliği aktif
  olmaz. Bu açıdan baktığımızda editör aynı javascriptteki gibi davranır.

- Acil durumlarda uzun uzun tür tanımlama imkanı bulamadığımız zamanlarda
  işi hızlıca çözebilmek için değişkenlere geçici olarak `any` türünü
  verebiliriz. Fakat bu acil durum geçtikten sonra mutlaka any olarak
  tanımlanan bütün değişkenlerin türlerini doğru şekilde set etmek gerekir.
  Çünkü any'nin varlığı aslında typescripte aykırıdır.

- any türü bütün türleri kapsar bu yüzden union içerisinde any kullanıldığında
  o değişkenin türü yine any olacaktır. Yani any türünü union içerisinde
  kullanmanın bir anlamı yoktur çünkü zaten o değişken yine any olacaktır.

*/

let example_1: any = {
  id: 1,
  firstname: "foo",
};
console.log(">>>  example_1:", example_1);

example_1 = "test";
console.log(">>>  example_1:", example_1);

example_1 = 10;
console.log(">>>  example_1:", example_1);

example_1 = false;
console.log(">>>  example_1:", example_1);

// Örn burada union içerisinde kullandık ama bu sintaks olarak doğru olsa bile
// mantıksal olarak gereksizdir. Çünkü example_2 zaten şuan any türündedir.
let example_2: any | number;
example_2 = 10;
example_2 = "test";
example_2 = {};
example_2 = false;

/* void ve never type'ları:

void ve never type'lar fonksiyonların dönüş türleri olarak kullanılırlar.
Bir fonksiyonun dönüş türüne void atadığımızda bu fonksiyondan herhangi
bir değer dönmeyeceği anlamına gelir.

Bir fonksiyonun dönüş türüne never atadığımızda ise bu fonksiyondan
bir hata fırlatılma ihtimali olduğu anlamına gelir.

*/

function printLog_1(data: any): void {
  console.log(data);
}

function printLog_2(data: any) {
  console.log(data);
  return true;
}

function printLog_3(data: any) {
  console.log(data);
}

const result1 = printLog_1("test");
console.log(">>>  result1:", result1);

const result2 = printLog_2("test");
console.log(">>>  result2:", result2);

/* Burada result3'ün türünü typescript void olarak set eder. Fakat
JS tarafında bu değer undefined'dır. */
const result3 = printLog_3("test");
console.log(">>>  result3:", result3);
