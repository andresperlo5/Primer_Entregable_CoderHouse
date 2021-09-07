class Usuario {

    constructor(user) {

        this.nombre = user.nombre,
            this.apellido = user.apellido,
            this.libros = [user.libros],
            this.mascotas = [user.mascotas]
    }

    getFullName() {
        return `Nombre y Apellido: ${this.nombre}${this.apellido},
                Libro/s:${this.libros.map(a => a.titulo)},
                Mascota/s:${this.mascotas}`
    }

    addMascota() {

        if (this.mascotas !== (undefined, null, '')) {

            let animales = prompt('Agregar mas Animales')

            while (animales !== (undefined, null, '')) {

                this.mascotas.push(animales)
                animales = prompt('Agregar mas Animales')
            }
        }
    }

    countMascotas() {

        let cantidad = this.mascotas.length

        if (cantidad === 1) {
            return console.log('tengo una mascota');
        } else if (cantidad > 1) {
            return console.log(`tengo varias mascotas son: ${cantidad} y se llaman: ${this.mascotas}`);
        } else {
            return console.log('No tengo mascotas');
        }
    }

    addBook() {

        if (this.libros[0].titulo !== (undefined, null) && this.libros[0].autor !== (undefined, null)) {

            let titulo = prompt('Nuevo Titulo')
            let autor = prompt('Nuevo Autor')

            while (titulo !== (undefined, null) && autor !== (undefined, null)) {

                this.libros.push({ titulo, autor })

                titulo = prompt('Nuevo Titulo')
                autor = prompt('Nuevo Autor')
            }

            if (this.libros.length > 1) {

                return console.log(`Mis libros favoritos son: ${this.libros.map(a => a.titulo)}`);
            } else if (this.libros.length === 1) {

                return console.log(`Mi unico libro que lei en mi triste vida y por eso es mi favorito es: ${this.libros.map(a => a.titulo)}`);
            }

        } else {

            return console.log('No me gustan los libros. No me gusta leer');
        }
    }

    getBookNames() {
        if (this.libros[0].titulo !== (undefined, null) && this.libros[0].autor !== (undefined, null)) {
            if (this.libros.length > 1) {

                return console.log(`En mi Biblioteca tengo ${this.libros.length} libros. Y son: ${this.libros.map(a => a.titulo)}`);
            } else {
                return console.log(`En mi Biblioteca tengo ${this.libros.length} libro. Y es: ${this.libros.map(a => a.titulo)}`);

            }
        } else {
            console.log('No tengo Biblioteca');
            console.group()
        }
    }

    CleanConsole(){
        console.clear()
    }

    RefreshPage(){
        window.location.reload()
    }
}

function CreateUser() {

    const nombre = prompt('ingresar nombre')
    const apellido = prompt('ingresar apellido')
    const titulo = prompt('ingresar titulo')
    const autor = prompt('ingresar autor')
    const mascotas = prompt('ingresar mascotas')

    const user = {
        nombre,
        apellido,
        libros: { titulo, autor },
        mascotas
    }

    return user
}

let objUser = new Usuario(CreateUser())

console.log(objUser.getFullName())
