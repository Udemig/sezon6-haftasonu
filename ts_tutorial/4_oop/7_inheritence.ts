/*
Inheritence (Kalıltım):

Bir class'ın başka bir class'a ait olan özellikleri (property ve method) miras almasına
kalıtım denir. Bunu yapabilmek için `extends` keywordü kullanılır. `extends` kelime anlamı
olarak "genişletmek" demektir. Bu durumda extend edilen class'a "parent" denir, extend
eden class'a da "child class" denir. Bu sadece isimlendirmek amacıyla kullanılan bir söylemdir.
Normalde kod içerisinde hepsi class'tır. Bu ifadeyi kısaca şu şekilde de düşünebiliriz:
extends ifadesinin sol tarafı child class, sağ tarafı parent class olur. Aslında bir class
tek başına düşünüldüğünde parent veya child olup olmadığını bilemeyiz. Ancak bu class'ın
başka bir class'a göre child mı yoksa parent mı olduğunu belirleyebiliriz. Örneğin aşağıda
ExampleClass_7 ExampleClass_8'in parentıdır, FooClass'ın child'ıdır.

>> Özellikler:

- Child class, parent class'ın private dahil bütün property'lerini miras alır (yani
  kendisine kopyalanır).

- Child class yeni özelliklere sahip olabilir (yani kendisine ait yeni property ve methodlar
  tanımlayabilir). Bu durumda parent class bu child class'taki özelliklere erişemez, fakat
  child class parent class'taki özelliklere erişmektedir.

- 


*/

class FooClass {}

class ExampleClass_7 extends FooClass {
  prop1: string = "foo";
  prop2: number = 55;
  prop3: boolean = true;

  method1() {
    console.log("ExampleClass_7::method1() invoked.");
  }

  method2() {
    console.log("ExampleClass_7::method1() invoked.");
  }
}

class ExampleClass_8 extends ExampleClass_7 {
  prop4: object = { foo: "foo", bar: "bar" };

  method3() {
    console.log("ExampleClass_8::method3() invoked.");
  }
}

const obj_20 = new ExampleClass_7();
const obj_21 = new ExampleClass_8();

console.log("obj_20 içerisindeki prop1 değeri: ", obj_20.prop1);
obj_20.method1();

console.log("obj_21 içerisindeki prop1 değeri: ", obj_21.prop1);
obj_21.method1();
obj_21.method3();

/*

Overriding Method & Property (Method ve property'leri ezmek):

Child class'lar parenttan gelen bütün özelliklere sahiptir ama bazen property'lerin
değerlerini değiştirmek ve methodlara da yeni implementasyonlar ekleyerek değiştirebilirler.
Bu değiştirme işlemine "override" (ezmek) denir.

*/

class ExampleClass_9 {
  prop1: string = "foo";
  prop2: number = 55;
  prop3: boolean = true;
  prop5: string | number | null | object = "foo 2";

  method1(param1: number, param2: string, param3: boolean): void {
    console.log("ExampleClass_9::method1() invoked.");
  }

  method2(foo: object, bar?: string): boolean {
    console.log("ExampleClass_9::method1() invoked.");

    return true;
  }
}

class ExampleClass_10 extends ExampleClass_9 {
  /* Parenttan gelen bir property'nin access modifier ve türü aynı olmak şartıyla değerini
  değiştirebiliriz (ezebiliriz). */
  public prop1: string = "bar";
  prop2: number = 100;

  /* Union type şeklinde tanımlanmış olan bir property'yi override ettiğimizde (ezdiğimize)
  bunun türünü belirlerken union değerleri kapsamında tür belirlememiz gerekir. Örneğin
  prop5'in parenttaki union kümesi dışındaki herhangi bir türü kullanamayız. Örneğin
  türünü boolean veremeyiz ama string verebiliriz çünkü string parenttan gelen union değerleri
  arasında mevcuttur. */
  prop5: string | number = 22;
  prop4: object = { foo: "foo", bar: "bar" };

  /* Methodlar override edilirken method prototipine (parametre listesi ve dönüş türü) ve
  erişim belirtecine bağlı kalınarak yeni bir implementasyon yazılarak override edilebilir.
  Bunu yaparken parametre isimlerini değiştirebiliriz, sadece parametrelerin türlerinin
  sırasını değiştiremeyiz. Bu kurallara constructor methodu da değil değildir. */
  public method1(p1: number, p2: string, p3: boolean): void {
    console.log("ExampleClass_10::method1() invoked.");
    console.log(">>>  p1:", p1);
    console.log(">>>  p2:", p2);
    console.log(">>>  p3:", p3);

    console.log("--------------------------");
  }

  method3() {
    console.log("ExampleClass_10::method3() invoked.");
    console.log("--------------------------");
  }
}

const obj_22 = new ExampleClass_9();
const obj_23 = new ExampleClass_10();

obj_22.method1(10, "test", false);
obj_23.method1(20, "bar", true);

/* Overriding constructor:

Normalde parenttan gelen bir methodu override ederken method prototipine bağlı kalarak
override etmemiz gerekir. Fakat constructor'da durum başka. constructor'da parenttan
gelen constructor'ın prototipine bağlı kalmak zorunda değiliz. Çünkü her class kendine
özgü yöntemlerle initialize edilmesi gerekebilir. Bundan dolayı constructor'ların
override edilmesi konusunda prototip uyumluluğu yoktur.

Bir constructor'ı override ettiğimizde parenttaki constructor'ın da invoke edilmesi
gerekir. Bunu yapabilmek için `super` isimli keywordü kullanırız. Child class'ın
constructor'ındayken parent class'ın constructor'ını invoke etmek için `super()`
fonksiyonu çağırılır.

Child class'taki bir methoddan parent class'taki aynı isimdeki methoda erişebilmek
için yine `super` keywordünü kullanırız. Örneğin `super.method1();` gibi

*/

class ExampleClass_11 {
  /* constructor yeni obje oluşturulma esnasında `new` operatörü tarafından sadece
  bir kez çağırılır ve sonra asla çağırılamaz. Bundan dolayı constructor'ın birşey
  döndermesine gerek yoktur. Çünkü constructor'ın tek amacı vardır o da class property'lerini
  initialize etmektir. Diğer methodlardan ayrılan tarafı budur. */
  constructor(param1: string, param2: boolean) {
    console.log("ExampleClass_11::constructor() invoked.");
  }

  method1() {
    console.log("ExampleClass_11::method1() invoked.");
  }
}

class ExampleClass_12 extends ExampleClass_11 {
  /* Child class'ta constructor oluşturduğumuzda mecburi olarak `super()` ifadesini
  invoke etmemiz gerekiyor. `super` nedir? Typescript'le beraber gelen yeni bir keyword.
  Bu keyword parent class'ın constructor'ına işaret eder. */
  constructor() {
    /* Buradaki super() ifadesi parent class'ın constructor'ına işaret eder. */
    super("test", true);
  }

  method1() {
    console.log("ExampleClass_12::method1() invoked.");

    /* Buradaki super ifadesi parent class'a işaret eder. */
    super.method1();
  }
}

class ExampleClass_13 extends ExampleClass_12 {
  //
}

const obj_24 = new ExampleClass_11("foo", true);
const obj_25 = new ExampleClass_12();

console.log("-------------");
obj_24.method1();
obj_25.method1();

/* Not: Inheritence konusu kabaca bu şekilde diyebiliriz. Inheritence ve OOP üzerine
daha detaylı bilgi edinmek isteyenler "design patterns" konularını araştırabilir. */
