/* Tuple:

Her bir indexinin türünün ayrı ayrı tanımlandığı dizilere tuple denir.
Buradaki amaç boyutu az ve değişmeyecek olan dataları işlerken kolaylık
sağlamaktır.

Normalde dizi tanımlaması tür ve hemene peşinden içi boş köşeli parantez
yazılarak yapılır. Fakat tuple'da öyle değil. Tuple tanımlarken doğrudan
köşeli parantez yazılır ve köşeli parantezin içindeki her bir indexin
türü ayrı ayrı verilir. Bu türler farklı olabilir. Bu farklılık tuple
ile dizi tanımının arasındaki en büyük farktır.

Tuple'lar aslında arrayleri kullanır, yani array'lerin özelleştirilmiş
bir versiyonu (hali) gibi düşünebiliriz. Tuple'ın diğer anlamı eleman
sayısı sabit olan dizi demektir.

Özellikler:

- Her bir elemanın türü ayrı ayrı belirtilir.
- Dizilere benzerler bu yüzden dizi methodları kullanılabilir. Fakat
  push() methodunu kullanmamak gerekir. Çünkü tuple'ın amacı doğrultusunda
  tutulacak olan değer miktarı değişmemesi gerektiği için push() methodunu
  kullanmak mantıksal hataya sebep olur.
- Tuple'daki her indexteki değerin varoluş amacını bildiğimiz için o indexe
  sayısal olarak doğrudan ulaşarak o değer üzerinde işlem yapabiliriz (örneğin
  atama yapmak veya okuma yapmak gibi).
- 

*/

const arr1: string[] = ["foo", "bar", "baz", "qux", "quux"];
const tuple1: [string, number, boolean, object, string, boolean] = [
  "test",
  1990,
  true,
  {}, // boş obje de yine bir objedir.
  "", // boş string de yine bir stringdir.
  false,
];

const color1: [number, number, number] = [0, 255, 0];
const ip1: [number, number, number, number] = [192, 168, 123, 132];

const birthDay1: [number, string, number] = [1, "Jan", 2001];
// yıl bilgisini tutan indexin değerini değiştirdik (atama yaptık)
birthDay1[2] = 2002;
// yıl bilgisini tutan indexe okuma yaptık.
console.log(birthDay1[2]);

console.log("-----------------------------");

// tuple'larda destruct yapılabilir:
const [day, month, year] = birthDay1;
console.log(">>>  day:", day);
console.log(">>>  month:", month);
console.log(">>>  year:", year);

/*
Örneğin useState() fonksiyonundan iki elemana sahip bir tuple döner.
Bu tuple'ı kullanırken destruct yaparak kullanırız böylece hem state
hem setter fonksiyonunu değişkenler ile alabiliriz.

  const [counter, setCounter] = useState(0)

useState() fonksiyonundan dönen değeri bir değişkene alarak da kullanabiliriz.
Fakat o zaman kullanım zor olur. Bu yüzden destruct yöntemini kullanmak
daha rahat olacaktır.

  const stateResult = useState(0)
  stateResult[0]
  stateResult[1](2)

*/
