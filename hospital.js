
export default class Hospital {
  /**
   *
   * @param {Nombre} nombre | Nombre del Hospital
   * @param {string} direccion | Dirección del Hospital
   * @param {Doctor} doctores | Clase Doctor
   * @param {Cita} citas | clase Cita
   */

  constructor(nombre, direccion) {
    this._nombre = nombre;
    this._direccion = direccion;
    this._doctores = new Array();
    this._citas = new Array();
  }

  registrarDoctores(doctor){
    this._doctores.push(doctor);
}
buscarDoctor(doctor){
    var resultado = false;
    this._doctores.forEach(doc =>{
        if (doc._cedula === doctor._cedula){
            resultado = true;
        }
    });
    return resultado;
}
eliminarDoctor(doctor){
    var indice = this.buscarIndiceD(doctor);
    if (indice<0){
        return false;
    }
    this._doctores.splice(indice,1);
    return true;
}
actualizarDoctor(doctor,nuevoDoctor){
    var indice = this.buscarIndiceD(doctor);
    if (indice<0){
        return false;
    }
    this._doctores.splice(indice,1,nuevoDoctor);
    return true;
}
listarDoctores(){
    this._doctores.forEach((doctores,i)=>{
        console.log(`${i} ${doctores.getPerfil()}`);
    });
}
registrarCitas(cita){
    this._citas.push(cita);
}
buscarCita(cita){
    var resultado = false;
    this._citas.forEach(cit => {
        if (cit._paciente === cita._paciente){
            resultado = true;
        }
    });
    return resultado;
}
eliminarCita(cita){
    var indice = this.buscarIndiceC(cita);
    if (indice < 0){
        return false;
    }
    this._citas.splice(indice,1);
    return true;
}
actualizarCita(cita,nuevaCita){
    var indice = this.buscarIndiceC(cita);
    if (indice < 0){
        return false;
    }
    this._citas.splice(indice,1,nuevaCita);
    return true;
}
listarCitas(){
    this._citas.forEach((cita,i)=>{
        console.log(`${i} ${cita.getPerfil()}`);
    });
}
buscarIndiceD(doctor){
    var indice= -1;
    this._doctores.forEach((doc,i)=>{
        if (doc._cedula === doctor._cedula){
            indice = i;
        }
    });
    return indice;
}
buscarIndiceC(cita){
    var indice = -1;
    this._citas.forEach((cit,i) => {
        if (cit._paciente === cita._paciente){
            indice = i;
        }
    });
    return indice;
}
}