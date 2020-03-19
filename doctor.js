import Nombre from "./nombre.js";

export default class Doctor {

    /**
 * @param {number} cedula 
 * @param {string} especialidad
 * @param {Nombre} nombre
 * @param {number} telefono
 */

    constructor (nombre, especialidad, cedula, telefono){

        this.cedula = cedula;
        this.especialidad = especialidad;
        this.nombre = nombre;
        this.telefono = telefono;

    }
    getPerfil(){
        return (`Cedula:${this.cedula}, Especialidad:${this.especialidad}, 
    Nombre:${this.nombre.getNombreCompleto()}, Telefono:${this.telefono}`)

    }
}