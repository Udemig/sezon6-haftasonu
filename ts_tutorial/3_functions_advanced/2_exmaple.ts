/* Soru: Bir stringi boşluk karakterine göre ayırıp ve dizi haline
getirip dönderen bir fonksiyon türü ve implementasyonu yazınız. Örnek:

const result = stringParser("ahmet mehmet");
["ahmet", "mehmet"]

*/

type StringParserFnType_1 = (param1: string) => string[];

const stringParser_1 = (param1: string) => {
  return param1.split(" "); //["ahmet", "mehmet"];
  return param1.split(""); // ["a", "h", "m", "e", "t", " ", "m", "e" ....];
};

// * - | " "

/* Bu fonksiyonu kullanan kişinin kendi istediği şekilde stringi
parse etmesini sağlamak istersek nasıl yaparız? Örneğin:

stringParser("foo bar baz", (char: string) => {
    return true;
})

*/

type StringParserFnType_2 = (
  targetStr: string,
  customParserFn: (currentCharacter: string) => boolean
) => string[];

const stringParser_2: StringParserFnType_2 = (
  targetStr: string,
  customParserFn: (currentCharacter: string) => boolean
) => {
  /* Stringin içerisindeki her karakteri tek tek döngüyle döneceğiz
  ve her karakteri customParserFn'ye gönderip eğer sonuç true ise
  bu string buradan böleceğiz, false ise döngüye devam edeceğiz. */

  // Parametreden gelen string ifadeyi karakterler ayırıyoruz.
  const splittedStr = targetStr.split("");
  console.log(">>>  splittedStr:", splittedStr);

  // Bölünecek olan stringleri burada biriktireceğiz.
  let tempStr: string = "";

  // tempStr'de biriktirilen stringler bu diziye aktarılacak.
  // Böylece döngü bittiğinde elimizde parçalanmış stringler olacak.
  const parsedResult: string[] = [];

  // splittedStr dizisinin eleman sayısı kadar dönüyoruz.
  for (let i = 0; i < splittedStr.length; i++) {
    // Şuanki karakteri al.
    const currentCharacter = splittedStr[i];

    /* İkinci parametre olan fonksiyonu burada çağırıyoruz. Çağırma işlemini
    yaparken şuanki karakteri parametre olarak gönderiyoruz. Sonra bu karakter
    eğer ihtiyaç duyulan parçalama karakteriyse aşağıdaki if bloğunda bu
    parçalama işlemi yapılıyor. */
    const parseResult = customParserFn(currentCharacter);
    console.log(">>>  parseResult:", parseResult);

    if (parseResult) {
      // Eğer şuanki karakter parçalanma karakteriyse tempStr'de biriken string
      // ifadeyi parsedResult dizisine aktarıyoruz. Sonra tempStr'yi sıfırlıyoruz.
      parsedResult.push(tempStr);

      // tempStr'yi sıfırlamamızın amacı bir sonraki saykılda bu değişkenin içini
      // tekrar dolduracağız.
      tempStr = "";
    } else {
      // Şuanki karakter parçalanma karakteri olmadığında için bu karakteri tempStr'de
      // biriktirmemiz gerekiyor. Sonra parçalanma karakterine geldiğimizde zaten
      // bu tempStr değişkeni diziye aktarılıp temizlenecek.
      tempStr += currentCharacter;
    }

    console.log(">>>  tempStr:", tempStr);
  }

  // Döngüden çıktıktan sonra tempStr'nin içerisinde birşeyler kalmışsa onu da
  // parsedResult dizisine aktarıyoruz.
  parsedResult.push(tempStr);

  return parsedResult;
};

const parseResult_2 = stringParser_2(
  "ahmet*mehmet-ayşe_fatma osman",
  (currentChar: string) => {
    console.log(">>>  currentChar:", currentChar);

    if (currentChar === "*") {
      return true;
    } else if (currentChar === "-") {
      return true;
    } else if (currentChar === "_") {
      return true;
    } else if (currentChar === " ") {
      return true;
    }

    return false;
  }
);

console.log(">>>  parseResult_2:", parseResult_2);

/* Olması gereken çıktı: 
[
    "ahmet",
    "mehmet",
    "ayşe",
    "fatma",
    "osman"
]
*/

const parseResult_3 = stringParser_2(
  "izmir|istanbul|ankara", //
  (character) => {
    // Yukarıdaki if bloğu yerine daha kısa yöntemler uygulanabilir.
    // Örneğin tek karaktere göre ayırma işlemini bu şekilde yapabiliriz.
    return character === "|";
  }
);
console.log(">>>  parseResult_3:", parseResult_3);

const parseResult_4 = stringParser_2(
  "türkiye_amerika?hollanda-almanya|norveç", //
  (character) => {
    // Ayraç karakterlerini tek bir string halinde birleştirip
    // includes() fonksiyonu vasıtasıyla ayırdık.
    return "_|-?*/".includes(character);
  }
);
console.log(">>>  parseResult_4:", parseResult_4);

/*  */
const stringParser_3 = (param1: string, separator: string) => {};

stringParser_3("ahmet mehmet|ayşe-fatma", "-");
