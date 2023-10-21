/*
constructor (yapıcı):

Bir class'ın property'lerini dinamik bir şekilde initialize edebilmek için `new`
operatörü tarafından çağırılan özel bir fonksiyondur (methoddur).

>> Özellikler:

- constructor'ın dönüş türü yoktur çünkü `new` operatörü tarafından sadece bir kez
  invoke edilir. Sonradan tekrar invoke edilemez.

- constructor'da erişim belirteci kullanılabilir fakat bu her zaman tercih edilen
  birşey değildir. Bazı design pattern'larda bu yapılır ama bize pek lazım değil.

- `constructor` keywordü ayrılmış bir keyworddür ve bir classta iki adet
  constructor methodu bulunamaz.

- constructor parametre listesini class property'lerini doğrudan tanımlamak için
  kullanabiliriz. Detaylı anlatım ve örnekler aşağıdadır.

*/

class CreditCardInfo_1 {
  private cardNumber: string;
  private expireMonth: number;
  private expireYear: number;
  private securityCode: string;

  constructor(
    cardNumber: string,
    month: number,
    year: number,
    securityCode: string
  ) {
    this.cardNumber = cardNumber;
    this.expireMonth = month;
    this.expireYear = year;
    this.securityCode = securityCode;
  }

  method1() {}
}

const userCreditCardInfo = new CreditCardInfo_1("123123123123", 6, 2028, "432");
userCreditCardInfo.method1();

// constructor'ı kendimiz invoke edemeyiz, sadece `new` operatörü tarafından invoke edilebilir.
//userCreditCardInfo.constructor();

// cardNumber private olduğu için dışarıdan erişilemez, ama constrcutor'dan erişilebilir.
//userCreditCardInfo.cardNumber = "234523424234234";

/* constructor parametrelerini property olarak kullanmak:
constructor parametrelerinin önüne erişim belirteci yazarsak o parametre o class'ın property'si
olur.
*/
class ExampleClass_3 {
  prop1: string;

  constructor(
    // bu parametre aynı zamanda class property'si oldu.
    public param1: string, //

    // bu parametre sadece constructor parametresidir, property değildir.
    param2: string, //

    // aşağıdaki iki pametre hem constructor parametresi hem de class property'sidir.
    public param3: number, //
    private param4: object //
  ) {}

  method1() {
    console.log(this.param4);
  }
}
const obj_8 = new ExampleClass_3("foo", "bar", 10, {});
obj_8.param3;

/* Soru: Obje property'si ile class property'si arasındaki fark nedir?
Cevap: Objeler o class'ın çalışan bir kopyası olduğu için obje property'si değer tutar,
class property'si ise sadece bir tanımlamadır.

*/
