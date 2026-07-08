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
    aniadirContacto(contacto) {
        if (this.agendaLlena()) {
            console.log("Error: La agenda está llena, no se pueden almacenar más contactos.");
            alert("Error: La agenda está llena.");
            return;
        }
        
        if (this.existeContacto(contacto)) {
            console.log(`El contacto con el nombre "${contacto.nombre}" ya existe.`);
            alert(`El contacto con el nombre "${contacto.nombre}" ya existe.`);
            return;
        }
        this.contactos.push(contacto);
        console.log(`Contacto "${contacto.nombre}" añadido correctamente.`);
        alert(`Contacto "${contacto.nombre}" añadido.`);
    }
    listarContactos() {
        if (this.contactos.length === 0) {
            console.log("La agenda está vacía.");
            alert("La agenda está vacía.");
            return;
        }
        console.log("--- LISTA DE CONTACTOS ---");
        let listaTexto = "--- LISTA DE CONTACTOS ---\n";
        this.contactos.forEach((c, index) => {
            const info = `${index + 1}. Nombre: ${c.nombre} | Teléfono: ${c.telefono}`;
            console.log(info);
            listaTexto += info + "\n";
        });
        alert(listaTexto);
    }
    buscarContacto(nombre) {
        const encontrado = this.contactos.find(c => c.nombre.toLowerCase() === nombre.toLowerCase());
        if (encontrado) {
            console.log(`Encontrado -> Nombre: ${encontrado.nombre}, Teléfono: ${encontrado.telefono}`);
            alert(`Encontrado -> Nombre: ${encontrado.nombre}, Teléfono: ${encontrado.telefono}`);
        } else {
            console.log(`No se encontró ningún contacto con el nombre "${nombre}"`);
            alert(`No se encontró ningún contacto con el nombre "${nombre}"`);
        }
    }
    eliminarContacto(contacto) {
        const indice = this.contactos.findIndex(c => c.esIgualA(contacto));
        if (indice !== -1) {
            this.contactos.splice(indice, 1);
            console.log(`Contacto "${contacto.nombre}" eliminado correctamente.`);
            alert(`Contacto "${contacto.nombre}" eliminado correctamente.`);
        } else {
            console.log(`No se pudo eliminar: el contacto "${contacto.nombre}" no existe.`);
            alert("No se pudo eliminar: el contacto no existe.");
        }
    }
}