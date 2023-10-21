/* static property ve methodlar:

Normal şartlarda bir class elemanına (property veya method) erişebilmek için önce yeni bir
obje oluşturmamız gerekir. Sonra bu obje vasıtasıyla elemanlara erişebiliriz. Fakat bazen
obje oluşturmadan da class elemanlarına erişmemiz gerekebilir. Bunu yapabilmek için
`static` keywordünü kullanırız.

>> Özellikler:

- static elemanlar class tanımlandığı anda hafızada yer kaplarlar. Dolayısıyla bir static
  elemana erişmek için yeni bir obje oluşturmaya gerek yoktur.

- static elemanlara erişmek için class ismi kullanılır (yani objeye gerek yoktur).

- Bir static methoddan sadece diğer static olan elemanlara erişim vardır.

- static methodlarda `this` operatörü kullanılabilir ama sadece diğer static elemanlara
  erişim vardır, static olmayan elemanlara erişemeyiz.

- static elemanlar farklı objeler oluşturulsa bile tektir.


*/

class ExampleClass_6 {
  prop1: string = "foo";
  static prop2: string = "bar";

  static counter: number = 0;
  static increaseCounter() {
    this.counter++;
  }

  method1() {
    console.log("method1 invoked.");

    /* method1() static olmadığı için burada `this` operatörünü kullanabiliriz. */
    console.log(this.prop1);
  }

  static method2() {
    /* static bir method içerisinde this kullanırsak bu şuanki class'a işaret eder,
    fakat burada dikkat edeceğimiz şey this ifadesi objeyi değil class'ı gösterir. Static
    olmayan bir methodda this kullanırsak o objeyi gösterir. */
    console.log("static method2 invoked.");
    console.log(this.prop2);
    ExampleClass_6.prop2;
  }

  printCounter() {
    console.log("counter: ", ExampleClass_6.counter);
  }
}

// method2 static bir elemandır ve buna ulaşmak için class'ın ismini kullanırız.
ExampleClass_6.method2();

const obj_12 = new ExampleClass_6();
// method1 static olmadığı için mecburen yeni bir obje oluşturup bu obje
// vasıtasıyla erişiyoruz.
obj_12.method1();

const obj_13 = new ExampleClass_6();
const obj_14 = new ExampleClass_6();
const obj_15 = new ExampleClass_6();

ExampleClass_6.increaseCounter();
obj_12.printCounter();
obj_13.printCounter();
obj_14.printCounter();
