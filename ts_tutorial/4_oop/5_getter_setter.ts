/* getter & setter methodlar:

Private veya protected olan property'lere kontrollü bir şekilde erişilebilmesini ve set edilebilmesini
sağlayabilmek için özelleştirilmiş methodlara getter/setter methodlar denir. Typescriptte getter ve
setter method tanımlamak için iki yöntem kullanılır. Birincisi normal fonksiyonları kullanarak ve bu
fonksiyonların isimlerinin içerisine "get" veya "set" yazarak yapmak. İkinci yöntem ise typescript'le
beraber gelen yeni bir sintaks olan `get` ve `set` modifierlarını kullanmak.

>> Özellikler:
- Genel kullanım yöntemi olarak methodların önüne `get` veya `set` eki eklenir. Yani mesela prop1'i
  okumak için getProp1(), yazmak için de setProp1() isimleri verilir. Bu mecburi değildir ama genel
  kullanım yöntemidir.

- Birinci yöntemde methodları biz kendimiz invoke ederiz, ikinci yöntemde ise yapılan işleme göre
  (atama veya okuma) typescript tarafından methodlar otomatik invoke edilir.
- 
- 
- 
- 
- 


*/

/* Yöntem 1: Normal methodlar kullanarak getter/setter yazmak: */

class ExampleClass_4 {
  private prop1: string = "";
  private prop2: number = 0;

  /* Örnek getter fonksiyon */
  getProp1() {
    console.log("getProp1 invoked.");

    return this.prop1;
  }

  /* Örnek setter fonksiyon. */
  setProp1(prop1: string) {
    console.log("setProp1 invoked.");

    this.prop1 = prop1;
  }
}

const obj_5 = new ExampleClass_4();
obj_5.setProp1("foo");
console.log(obj_5.getProp1());

/* Yöntem 2: Typescript'le beraber gelen yeni yöntemi kullanarak getter/setter methodu yazmak: */
class ExampleClass_5 {
  private _prop2: string = "";

  /* Bu yöntemle oluşturulan bir getter methodundan mutlaka bir değer dönderilmeli. Bu değer
  bir class property'si olabilir veya dinamik olarak oluşturulmuş herhangi bir değer olabilir. */
  get prop1() {
    return "";
  }

  get prop2() {
    console.log("get prop2 invoked.");

    return this._prop2;
  }

  set prop2(param1: string) {
    console.log("set prop2 invoked.");
    this._prop2 = param1;
  }
}

const obj_11 = new ExampleClass_5();
// Atama yaptığımızda set fonksiyonu invoke olur.
obj_11.prop2 = "bar";

const foo = obj_11.prop2;

// okuma yaptığımızda get fonksiyonu invoke olur.
console.log(obj_11.prop2);
