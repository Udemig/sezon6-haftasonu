/* `type` keyword:

Önceki konularda hep primitive typeları kullandık. Bu typelar typescript
dilinin kendi içerisinde mevcut olan typelar. Fakat bunlar gerçek dünya
problemlerinde yeterli olmazlar. Bu problemleri çözerken sıklıkla kendi
type'larımızı oluşturur ve bunları kullanırız. Şimdi kendi type'larımızı
nasıl oluştururuz ve nasıl kullanırız bu konuyu görelim.

Özellikler:

- Yeni bir type tanımlamak için `type` keywordüyle başlanır sonra isim belirlenir
  sonra eşittir diyerek bu type'ın özellikleri belirlenir.
  
- Yeni bir type oluşturmak için istersek mevcut typeları kullanabiliriz veya
  onların union veya obje içerisinde farklı kombinasyonlarını kullanabiliriz.

*/

// Yeni bir obje type'ı oluşturmak
type StudentInfoType = {
  firstname: string;
  lastname: string;
  birth_year: number;
};

// Mevcut olan bir type'ı farklı bir isimle kullanmak
type NameType = string;

const student_5: NameType = "emre";

// Yeni bir union type oluşturmak
type NullableStringType = string | null;

let firstname_6: NullableStringType = "ahmet";
firstname_6 = null;

let foo: NullableStringType;
