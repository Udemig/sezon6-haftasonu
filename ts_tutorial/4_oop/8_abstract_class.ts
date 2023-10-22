/*
Abstract (soyut) class:

Bir class'ın abstract olması demek bu class'ta gövdesi bulunmayan sadece prototipi bulunan
methodlar var demektir.

>> Özellikler:

- 
- 
- 
- 

*/

abstract class ExampleAbstractClass_1 {
  /* Property'ler normal class'larda olduğu gibi yazılır yani propertyler için bir
  abstract (soyut)'luk söz konusu değildir. */
  public prop1: string = "";
  protected prop2: boolean = true;
  private prop3: number = 10;

  /* Bu method implement edilmiştir ve dolayısıyla child class'lar tarafından implement
  edilmesi zorunluluğu yoktur. */
  method1() {
    console.log("ExampleAbstractClass_1::method1() invoked.");
  }

  /* Child class tarafından implement edilmesini mecbur bırakmak istediğimiz bir
  methodun önüne `abstract` ifadesini yazarız. Sonra child class bu methodun prototipine
  bağlı kalarak implement eder. */
  abstract method2(): void;

  public abstract method3(param1: number, param2: boolean): string;

  protected abstract method4(): void;
}

class ExampleClass_15 extends ExampleAbstractClass_1 {
  method2(): void {
    console.log("ExampleClass_15::method2() invoked.");
  }

  method3(p1: number, p2: boolean): string {
    console.log("ExampleClass_15::method3() invoked.");

    return "example string";
  }

  method4() {
    console.log("ExampleClass_15::method4() invoked.");
  }
}

class ExampleClass_16 extends ExampleAbstractClass_1 {
  method2(): void {
    console.log("ExampleClass_16::method2() invoked.");
  }

  method3(a: number, b: boolean): string {
    console.log("ExampleClass_16::method3() invoked.");
    return "" + a + b;
  }

  method4() {
    console.log("ExampleClass_16::method4() invoked.");
  }
}

/* Örnek: Bir çizim programı yaptığımızı düşünelim. Burada çizilmesi istenen şekillerin
class'ları olsun. Mesela kare, dikdörtgen, çizgi, nokta gibi şekilleri çizen class'ları
yazalım. Bunu yaparken abstract class yöntemini kullanabiliriz.

Cevap: Öncelikle bize bir class lazım ve bu classta bir method olmalı. Bu method istediğimiz
noktayı istediğimiz renkte boyayabilmeli.

*/

type RGBColorType = [number, number, number];

// Not: abstract class'ların isimlerinin önüne "Abstract" ifadesini eklersek daha anlamlı
// bir isimlendirme uygulamış oluruz.
abstract class AbstractDrawer {
  public drawPoint(x: number, y: number, color: RGBColorType): void {
    console.log("Koordinat: " + x + "x" + y + " , Renk: ", color);
  }

  public abstract drawShape(): void;
}

class Line extends AbstractDrawer {
  public drawShape(): void {
    console.log("Line::drawShape() invoked.");

    const x1 = 10;
    const y1 = 10;

    const x2 = 20;
    const y2 = 20;

    for (let i = x1; i < x2; i++) {
      this.drawPoint(i, y2, [255, 0, 0]);
    }
  }
}

const drawLine_1 = new Line();

drawLine_1.drawShape();

/* Ödev: Yukarıdaki abstract classı extend ederek tek nokta çizen ve dikdörtgen çizen class'ları
implement ediniz. */
