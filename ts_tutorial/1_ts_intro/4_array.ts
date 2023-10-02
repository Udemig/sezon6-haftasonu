/* Array:

Sıralı şekilde ve boyutu artıp azalabilen veri türlerine dizi
denir. Köşeli parantez kullanarak tür ve değer ataması yapılır.
Belirli bir tür için dizi tanımlamak mümkündür. Örneğin sadece
string türündeki değerleri tutan yada sadece number türündeki
değerleri tutan diziler oluşturulabilir.

Bir dizi türü tanımlamak için önce o dizinin elemanlarının türünü
belirtmek gerekiyor. Hemen peşinden içi boş köşeli parantez ekliyoruz.
Böylece belirlediğimiz türden elemenalara sahip olan bir dizi
tanımlamış oluruz.

Özellikler:

- Farklı türleri alması gereken dizilerde union type kullanmak
  gerekiyor. Fakat bu union type'ın etrafını parantez ile çevrelemek
  gerekir. Örn: `const ages: (number | string | null)[] = []`

*/

const studentNames1: string[] = ["binali", "emre", "esra", "eyüp"];
studentNames1.push("hasan");
studentNames1.push("hayal");

const ages1: number[] = [];
ages1.push(30);
ages1.push(40);

const ages2: (number | string | null)[] = [];
ages2.push(20);
ages2.push("yaşlandım desene orhan");
ages2.push(null);
ages2.push(22);

/* Çok boyutlu dizi oluşturmak için tür tanımladığımız yerde
yine ikinci ve üçüncü boyutları göstermek amacıyla yeni köşeli
parantezler eklenmelidir. */
const twoDimensionArr: string[][] = [];
twoDimensionArr.push(["foo", "bar"]);
twoDimensionArr.push(["test"]);

const tableData: object[] = [];
tableData.push({
  id: 1,
  firstname: "test",
});
tableData.push({
  id: 2,
  firstname: "example",
});

// Kendi oluşturduğumuz custom type'ları da diziler içerisinde kullanmak
// mümkündür. Bu konuyu ilerleyen derslerde daha detaylı işleyeceğiz.
type UserData = {
  id: number;
  firstname: string;
  lastname: string;
};

const tableData2: UserData[] = [];

// any türünü dizilerle birleştirebiliriz. Bu sayede bu dizinin
// elemanları farklı türde değerler alabilir.
const data1: any[] = [1, "hasan", "özçelik", 27, "istanbul", 1993];
const data2: any[] = [2, "mehmet", "aslan", 26, "fatsa", 1996];
