/* readonly modifier:

Bazı durumlarda class initialize edildikten sonra bazı property'lerin asla değiştirilememesi
(yani yeniden set edilememesi) gerekir. Bunu yapabilmek için `readonly` belirtecini kullanırız.

Özellikler:

- readonly olan property'ye sadece constructor'dan set edebiliriz. Diğer methodlardan set edilemez.

- constructor parametresinde readonly kullanabiliriz, o zaman bu parametre class property'si
  haline dönüşür.

*/

class DbConnection_1 {
  private readonly password: string;
  private readonly host: string;

  constructor(
    private readonly username: string,
    password: string,
    host: string
  ) {
    this.password = password;
    this.host = host;
  }

  method1() {
    // readonly olan bir property'ye atama yapılamaz.
    //this.username = "test";
  }
}

const obj_9 = new DbConnection_1("user", "pass", "localhost");
// private property'ye erişilemez.
//obj_9.username;
