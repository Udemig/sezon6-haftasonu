/* Type Annotation:

Javascriptte değişkenlerin türlerini tanımlama özelliği yoktur.
Bu büyük problemdir çünkü bazen değişkenlere yanlış değerler
atamaya sebebiyet veriyor. Fakat typescriptte böyle bir problem
yok. Çünkü typescriptte değişkenlerin türlerini tanımlamak mümkün.

Örneğin aşağıdaki kod javascript kurallarına göre validdir ama
mantıksal olarak hatalıdır. Çünkü firstname isimli değişkenin
sadece string değerler alması gerekir. Ama javascriptin kuralları
gereği her değişken her değeri alabilir. Bu da öenmli mantıksal
hatalara sebep olur.

>> ornek.js:

let firstname = "emre";
firstname = "eyüp";

firstname = 10;
firstname = true;
firstname = {
  id: 1,
};

*/

/* Değişken türünü doğrudan belirlemek: Bu yöntemde değişkeni tanımladığımız
noktada türünü de tanımlarız. Değişken ismi ile eşittir arasına tür tanımlaması
yapılır. Aşağıda görüldüğü üzere değşikenden sonra ikinokta konur ve sonra
tür ismi yazılır. Sonra bu türe bağlı kalınarak atama yapılabilir. */
let firstname_1: string = "emre";
firstname_1 = "ayşegül";
//firstname_1 = 10;

/* Otomatik tür bulma: Atadığımız değerin türü otomatik olarak
typescript tarafından belirleniz. Sonraki atamalarda bu türe
göre atama yapılması sağlanmış olur. Örneğin aşağıdaki örnekte
lastname_1 değişkeninin türünü belirtmemiş olsam da ilk atanan
değerin türü otomatik olarak bu değişkenin türü olarak belirlenir. */
let lastname_1 = "test";
lastname_1 = "foo";
lastname_1 = "bar";
// lastname_1 artık string olduğu için farklı türde bir değer atanamaz.
// lastname_1 = 10;

const foo_1 = 10;

let bar: number;
bar = 10;
//bar = "test";

let baz;
baz = 10;
baz = false;
baz = "test";

// <input type="string" value="" step="10" min="0" max="100" id="age" name="age" />

let age: unknown;
age = "10";
let foo_2: string = age as string;

let foo_3: string | boolean | "test" | "foo" | 10 | 11;
foo_3 = 10;
foo_3 = 11;

/*
try {
  let inputValue: string = input.value;
  const age = parseInt(inputValue);
} catch (e) {
  if ( e instanceof Error) {
    alert(e.message)
  }
  else (typeof e === 'string') {
    alert(e)
  }else {
    alert("Bilinmeyen bir hata oluştu.")
  }
}
*/
