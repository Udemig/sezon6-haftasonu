/*
>> Soru: Daha önceden kullandığımız fonksiyonlardan hangilerinden
dönen değeri invoke edebiliyorduk?

>> Cevap: useState() ve useDispatch() fonksiyonları diyebiliriz.


const [counter, setCounter] = useState(0);
setCounter(1);

const dispatch = useDispatch();

dispatch({
  type: "",
  payload: "",
});
*/

/*
>> Soru: useState() fonksiyonunun type'ını ve implementasyonunu yazınız.

>> Cevap: Bunun için öncelikle useState() fonksiyonunun tüm kullanım
yöntemlerini belirlemiyiz.

- useState()'e normal şekilde herhangi bir değer gönderilebilir.

- useState()'e fonksiyon gönderilebilir. Fakat bu fonksiyonun parametre listesi
  boş olmalı ve mutlaka bir değer döndermeli (yani void veya never dönemez).

- useState'ten tuple döner. Bu tuple'ın ilk değeri state değeridir, ikinci
  değeri de bu state'i güncelleyen fonksiyondur.

- Setter fonksiyonu iki şekilde kullanabiliriz. Birincisi bu fonksiyona
  doğrudan değer göndermek, ikincisi de bu fonksiyona başka bir fonksiyon
  göndermek. Bu göndereceğimiz fonksiyon bir parametre alır ve bir
  değer dönderir.

>> Soru: Neden useState'ten dizi döner demiyoruz da tuple döner diyoruz?

>> Cevap: Çünkü dizilerde tüm elemanlar aynı türde olmak zorundadur. Ama
tuple'da elemanlar farklı türde olabilir. useState'ten dönen dizinin
içerisindeki ilk eleman bir değerdir ikincisi fonksiyondur yani farklı
türe sahip iki değerli dizi döner. Bu yüzden buna dizi demeyiz tuple
deriz.


// değer göndererek state'i init etmek
useState(0);
useState("test");
useState({
  id: 1,
  firstname: "test",
});

// fonksiyon göndererek state'i init etmek
useState(() => {
  return "test";
});

useState(() => 10 * 20);

const age_1 = 20;
const age_2 = 30;
useState(() => (age_1 + age_2) / 2);

const exampleFn_6 = () => {};
useState(exampleFn_6);

//--------------------------------

const stateResult_1 = useState(0);
const [result, setResult] = useState(0);
stateResult[0];
stateResult[1];

Şimdi gelelim useState'ten dönen tuple'ın içindeki setter fonksiyonun
kullanım şekillerine:

setResult(10);
setResult(result + 1);
setResult((previousState) => {
  return previousState + 1;
});

function App() {
  // bu satırda counter 0'dır
  const [counter, setCounter] = useState(0);

  //setCounter(counter + 1);
  //setCounter(counter + 1);
  //setCounter(counter + 1);
  //setCounter(counter + 1);

  setCounter((previousCounter) => {
    return previousCounter + 1;
  });

  setCounter((previousCounter) => {
    return previousCounter + 1;
  });

  return <h1>{counter}</h1>;
}
*/

/* useState fonksiyonunun türünü tanımlayalım: */

type UseStateFnType_1 = (
  // parametrenin type'ı union olmalı
  initialState: any | (() => any)
) => [
  any, // state değeri
  (
    // state'i set etmek için kullanacağımız parametre.
    // Bu parametreye istersek değer gönderebiliriz istersek
    // fonksiyon gönderebiliriz.
    newState: any | ((previouosState: any) => any)
  ) => void // state'i set eden fonksiyon
];

/*
useState fonksiyonunun implementasyonunu yazalım:

useState fonksiyonunu react kütüphanesinden alırız. Dolayısıyla bu fonksiyon
reactın içerisinde gizli şekilde duran bazı değişkenlere erişmektedir. Ve bu
sayede farklı componentlerin state'lerini tutabilir ve state değişimlerinde
ilgili componenti tekrardan invoke edebilir.

// Görüldüğü üzere useState fonksiyonunu react'tan alıyoruz.
import {useState} from "react";

// React objesini konsola bastığımızda büyük bir json çıktısı görürüz.
// useState fonksiyonu bu çıktıdaki değişkenlerden birini veya birkaçını
// kullanarak state'leri yönetir.
import react from "react"
console.log(react)

*/

/*
Bu değişkenin react'ın içerisinde gizli bir yerlerde yaşadığını düşünelim.
Bu objede hem useState'i çağıran fonksiyonun referansını hem de
useState'in yönettiği state değerini tutacağız.
*/

/* Birincisi function, ikincisi state değeri olacak. */
type PrivateStateItemType = [any, any];
const privateStateStack: PrivateStateItemType[] = [];

const useState_1: UseStateFnType_1 = (
  initialState: any | (() => any) //
) => {
  // TODO Implement here.
  console.log("useState_1 fonksiyonu invoke edildi.");
  console.log(">>>  initialState:", initialState);

  /* Dizinin length'i bizim şuanki hedef indeximizdir. Bu sayede
  her useState fonksiyonu çağırıldığında gizli değişkene
  yeni bir item ekleyebiliriz. */
  const currentStateIndex = privateStateStack.length;
  console.log(">>>  currentStateIndex:", currentStateIndex);

  // TODO useState'i çağıran fonksiyona ulaşmanın bir yolunu bul.

  if (typeof initialState === "function") {
    initialState = initialState();
  }

  privateStateStack[currentStateIndex] = [null, initialState];

  return [
    initialState, //
    (newState: any | ((previouosState: any) => any)) => {
      console.log("setter fonksiyon invoke edildi.");
      console.log(">>>  currentStateIndex:", currentStateIndex);

      /* Bir dizi içerisinde başka bir objeyi aldığımızda aslında
      bu objenin referansını alırız. Obje dizi içerisindeki yerini
      korur ve orada yaşamaya devam eder. */
      const currentStateItem = privateStateStack[currentStateIndex];
      console.log(">>>  currentStateItem:", currentStateItem);

      /* newState değeri eğer bir fonksiyonsa bunu invoke etmeliyiz. Invoke
      ederken parametre olarak state'in son halini veriyoruz. */
      if (typeof newState === "function") {
        /* State'in en son durumunu göndererek fonksiyonu invoke ediyoruz. */
        newState = newState(currentStateItem[1]);
      }

      /* Gizli stack dizisinin ilgili indexinin birinci elemanı bizim
      şuanki state değerimizi tutar. Ve aşağıdaki satırda bu state
      değerini güncelliyoruz. */
      privateStateStack[currentStateIndex][1] = newState;
      currentStateItem[1] = newState;

      /* State'i güncelledik, son aşama useState fonksiyonunu çağıran
      componenti tekrar render edeceğiz. */

      console.log("useState'i invoke eden fonksiyonu burada invoke etmeliyiz.");

      console.log(">> currentStateItem", currentStateItem);

      console.log("--------------");
    },
  ];
};

function HomeComponent() {
  const [user, setUser] = useState_1({
    firstname: "test",
  });

  const [categoryData, setCategoryData] = useState_1(null);
}

function AppComponent() {
  console.log("AppComponent invoke edildi.");

  const [counter, setCounter] = useState_1(123);
  console.log(">>>  counter:", counter);
  console.log(">>>  setCounter:", setCounter);

  setTimeout(() => {
    console.log("setTimeout fonksiyonu invoke oldu.");

    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);

    setCounter((prevState: any) => prevState + 1);
    setCounter((prevState: any) => prevState + 1);
    setCounter((prevState: any) => prevState + 1);
  }, 1e3);

  /* e'den sonraki sayı kadar sıfır ekler. Örn:
  1e3 = 1000
  24e6 = 24000000
  35_000_000_00 = 35e8
  */

  /*
  Normalde reactjs componentlerini yazarken biz JSX elemanları
  yazıp return ederiz. Ama bunlar aslında birer json objesidir.
  Biz yazarken kolaylık olsun diye JSX şeklinde yazarız ama
  çalışırken bunlar json objelerine dönüştürülür. Örneğin aşağıdaki
  ifadenin çıktısı bir json objesidir:

  console.log("output: ", <h1>test</h1>)
  */

  return {
    counter,
  };
}

/* Normalde bu component reactjs tarafından render edilirken
çağırılır. Ama şuan yaptığımız örnekte böyle bir mekanizmamız
olmadığı için mecburen componenti kendimiz invoke ediyoruz. */
AppComponent();
