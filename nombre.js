export default class Nombre {
    /**
     * @param {string} nombre
     * @param {string} apellidoPaterno
     * @param {string} apellidoMaterno
     */
    constructor (nombre, apellidoPaterno, apellidoMaterno){
        this._nombre = nombre;
        this._apellidoMaterno = apellidoMaterno;
        this._apellidoPaterno = apellidoPaterno;
    }
    getNombreCompleto(){
        return (`${this._nombre} ${this._apellidoPaterno} ${this._apellidoMaterno}`);
    }
    
    getApellidoNombre(){
        return (`${this._apellidoPaterno} ${this._apellidoMaterno} ${this._nombre}`);
    }
    
    getIniciales(){
        let inicialNombre = this._nombre [0];
        let inicialMaterno = this._apellidoMaterno [0];
        let inicialPaterno = this._apellidoPaterno [0];
    
    
        return (`${inicialNombre}.${inicialPaterno}.${inicialMaterno}`)
    }
    
    getApellidoPaterno(){
        return this._apellidoPaterno;
    }
}