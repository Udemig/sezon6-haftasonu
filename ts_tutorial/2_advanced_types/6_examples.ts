/* Şuana kadar fonksiyonlarla ilgili olarak gördüğümüz tüm konuları
örneklerle pekiştirelim. */

/* Soru: Hem sayı hem string olarak gönderilen parametreleri
bir rest param halinde alıp sonra bu stringleri number'a çeviren
ve sonucu konsole basan bir fonksiyon yazınız. Örn:

const result_1 = convertEverythingToNumber_1(
  10,
  20,
  "40",
  "ahmet",
  "mehmet",
  "",
  "1e4",
  "1_0_1",
  5_000_000
);
console.log(result_1); // [10, 20, 40, 10000, 101, 5000000]

- Bu fonksiyonun prototipini yazınız.
- Fonksiyonun implementasyonunu yazınız.

Not: Rest parametrede birden fazla type kullanabilmek için union type
yazın ve bu union ifadeyi paranteze alın. Örn: ...param1: (string | number)[]

-----------------
>> Prototip: Fonksiyonun türü yani head kısmı yani parametre listesi ve dönüş türünün
yazıldığı type.

>> İmplementasyon: Prototipe uygun şekilde yazılan ve gövdesi olan ve bir iş yapan
fonksiyonun kendisi.

*/

// - Bu fonksiyonun prototipini yazınız.
type ConvertToNumberFnType_1 = (...inputs: (string | number)[]) => number[];

// - Fonksiyonun implementasyonunu yazınız.
const convertToNumber_1: ConvertToNumberFnType_1 = (
  // rest parametrede parametrenin türü otomatik bulunmaz, bu yüzden kendimiz yazmamız gerekir.
  ...inputs: (string | number)[]
): number[] => {
  const result: number[] = [];

  inputs.forEach((item) => {
    // burada item'in türü `string | number`'dır.

    if (typeof item === "string") {
      // burada item'in türü stringdir.

      // string içerisindeki tüm alt çizgileri siliyoruz.
      // Örn: "1___0_1__2" ifadesini "1012" ifadesine çevirir.
      item = item.replace(/[_]/g, "");

      /* parseInt() fonksiyonu bir string sayıya çevrilebiliyorsa çevirir,
      çevrilemiyorsa `NaN` (not a number) dönderir. Her iki ifadenin türü
      de number'dır. Biz bir number'ın normal bir sayımı yoksa NaN mı olduğunu
      kontrol etmek için `isNaN()` fonksiyonunu kullanırız. */
      const parsed_number = parseInt(item);

      /* Eğer bu parse edilen değer NaN değilse result dizisine ekliyoruz. */
      if (!isNaN(parsed_number)) {
        result.push(parsed_number);
      }
    } else {
      // burada item'in türü number'dır.

      result.push(item);
    }
  });

  return result;
};

const numbers_result_1 = convertToNumber_1();
const numbers_result_2 = convertToNumber_1(10);
const numbers_result_3 = convertToNumber_1(10, 20, "30", "40", "test", "50");
const numbers_result_4 = convertToNumber_1("1e4", "1___0_1___2");

const n = 1e4;
console.log(n); // 10000

console.log(">>>  numbers_result_1:", numbers_result_1);
console.log(">>>  numbers_result_2:", numbers_result_2);
console.log(">>>  numbers_result_3:", numbers_result_3);
console.log(">>>  numbers_result_4:", numbers_result_4);
