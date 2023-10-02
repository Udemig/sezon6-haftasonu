/* Typescript:

Typescript dosyalarının uzantısı `.ts` veya `.tsx` olmalıdır. Ama biz bu dersleri
işlerken genelde ts uzantısını kullanacağız. tsx uzantısını da Reactjs'de kullanacağız.

Derleme işlemi: tsc (yani typescript compiler) programıyla typescript kodları
derlenir.

var: variable (değişken)
const: constant (sabit)
let: ödev olarak araştırınız, let ile var arasındaki
     farkı da araştırınız. Mülakatlarda soruluyor.

Kod yazarken Typescript dilini kullanırız ama çalıştırırken
typescript doğrudan çalışmaz, biz typescript'le yazılmış olan
kodları javascripte derleriz, sonra oluşan bu javascript dosyalarını
çalıştırırız. Javascript dosyalarını çalıştırmak için bir
Javascript Runtime Environment (JRE) kullanılır. Biz genelde
JRE olarak tarayıcıyı kullanıyoruz. Bunun dışında JRE olarak
Nodejs (v8), bun, deno kullanılabilir.

tsc komutuyla typescript dosyaları javascripte derlenir,
sonra bu derlenen javascript dosyasını da JRE ile çalıştırırız.
tsc programını bilgisayara kurmak için aşağıdaki komut
satırını terminale yazmamız gerekiyor:

  npm install -g typescript

Buradaki `-g` ifadesi `global` demektir yani bu paketi
sistemin geneline kurar. Eğer bu parametreyi eklemezsek
npm bu paketi `./node_modules` klasörüne kurar. Yani
şuanki klasörün altına node_modules isimli yeni bir
klasör oluşturur ve bunun içerisine kurar.

*/
console.log("merhaba typescript");
const x: string = "test";
const arr: (string | number | boolean)[] = ["test", "foo", "bar", true, 10];
let y = "deneme";

console.log("x: ", x);
console.log("y: ", y);
console.log("arr: ", arr);
