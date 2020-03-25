

export default class Doctor {

    /**
 * @param {number} cedula 
 * @param {string} especialidad
 * @param {Nombre} nombre
 * @param {number} telefono
 */

    constructor ({nombre, especialidad, cedula, telefono}){

        this._cedula = cedula;
        this._especialidad = especialidad;
        this._nombre = nombre;
        this._telefono = telefono;

    }
    getPerfil(){
        return (`Cedula:${this._cedula}, Especialidad:${this._especialidad}, 
    Nombre:${this._nombre.getNombreCompleto()}, Telefono:${this._telefono}`)

    }
}