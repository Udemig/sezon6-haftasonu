/*
Object Oriented Programming (OOP) - Class'lar:

Bugüne kadar hep fonksiyonlar ve değişkenler (datalar) ile çalıştık.
Fakat büyük projelerde (büyük proje derken minimum 30 sayfalık projeler
diyebiliriz) bu yöntem yetersiz kalır. Çünkü proje büyüdüğünde kodun tekrar
kullanılabilmesi (yani başka bir deyişle kod tekrarının önüne geçilmesi)
ve projenin mimarisinin anlaşılır ve geliştirilebilir şekilde tasarlanabilmesi
için fonksiyonlar yeterli olmaz. Bu problemi çözebilmek için de farklı
programlama yaklaşımları icat edilmiştir. OOP bunlardan biridir. Başka
programlama yaklaşımları (yöntemleri) de vardır fakat biz dünyada en çok
tercih edilen yöntem olan OOP'u kullanacağız.

OOP'da fonksiyonel programlamadan farklı olarak temelde iki yeni tanım vardır.
Bunlardan birincisi `class`, ikincisi de `interface`. Class'larda hem datalar
hem de fonksiyonlar aynı yapı içerisinde bulunur. Interface'lerde ise
hem datalar tanımlanabilir hem de fonksiyon prototipleri tanımlanabilir.
Interface ile class arasındaki ilişkiler de ilerleyen derslerde işlenecektir.

**** Class:

Bir objenin özelliklerini ve davranışlarını bir çatı altında toplayan veri
yapılarına class denir. Bir class tanımlamak için `class` keywordü kullanılır
ve ardından class'ın ismi yazılır. Sonra doğrudan süslü parantezler kullanılarak
class'ın içeriği doldurulur.

>> Soru: Şuan kullandığımız telefonlar ile 15 sene önce kullandığımzı telefonlar
arasındaki benzerlikler ve farkları sıralayalım.

>> Cevap: Maddeler halinde sıralarsak şu şekilde diyebiliriz:
Benzerlikleri:
- Sim kart takılabilir
- SMS gönderme özelliği var
- Şarj olabilir
- Arama yapılabilir
- Fiziksel tuşları var.
- Taşınabilir
- Ağır ve dayanıklı olurlar
- Hafızaları kısıtlı da olsa vardı ama genişletilemiyordu.
- Küçük ve monochrome ekran vardı

Farklı:
- MMS gönderme özelliği var.
- Dokunmatik ekran var.
- Wifi ve bluetooth var.
- Hafif ama kırılgan olurlar.
- Hafızaları büyüktür ve genişletilebilir.
- NFC özellikleri var.
- Kamera var.

*/

class NokiaPhone_1 {
  /*
  Class'ın tuttuğu datalara 'property' ismi verilir.
  Davranışsal özelliklere de 'method' yada 'fonksiyon' ismi verilir.

  Bir property tanımlamak için property ismini yazarız, sonra iki nokta
  yazıp türünü yazarız.

  */

  /* Bir fonksiyonun sahip olduğu bilgi içeren ve durağan şeklindeki
  özelliğini property olarak tanımlarız. */
  model: "3310" | "1100" | "5210" | "6230" | "2100" | "others" = "others";
  sim_kart_operator: string = "";
  sarz_miktari: number = 0;
  batarya_kapasitesi: number = 0;
  sarz_soket_tipi:
    | "nokia"
    | "motorola"
    | "samsung"
    | "sony"
    | "ericsson"
    | "other" = "other";

  keyboard_type: "keypad" = "keypad";
  mediaButtonsExist: boolean = false;
  weight: number = 0;
  durability: "too much" | "a little bit" | "fragile" = "too much";

  /* Bir class'ın davranışsal özelliklerini fonksiyonlar (yada diğer ifadeyle
  methodlar) şeklinde yazarız. */

  printModel() {
    /* `this` ifadesi şuanki objeye işaret eder (şuanki class'a değil). */
    console.log("Telefon modeli: ", this.model);
  }

  makeCall(targetPhoneNumber: string) {
    console.log("Şu numaraya çağrı başlatılıyor: ", targetPhoneNumber);
  }

  sendSms(targetPhoneNumber: string, message: string) {
    console.log("SMS gönderme işlemi başladı, numara: ", targetPhoneNumber);
    console.log("Mesaj: ", message);
  }

  open() {
    console.log("Telefon açılıyor.");
  }

  shutdown() {
    console.log("Telefon kapanıyor.");
  }

  /* Not: Bir property ve method tanımlamaya aynı şekilde başlarız. Yani ismini
  yazarak başlarız. Ve bu ifadenin method mu yoksa property mi olacağını
  belirleyen şey kendisinden sonra iki nokta veya parantez kullanmamızdır.
  İsimden sonra iki nokta yazarsak bu property tanımlamış oluruz, parantez
  açarsak o zaman method tanımlamış oluruz. */
  example1: number = 0; // örnek property
  example2() {} // örnek method
}

/* Örnek olması için etrafımızdaki herhangi bir nesneye ait class'ı yazmak
mümkündür. İlerleyen derslerde hem bu şekilde örnekler hem de gerçek dünya
problemlerini çözerken lazım olacak olan class'ları yazacağız. */

class Monitor {
  resolution: [number, number] = [0, 0];
  is_curved: boolean = false;
  panel_type: "ips" | "tn" | "va" | "others" = "others";
  refreshRate: number = 0;
  sizeInInches: number = 0;

  vga1_mounted: boolean = false;
  vga2_mounted: boolean = false;
  hdmi1_mounted: boolean = false;
  hdmi2_mounted: boolean = false;

  is_opened: boolean = false;

  open() {
    this.is_opened = true;
  }

  close() {
    this.is_opened = false;
  }

  mount(port: "vga" | "display port" | "hdmi", portNumber: number) {
    console.log("Monitör şu porttan bağlandı: ", port, portNumber);

    /* `this` keywordünü ilerleyen derslerde daha detaylı kullanacağız.
    Şimdilik örnek olması amacıyla yazılmıştır. */
    if (port === "vga") {
      if (portNumber === 1) {
        this.vga1_mounted = true;
      } else if (portNumber === 2) {
        this.vga2_mounted = true;
      }
    } else if (port === "hdmi") {
      if (portNumber === 1) {
        this.hdmi1_mounted = true;
      } else if (portNumber === 2) {
        this.hdmi2_mounted = true;
      }
    }
  }
}

/*
*** `new` operatörü ve `this` keywordü:

Bir class tanımladığımızda bunların kullanılması gerekir (aynı fonksiyonlardaki gibi).
Yani sadece tanımlamak yeterli değildir, class'lar kullanılmak amacıyla yazılırlar.
Bir class'ı kullanabilmek için `new` keywordü kullanılır. Bunu yaptığımızda bu class'ın
hafızada aktif olan yeni bir kopyasını oluşturmuş oluruz. İşte bu kopyaya `obje` denir.

Bir classtan yeni bir obje oluşturmak istediğimizde önce new keywordünü yazarız, sonra
classın ismini yazarız son olarak da parantez ekleriz.

*** `this` keywordü:
Aynı class'ın farklı objelerinin olması sayesinde obje içerisindeki methodlardan
bu objeye ait diğer methodlara ve property'lere erişim sağlayabilmek için `this`
keywordünü kullanırız.

*/

const mehmetin_telefonu = new NokiaPhone_1();
mehmetin_telefonu.model = "2100";
mehmetin_telefonu.batarya_kapasitesi = 3200;
mehmetin_telefonu.durability = "a little bit";
mehmetin_telefonu.keyboard_type = "keypad";
mehmetin_telefonu.open();
mehmetin_telefonu.makeCall("905371234567");
mehmetin_telefonu.sendSms("905321234566", "merhaba dünya");
mehmetin_telefonu.shutdown();

const hasanin_telefonu = new NokiaPhone_1();
hasanin_telefonu.model = "5210";
hasanin_telefonu.durability = "too much";
hasanin_telefonu.batarya_kapasitesi = 4000;
hasanin_telefonu.open();
hasanin_telefonu.makeCall("905054443322");
hasanin_telefonu.sendSms("9055555555", "test mesajı");

/* Yukarıdaki örnekte mehmetin telefonu ile hasanın telefonu aynı class'ın
farklı kopyaları olan farklı objelerdir. Dolayısıyla her birinin aynı
isimde property'leri olmasına rağmen değerleri farklı olabilir. */

//console.log("Mehmetin telefon modeli:", mehmetin_telefonu.model);
//console.log("Hasanın telefon modeli:", hasanin_telefonu.model);
mehmetin_telefonu.printModel();
hasanin_telefonu.printModel();

const exampleJsonObj = {
  prop1: "test",
  prop2: "example",
  prop3: () => {},
  prop4: () => {},
};

/* Ödev: Etrafınızda gördüğünüz nesnelerin class'larını yazın. Örneğin
sandalye class'ı, döner sandalyemi, kaç bacağı var, rengi nedir gibi
özellikleri yazınız. */
