/* Fonksiyon parametresine fonksiyon göndermek:

Öyle bir fonksiyon düşünün ki bunun parametresine bir fonksiyon
yazılabilir olsun. Buna örnek olarak dizilerde kullanılan map(),
forEach(), reduce() gibi fonksiyonları gösterebiliriz.

*/

const example_arr_4 = ["foo", "bar", "baz", "qux"];

const result_4 = example_arr_4.map(
  // map() fonksiyonunun parametresine başka bir fonksiyon gönderilir.
  (item, index, originalArr) => {
    return 10;
  }
  //
);
console.log(">>>  result_4:", result_4); // [10, 10, 10, 10]

/* Dizilerde sıklıkla kullandığımız map() fonksiyonunun görevini yapan
örnek bir map fonksiyonu türü. */
type MapFnType_1 = (
  param1: (item: any, index: number, originalArr: any[]) => any,
  param2: any[]
) => any[];

/* Örnek implementasyon. MapFnType_1 type'ını farklı şekillerde
implement edebiliriz. */
const mapFn1: MapFnType_1 = (
  param1: (item: any, index: number, originalArr: any[]) => any,
  param2: any[]
): any[] => {
  // şimdi fonksiyonu implement edelim.

  console.log(param1, param2);

  /* Bu bölgede elimizde bir fonksiyon (param1), bir de dizi (param2) mevcut.
  Burada şöyle birşey yapabiliriz. Bu diziyi döngü içerisinde dönelim, döndüğümüz
  her item'i param1 fonksiyonuna gönderip sonucu alalım, ve bu aldığımız sonuçları
  yeni bir dizide tutalım. */

  const collectedValues: any[] = [];

  for (let i = 0; i < param2.length; i++) {
    const currentItem = param2[i];

    const result = param1(currentItem, i, param2);

    collectedValues.push(result);
  }

  return collectedValues;
};

// Yazdığımız bu map fonksiyonunu farklı değerlerle birlikte invoke edelim:

const result1 = mapFn1(
  // param1
  (item, index) => {
    console.log(">> item: ", item);
    return 10;
  },
  // param2
  [1, 2, 3, 4, 5]
);
console.log(">>>  result1:", result1);

const result2 = mapFn1(
  // farklı fonksiyonlar gönderebildiğimizi göstermek için böyle bir örnek yazdım.
  (item) => {
    console.log("farklı bir fonksiyon göndermiş olalım.");
    console.log(item * 2);
    return item * 2;
  },
  [10, 20, 30]
);
console.log(">>>  result2:", result2);

const result3 = mapFn1(
  // farklı fonksiyonlar gönderebildiğimizi göstermek için böyle bir örnek yazdım.
  (item) => {
    return item + "_test";
  },
  ["foo", "bar", "baz", "qux"]
);
console.log(">>>  result3:", result3);

/* Örnek: Fonksiyon parametresine fonksiyon gönderme işleminin yapıldığı bir başka
örnek de useState() fonksiyonudur. Biz daha önceki yaptığımız projelerde genel olarak
useState fonksiyonuna ilk değeri doğrudan yazarız ama useState'e bir fonksiyon
göndererek de state atamasını yapmak mümkün.

// normal kullanım örneği:
const [counter, setCounter] = useState(0);

// fonksiyondan değer göndererek state belirlemek:
const [counter, setCounter] = useState(() => {
  // bu bölge useState'e gönderilen fonksiyonun içeriğidir.
  // burada bazı hesaplamalar yaptıktan sonra bu değeri döndeririz
  // ve bu dönen değer bizim state değerimiz olur.
  return 10;
})
*/

type UseStateFnType_1 = (
  param1: any | (() => any) // union yaptığımız için fonksiyonu parantez içine aldık
) => [
  any, // burası state datamız
  any // burası da aslında fonksiyon olmalı ama şimdilik any diyelim.
];

/* En basit haliyle örnek bir useState implementasyonu yazalım: */
const useState_1: UseStateFnType_1 = (param1: any | (() => any)) => {
  if (typeof param1 === "function") {
    console.log(
      "param1 bir fonksiyondur ve bu fonksiyonu invoke edip dönen değeri kullanacağız."
    );

    /* Fonksiyonu invoke edip dönen değeri yine aynı değişkene atıyoruz.
    Çünkü bu değişken hem değer içerebilir hem fonksiyon içerebilir. Ama
    eğer fonksiyon içeriyorsa useState'in çalışma mantığı gereği olarak
    bu fonksiyondan dönen değeri almalıyız. */
    param1 = param1();
  }

  console.log("param1'in değeri:", param1);

  return [param1, () => null]; // gerçek bir implementasyon yapmadığımız için
  // burası geçici olarak yazılmıştır.
};

const [foo, setFoo] = useState_1(10);
const [bar, setBar] = useState_1(() => {
  return "test";
});

console.log(">>>  foo:", foo); // 10
console.log(">>>  bar:", bar); // test
