class Animal {
  hacerSonido() {}
}

class Perro extends Animal {
  hacerSonido() {
    console.log("Guau");
  }
}

class Gato extends Animal {
  hacerSonido() {
    console.log("Miau");
  }
}

class Vaca extends Animal {
  hacerSonido() {
    console.log("Mu");
  }
}

function sonido_animales(sound) {
  sound.forEach((item, index) => {
    item.hacerSonido();
  });
}
const array_sonidos = [new Perro(), new Gato(), new Vaca()];

sonido_animales(array_sonidos);

///////////////////////////////////////////

export class EmailNotification {
  enviar(mensaje) {
    console.log("Enviando Email: " + mensaje);
  }
}

export class SMSNotification {
  enviar(mensaje) {
    console.log("Enviando SMS: " + mensaje);
  }
}

export class PushNotification {
  enviar(mensaje) {
    console.log("Enviando Push: " + mensaje);
  }
}

function notificarUsuario(servicio, texto) {
  servicio.enviar(texto);
}

const email = new EmailNotification();
const sms = new SMSNotification();
const push = new PushNotification();

notificarUsuario(email, "Hola!");
notificarUsuario(sms, "Tu código es 1234");
notificarUsuario(push, "Tienes una nueva alerta");

//////////////////////////////////

class Diario {
  #secreto;

  constructor() {
    this.#secreto = "";
  }

  escribirSecreto(texto) {
    this.#secreto = texto;
  }

  leerDiario(clave) {
    if (clave === "1234") {
      console.log(this.#secreto);
    } else {
      console.log("Acceso denegado");
    }
  }
}

const diario = new Diario();

diario.escribirSecreto("La pinga");

diario.leerDiario("1234");

//////////////////////////////////////

class Podometro {
  #pasos;

  constructor() {
    this.#pasos = 0;
  }

  caminar() {
    this.#pasos++;
    console.log(this.#pasos);
  }
  reiniciar() {
    this.#pasos = 0;
    console.log(this.#pasos);
  }
}
const podometro = new Podometro();

for (let i = 0; i < 5; i++) {
  podometro.caminar();
}

podometro.reiniciar();

////////////////////////////////

class Cofre {
  #contenido;

  constructor() {
    this.#contenido = "Dineros varios";
  }

  #abrirCerrojo() {
    console.log("Haciendo click... Cerrojo abierto");
  }

  obtenerTesoro() {
    this.#abrirCerrojo();
    console.log(this.#contenido);
  }
}

const cofre = new Cofre();

cofre.obtenerTesoro();

///////////////////////////

class Reloj {
  #segundos;

  setMinutos(minutos) {
    this.#segundos = minutos * 60;
  }
  mostrarSegundos() {
    console.log(this.#segundos);
  }
}

const reloj = new Reloj();

reloj.setMinutos(3);
reloj.mostrarSegundos();

//////////////////////////


