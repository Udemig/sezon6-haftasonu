/* Önceki derslerin kısa tekrarını yapacağız.
 */

var isim: string;
isim = "meryem";
isim = "esra";
isim = "emre";

var names: string[];
names = ["emre", "hasan", "hayal"];

let userServer: [number, number, number, number, number] = [
  192, 168, 1, 100, 8080,
];

let kullaniciIP: [string, number] = ["192.168.1.100", 8080];
var adres: [string, number, string] = ["emre", 33, "istanbul"];

/* Soru: Array ile Tuple arasındaki farklar nedir?
Cevap: Dizi aynı türdeki öğeleri saklamak için kullanılır. Ama tuple
her itemin türü ayrı ayrı belirtilir. Tuple sınırlı miktarda veri tutulması
gerektiği zaman kullanılır ve bu miktarın uzun süre değişmeyecek olması
gerekir. Örneğin IPv4 adresindeki veri miktarı her zaman dört adettir,
RGB renk kodları her zaman üç tanedir gibi.

*/

let address: {
  sehir: string;
  isim: string;
  age: number;
} = {
  sehir: "izmir",
  isim: "osman",
  age: 28,
};
