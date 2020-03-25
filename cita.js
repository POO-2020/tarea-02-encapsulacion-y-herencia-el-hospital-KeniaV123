export default class Cita{
    /**
     * 
     * @param {Fecha} fecha 
     * @param {Tiempo} hora 
     * @param {Nombre} doctor Nombre del doctor
     * @param {Nombre} paciente nombre del paciente
     */
    constructor({fecha,hora,doctor,paciente}){
        this._fecha= fecha;
        this._hora=hora;
        this._doctor=doctor;
        this._paciente=paciente;
    }
    getPerfil(){
        return (`${this._fecha.getFecha()}, ${this._hora.getFormato24()}, Dr. ${this._doctor.getNombreCompleto()}, ${this._paciente.getNombreCompleto()}`);
    }
}