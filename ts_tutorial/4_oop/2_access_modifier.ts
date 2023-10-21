/*
Access Modifier (Erişim Belirteci):

Class elemanlarının dışarıdan erişimlerinin olup olmayacağını belirten ifadelerdir.
Üç adet access modifier vardır. Bunlar public, protected, private.

- public: Hem dışarıdan hem child class'tan ulaşılabilir.
- protected: Sadece child class'tan ulaşılabilir, dışarıdan erişilemez.
- private: Sadece şuanki class'tan ulaşılabilir, child class ve dışarıdan ulaşılamaz.

Notlar:
- Herhangi bir erişim belirteci verilmemişse o property/method public'tir.
- Erişim belirteçleri hem propertyler hem methodlar için kullanılabilir.

*/

class ExampleClass_1 {
  prop1: string;
  prop2: string;
  private important_prop3: string;
  protected important_prop4: string;

  public method1() {}
  public method2() {}
  protected protected_method() {}
  private private_method() {}
}
const obj_6 = new ExampleClass_1();
// private elemana dışarıdan erişemeyiz.
//console.log(obj_6.important_prop3);

/* `protected` erişim belirtecini anlamak için inheritence konusuna kısa bir bakış
atmamız gerekiyor. Class'lar birbirini extend edebilir yani bir class başka bir
class'tan özelliklerini miras alabilir. Bunu yapmak için `extends` keywordünü
kullanarak yeni class oluştururuz. */

class ExampleClass_2 extends ExampleClass_1 {
  method3() {
    // private elemana child class'tan erişemeyiz.
    //this.important_prop3;

    // protected elemana child class'tan erişebiliyoruz.
    this.important_prop4;
    this.protected_method();
  }
}

const obj_7 = new ExampleClass_2();
// protected elemana dışarıdan erişemeyiz.
//obj_7.important_prop4;
