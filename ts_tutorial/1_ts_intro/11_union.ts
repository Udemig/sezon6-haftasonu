/* Union Type:

Normal şartlarda bir değişken sadece belirtilen bir türde değer alabilir.
Ama bazen değişkenler farklı türlerde değerler alması gerekebilir. Örneğin
bir değişken bazen number bazen string alabilir. Yada string veya null alabilir.
Veya bunun gibi farklı senaryolar olabilir.

Özellikler:
- Bir union type tanımlamak için pipe karakteri `|` kullanılır. Örn:
  string | number
  object | number | string
  string | null
  object | null

- Union typelarda taraflar hem type hem değer olabilir. Örn:
  string | 0 | 1 | 2
  number | "foo" | "bar" | "baz"
  "monday" | "tuesday" | "wednesday"

*/

// Örn: Sadece type'ların union ile birleştirilmesi:
let age_5: string | number;
age_5 = 40;
age_5 = 35;
age_5 = "orta yaşlı";
age_5 = "genç";

// Örn: Sadece değerlerin union ile birleştirilmesi:
let days_3: "pzt" | "sal" | "çrş" | "prş" | "cum";
days_3 = "pzt";
days_3 = "sal";

// Örn: Hem type hem değerleri union ile birleştirmek:
let age_6: number | "orta yaş" | "genç" | "yaşlı" | "çocuk";
age_6 = 40;
age_6 = 10;
age_6 = "yaşlı";
