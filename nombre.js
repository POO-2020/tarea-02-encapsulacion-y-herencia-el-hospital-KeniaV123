export default class Nombre {
    /**
     * @param {string} nombre
     * @param {string} apellidoPaterno
     * @param {string} apellidoMaterno
     */
    constructor (nombre, apellidoPaterno, apellidoMaterno){
        this.nombre = nombre;
        this.apellidoMaterno = apellidoMaterno;
        this.apellidoPaterno = apellidoPaterno;
    }
    getNombreCompleto(){
        return (`${this.nombre} ${this.apellidoPaterno} ${this.apellidoMaterno}`);
    }
    
    getApellidoNombre(){
        return (`${this.apellidoPaterno} ${this.apellidoMaterno} ${this.nombre}`);
    }
    
    getIniciales(){
        let inicialNombre = this.nombre [0];
        let inicialMaterno = this.apellidoMaterno [0];
        let inicialPaterno = this.apellidoPaterno [0];
    
    
        return (`${inicialNombre}.${inicialPaterno}.${inicialMaterno}`)
    }
    }