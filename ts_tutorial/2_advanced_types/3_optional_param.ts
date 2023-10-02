/* Optional Param:

Normalde bir fonksiyonu kullanırken tüm parametrelerine değer göndermek
zorunluluğu vardır. Fakat bu zorunluluğu iptal edebiliriz. Yani bazı
parametreleri isteğe bağlı şekilde set edilebilir hale getirebiliriz.

Özellikler:

- Bir parametreyi opsiyonel yapabilmek için parametrenin sonuna soru
  işareti (?) eklenir.

- Opsiyonel bir parametreden sonra required bir parametre yazılamaz.

- Opsiyonel parametreden sonra opsiyonel parametre yazılabilir. Dolayısıyla
  parametreleri opsiyonel yaparken en sondan başlanarak opsiyonel yapılmalı.


*/

function getFullName(
  firstname: string,
  lastname: string,
  middlename?: string
): string {
  let fullname = firstname;

  if (middlename) {
    fullname += " " + middlename;
  }

  fullname += " " + lastname;

  return fullname;
}

console.log(getFullName("meryem", "gezici"));
console.log(getFullName("emir", "köksalan", "buğra"));

/* Fonksiyonu çağırırken değerler sırasıyla parametrelere gönderilir. Dolayısıyla
parametre listesinde ortalarda bir opsiyonel parametre olamaz. Opsiyonel parametreler
her zaman listenin sonunda olmalı. */

function exmapleFn5(param1: string, param2?: string, param3?: string): string {
  return "test";
}

exmapleFn5("foo");
exmapleFn5("foo", "bar");
exmapleFn5("foo", "bar", "baz");
exmapleFn5("foo", "baz");

/* Opsiyonel parametrelerin fonksiyon type'ında kullanılmalı: */
