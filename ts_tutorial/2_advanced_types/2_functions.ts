/* Fonksiyon türleri:

Typescriptte beş çeşit fonksiyon tanımlama yöntemi vardır. Bunlar farklı
kaynaklarda farklı isimlerle ifade ediliyor olsa bile kabaca şu şekilde
listeleyebiliriz:

1- Normal isimli fonksiyonlar
2- İsimsiz fonksiyonlar
3- Arrow fonksiyonlar
4- Tek satırda yazılabilen arrow fonksiyonlar
5- Immediate Call Function

Biz bunlardan 2, 3 ve 4. olanlar üzerinde duracağız. Çünkü bu fonksiyonlar
bir değişkene atanarak yazılan fonksiyonlardır ve dolayısıyla elimizde
bir değişken bir de atanan bir değer (yani fonksiyon) vardır. Her atanan
değerin türü olması gerektiği için fonksiyonların da türleri yazılabilir.

Not: Parametre listesindeki türler ile dönüş türünün aynı olma zorunluluğu
yoktur. Hepsi farklı türlerde olabilir.

*/

// Javascriptte yazılan örnek bir fonksiyon. Burada parametrelerin ve
// fonksiyonun dönüş türü belirtilmez.
//const sum_2 = (no1, no2) => {
//  return no1 + no2;
//};

/* Typescriptte hem parametrelerin türü hem de fonksiyonun dönüş türü
belrtilir. Bu sayede bir fonksiyonun prototipi (yani type'ı) bulunabilir. */
const sum_fn_1 = (no1: number, no2: number): number => {
  return no1 + no2;
};

const sum_fn_2 = (no1: number, no2: number): number => no1 + no2;

/* Bir fonksiyonun type'ını (yani prototipini) bulmak için iki unsur vardır.
Birincisi parametre listesi, ikincisi fonksiyonun dönüş türü. Bunları kullanarak
bir fonksiyonun type'ını yazabiliriz.

Örneğin aşağıdaki satırda iki parametresi olan ve geriye number dönderen
bir fonksiyon türü tanımladık: */
type SumFnType_1 = (no1: number, no2: number) => number;

const sum_fn_3: SumFnType_1 = (no1: number, no2: number): number => {
  console.log("sum_fn_3 çağırıldı");

  return no1 + no2;
};

/* Soru: Bir fonksiyondan hem hata fırlatma ihtimali var hem de hiçbirşey
döndermeme ihtimali var. Bu durumda bunun dönüş türü ne olur?

Cevap: void ile never türünü union olarak birleştiririz. Yani `void | never`
*/

/* Örnek: İki sayı ile matematiksel işlemler yapan fonksiyonların type'ını
tanımlayınız. */

type BasicMathOperationFnType = (no1: number, no2: number) => number;

const subtract_fn_1: BasicMathOperationFnType = (
  no1: number,
  no2: number
): number => {
  console.log("subtract_fn_1 çağırıldı");
  return no1 - no2;
};

/* Normalde bir type'a göre bir fonksiyon yazdığımızda bu fonksiyonun
parametrelerinin türleri ve dönüş türünü set ederiz. Ama bu mecburi
değildir. Çünkü değişkenin type'ı yukarıda belirlendiği için bu type'taki
tanımlamalar fonksiyon implementasyonuna otomatik olarak geçirilir.
Yani parametre listesindeki type'lar ve dönüş türü otomatik olarak
typescript tarafından belirlenir. Örneğin aşağıdaki implementasyonda
no1, no2 ve dönüş türü yazılmamıştır ama bu ifadeler `BasicMathOperationFnType`
type'ı vasıtasıyla orada vardırlar.
*/
const multiplication_fn_1: BasicMathOperationFnType = (no1, no2) => {
  return no1 * no2;
};

const result_1 = multiplication_fn_1(10, 20);
console.log(">>>  result_1:", result_1, typeof result_1);

const divide_fn_1: BasicMathOperationFnType = (no1, no2) => {
  return no1 / no2;
};

// Infinity (Sonsuzluk)
const result_2 = divide_fn_1(10, 0); // Sonuç: Infinity
console.log(">>>  result_2:", result_2, typeof result_2);

// NaN: Not a Number ifadesinin kısaltılmışı.
const result_3 = parseInt("test");
console.log(">>>  result_3:", result_3, typeof result_3);
