/* `never` type:

Bir fonksiyondan hata fırlatılma durumu varsa bu fonksiyonun dönüş türü
`never` olmalıdır.

*/

/* Exception Handling:

Bir fonksiyonu durdurmanın iki yolu vardır. Birincisi bu `return`
ifadesini kullanmak. İkincisi de `throw` ifadesini kullanmak.

*/

function exampleFn_5(param1: number) {
  console.log("exampleFn_5 çağırıldı.");

  if (param1 == 0) {
    return "sıfır girildi";
  }

  console.log("Girilen parametre: ", param1);

  return param1 * param1;
}

exampleFn_5(1);
console.log("---------");
exampleFn_5(0);

function exampleFn_6(param1: number): never | number {
  console.log("exampleFn_6 çağırıldı.");

  if (param1 == 0) {
    throw new Error("Parametre sıfır girilemez.");
  }

  console.log("Girilen parametre: ", param1);

  return param1 * param1;
}

exampleFn_6(1);
console.log("---------");

try {
  exampleFn_6(0);
} catch (error) {
  console.log("Bir hata oluştu: ", error);
}
console.log("---------");

function exampleFn_7(errorMessage: string): never {
  throw new Error(errorMessage);
}

try {
  exampleFn_7("örnek hata mesajı");
} catch (error: any) {
  console.log(error.message);
}

console.log("---------");
console.log("Program bitti.");
