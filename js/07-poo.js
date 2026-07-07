class Contacto {
    constructor(nombre, telefono) {
        this.nombre = nombre.trim();
        this.telefono = telefono;
    }
    esIgualA(otroContacto) {
        return this.nombre.toLowerCase() === otroContacto.nombre.toLowerCase();
    }
}

class Agenda {
    constructor(tamano = 10) {
        this.tamanoMaximo = tamano;
        this.contactos = [];
    }
    agendaLlena() {
        return this.contactos.length >= this.tamanoMaximo;
    }
    huecosLibres() {
        return this.tamanoMaximo - this.contactos.length;
    }
    existeContacto(contacto) {
        return this.contactos.some(c => c.esIgualA(contacto));
    }
  }