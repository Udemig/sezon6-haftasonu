/* Enum:

Ardarda sayılarak ifade edilebilen bilgilerin tutulduğu veri türüdür.
Ard arda saymaktan kasıt sınırlı miktarda olması ve peşpeşe söylenebilir
veya ifade edilebilir olması demektir. Örneğin sayılar bir iki üç dört gibi,
veya aylar ocak şubat mart nisan, veya haftanın günler, pazartesi salı
çarşamba gibi.

>> Önemli Not: Herhangi birşeye isim verirken kısa ve anlamlı olması tercih
edilmelidir. Örneğin MonthNamesEnum yerine MonthsEnum hatta sadece
Months isimlendirmesini tercih etmemiz daha uygundur.

>> Özellikleri:
- Az miktarda ve değişmeyecek olan dataları göstermek için kullanılabilir.

- Item'ların isimleri rakam ile başlayamaz ve özel karakter içeremez. Sadece
  alt tire içerebilirler ve alt tire ile başlayabilirler.

- Enum'lar arkaplanda sayıları kullandığı için itemlerin yazılış sırasına
  göre sayılar atanır. Default olarak ilk item sıfırdan başlar sonraki
  itemler bir arttırılarak sayısal değerlere sahip olurlar. Fakat bu
  başlangıç noktası değiştirilebilir.

- 


*/

enum MonthsEnum_1 {
  January,
  February,
  March,
  April,
  May,
  June,
  July,
}

/* Kullanım senaryoları: */

console.log(MonthsEnum_1.January); // 0
console.log(MonthsEnum_1[0]); // January
console.log(MonthsEnum_1[MonthsEnum_1.January]); // January

enum Days_1 {
  Mon = 1,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat,
  Sun,
}

console.log("Days_1.Tue: ", Days_1.Tue);

const today_1: Days_1 = Days_1.Mon;
console.log("today: ", today_1); // 0
console.log("today string:", Days_1[today_1]); // Mon

function printTodayName_1(today_2: Days_1) {
  console.log("Today: ", Days_1[today_2]);
}
printTodayName_1(Days_1.Sun);
printTodayName_1(Days_1.Wed);

function findWorkday_1(day: Days_1) {
  if (day === Days_1.Mon) {
    console.log("Firsth day of week is best day.");
  }

  switch (day) {
    case Days_1.Mon:
    case Days_1.Tue:
    case Days_1.Wed:
    case Days_1.Thu:
    case Days_1.Fri:
      console.log("Specified day is workday.");
      break;

    case Days_1.Sat:
    case Days_1.Sun:
      console.log("Enjoy your holiday.");
      break;
  }
}
findWorkday_1(Days_1.Mon);
findWorkday_1(Days_1.Sat);

/* Enum'lar normalde arkaplanda number'lar ile çalışır yani her item'e
bir sayısal ifade atanır. Fakat istersek stringler ile de çalışabiliriz.
Ama bu durumda her iteme ayrı ayrı string değerler vermemiz gerekir.
Ve dikkat edilmesi gereken bir diğer husus da bu set ettiğimiz değerleri
kullanarak enum'ın item'lerine ulaşamayız. */
enum ExampleEnum {
  FooItem = "foo",
  BarItem = "bar",
  BazItem = "baz",
}

// Burada değerden item'e ulaşmaya çalışıyoruz ama değerler string
// olduğu için ulaşamayız.
console.log(ExampleEnum["foo"]); // undefined

// Burada item'den değere ulaşmak mümkün.
console.log(ExampleEnum["FooItem"]); // foo

/*

>> Önemli Not: Aslında javascriptte dizi diye birşey yoktur, sadece
obje vardır. Diziler aslında `Array` class'ının objeleridir.

>> Önemli Not: Normalde typescriptte (hatta herhangi bir dilde) herşeyi
stringlerle göstermek mümkündür. Fakat bazı problemler bazı yöntemlerle
(bu yöntemler array, tuple, enum, object, hashmap, iterator, set... olabilir)
daha az enerji harcanarak çözülebilir. Bundan dolayı dilin bize sunduğu
imkanları olabildiğinde çok kullanarak daha hızlı şekilde bize verilen
projeleri yapabiliriz. Örneğin kullanıcı listesini bir string yazarak
aşağıdaki gibi virgülle ayrılmış şekilde tutmak mümkündür. Fakat bu
şekildeki kullanım daha fazla kod yazmamızı gerektirir. Bunun yerine
string dizisi kullanmak daha mantıklıdır.

  const students: string = "asya, botan, emre, esra, hasan, meryem";
  console.log(students.split(","));

*/
