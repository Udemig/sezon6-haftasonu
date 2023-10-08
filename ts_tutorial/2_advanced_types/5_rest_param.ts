/* Rest Parameter:

Parametre miktarının değişken olduğu durumlarda rest parametre tanımlanır.
Bu sayede normalde sabit olan parametre listesini daha değişken olmasını
sağlayabiliriz. Örneğin `console.log()` fonksiyonunu çağırırken belirli
bir miktarda parametreyle çağırmayız. Sınırsız miktarda parametre gönderebiliriz.
Bunu sağlayan bu fonksiyonun içerisindeki bir rest parametredir.

*/

function exampleFn7(param1: string, param2: number): void {
  console.log(param1);
  console.log(param2);
}

exampleFn7("test", 10);
//exampleFn7();
//exampleFn7("test", 10, 10);

console.log();
console.log("test");
console.log("test", "foo", "bar", "baz");

/* Rest parametre tanımlamak için üç nokta (spread) ile başlanır. Sonra
parametre ismi yazılır ve türü yazılır. Tür mutlaka dizi olmak zorundadır.
Çünkü bu fonksiyonu invoke etme esnasında gönderilen tüm parametreler
bir dizi haline dönüştürülür ve bu parametreye aktarılır. */
function exampleFn8(...param1: string[]) {
  console.log(">>>  param1:", param1);
}

exampleFn8();
exampleFn8("foo");
exampleFn8("foo", "bar");
exampleFn8("foo", "bar", "baz");

// Normalde spread operatörü bir dizi veya objenin elemanlarını parçalamak
// için kullanılır. Ama bu operatör fonksiyon parametresinde kullanılırsa
// o zaman tam tersi işlem yapar ve değerleri biriktirme işini yapar.
const foo = [1, 2, 3, 4];
const [item1, item2, item3, item4] = [...foo];

/* Not: Rest parametreler her zaman fonksiyondaki parametre listesinin
en sonunda bulunmalı. Çünkü fonksiyonu invoke ederken gönderilen tüm
değerler bu rest parametreye dizi olarak aktarılacağı için restten sonra
tanımlanan parametrelere hiçbir değer ulaşamaz. Bu yüzden rest parametreden
sonra bir parametre tanımlamak mantıksızdır. Örneğin aşağıdaki fonksiyon
hata verir. Çünkü rest parametre her zaman fonksiyonun son parametresi
olmalıdır. 

function exampleFn9(
  param1: string,
  ...param2: number[], // bu satırda hata verir
  param3: object
): void {}

// param3'e hiçbir değer ulaşamaz ve tüm değerler param2'ye gider.
exampleFn9("test", 20, 30, 40, 50);

*/
