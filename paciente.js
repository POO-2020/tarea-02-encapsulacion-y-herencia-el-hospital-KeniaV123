
export default class Paciente {

    /**
 * @param {Nombre} nombre
 * @param {Fecha} fechaNacimiento
 * @param {number} telefono
 */


    constructor ({nombre, fechaNacimiento, telefono }){
        this._nombre = nombre;
        this._fechaNacimiento = fechaNacimiento;
        this._telefono = telefono;


    }
    getPerfil(){
        var telefonoString= this._telefono.toString();
        return (`${this._nombre.getNombreCompleto()}, ${this._fechaNacimiento.getFecha()}, ${telefonoString.slice(0,3)}-${telefonoString.slice(3,6)}-${telefonoString.slice(6,10)}`);
    }
}