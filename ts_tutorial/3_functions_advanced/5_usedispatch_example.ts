/*
>> Soru: useDispatch() fonksiyonunun type'ını ve kabaca implementasyonunu
yazınız.

>> Cevap: Öncelikle useDispatch'in nasıl kullanıldığını hatırlayalım. Bilindiği
üzere useDispatch herhangi bir parametre almaz fakat geriye bir fonksiyon
dönderir. Bu fonksiyon redux'ın kendi içerisindeki gizli store değişkeni
üzerinde güncelleme yapar. Bu güncelleme yapıldıktan sonra useSelector
ile ilgili state değişkenine abone olmuş olan fonksiyonlar tekrar invoke
edilir (yani tekrar render edilir).

>> Özellikler:

- useDispatch'ten dönen fonksiyonun parametresi şu formatta olmalı:
  { type: string, payload: any }

- useDispatch'e parametre gönderilmez ama bir fonksiyon return eder.


const dispatch = useDispatch();
const ahmet = useDispatch();
const dispatcher = useDispatch();
const x = useDispatch();

dispatch({
  type: "",
  payload: 10,
});

ahmet({
  type: "test",
  payload: {
    id: 1,
  },
});

*/

type UseDispatchType_1 = () => // Burası ilk fonksiyonun parametresi.
// Aşağıdaki kısım komple ilk fonksiyonun dönüş türü.
(
  // dispatchObject isimli parametre ikinci fonksiyonun parametresi.
  dispatchObject: {
    type: string; // parametreye gidecek olan objenin property'si.
    payload: any; // parametreye gidecek olan objenin property'si.
  }
) => void; // burası da ikinci fonksiyonun dönüş türü.

// Yukarıdaki ifadenin aynısı aslında tek satırda yazılabilir.
type UseDispatchType_2 = () => (param1: { type: string; payload: any }) => void;

let commonVariable = 0;

const useDispatch_1: UseDispatchType_1 = () => {
  console.log("useDispatch_1 fonksiyonu çağırıldı.");

  let exampleVariable = 0;

  return (dispatchObject: { type: string; payload: any }) => {
    console.log("dispatch fonksiyonu çağırıldı.");

    exampleVariable += 1;
    console.log(">>>  exampleVariable:", exampleVariable);

    commonVariable += 1;
    console.log(">>>  commonVariable:", commonVariable);

    //console.log(">>>  dispatchObject:", dispatchObject);
  };
};

const dispatch_1 = useDispatch_1();
const dispatch_2 = useDispatch_1();
const dispatch_3 = useDispatch_1();
const dispatch_4 = useDispatch_1();

dispatch_1({
  type: "categoryReducer/updateCategory",
  payload: {
    categories: ["foo_category", "bar_category"],
  },
});

dispatch_1({
  type: "categoryReducer/updateCategory",
  payload: {
    categories: ["foo_category", "bar_category"],
  },
});

dispatch_1({
  type: "categoryReducer/updateCategory",
  payload: {
    categories: ["foo_category", "bar_category"],
  },
});

dispatch_2({
  type: "categoryReducer/updateCategory",
  payload: {
    categories: ["foo_category", "bar_category"],
  },
});

dispatch_2({
  type: "categoryReducer/updateCategory",
  payload: {
    categories: ["foo_category", "bar_category"],
  },
});

dispatch_2({
  type: "categoryReducer/updateCategory",
  payload: {
    categories: ["foo_category", "bar_category"],
  },
});

dispatch_2({
  type: "categoryReducer/updateCategory",
  payload: {
    categories: ["foo_category", "bar_category"],
  },
});

/*
Ödev: Pratik amaçlı olarak birkaç tane fonksiyon type'ı yazalım.

- İlk parametresi string, ikinci parametresi fonksiyon olsun. Dönüş türü number
  olsun. param2'ye gönderilen fonksiyonun ilk parametresi union olsun, dönüş türü
  string olsun.

- 

- 

- 

- 

*/
