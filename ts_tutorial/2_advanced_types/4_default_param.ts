/* Default parameter:

Fonksiyon parametrelerine ilk değer vererek bu parametreyi yine opsiyonel
yaparız ama eğer invoke esnasında bu parametreye bir değer gönderilmezse
o zaman bizim atadığımız değer geçerli olur.

Not: Bu yöntemi daha önceden redux'ta state değişkenine initialState
değerini atayarak yapıyorduk.

Özellikler:

- Default değeri atanmış olan parametreler otomatik olarak opsiyonel olur.
  Bundan dolayı parametrenin sonuna soru işareti eklenmez.

- Normal şartlarda default parametrenin türünü belirlemek zorunluluğu yoktur.
  Çünkü type inference'tan dolayı bu parametreye atanan değerin türü bu parametrenin
  türü olmuş olur. Fakat parametreler fonksiyon içerisinde kullanılırken farklı
  türde değerler atanması gerekirse o zaman bu parametrenin type'ını union
  olarak belirlemek gerekir.

*/

function exmapleFn6(
  param1: string,
  param2?: string,
  param3?: string,
  param4: string | number = "qux"
): string {
  console.log("-------------");
  console.log("param2", param2);
  console.log("param3", param3);
  console.log("param4", param4);

  param4 = 10;

  return "test";
}

exmapleFn6("foo");
exmapleFn6("foo", "bar");
exmapleFn6("foo", "bar", "baz");
exmapleFn6("foo", "bar", "baz", "test");
exmapleFn6("foo", "bar", "baz", "hasan");
