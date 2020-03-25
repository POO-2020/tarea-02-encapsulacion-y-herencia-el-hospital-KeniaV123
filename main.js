import Tiempo from "./tiempo.js";
import Nombre from "./nombre.js";
import Doctor from "./doctor.js";
import Fecha from "./fecha.js";
import Paciente from "./paciente.js";
import Hospital from "./hospital.js";
import Cita from "./cita.js";
import PacienteAsegurado from "./paciente-asegurado.js";
var datosHospital = {
    nombre: "Piratin",
    direccion: "piratita #1"
};
class Main{
    constructor(){
        this.hospital = new Hospital(datosHospital);
    }
    testHospital(){
        var datosDoctor1 = {
            cedula: 98989,
            especialidad: "Pediatria",
            nombre: new Nombre("Paola","Villa","Serratos"),
            telefono: 3148888
        };
        var datosDoctor2 = {
            cedula: 47474,
            especialidad: "Cardiólogo",
            nombre: new Nombre("Pirata","Villa","Serratos"),
            telefono:31477777
        };
        var datosDoctor3 = {
            cedula: 64545,
            especialidad: "Ginecólogo",
            nombre: new Nombre("Palomo","Villa","Serratos"),
            telefono: 312123123
        };
        var doctor1= new Doctor(datosDoctor1);
        var doctor2 = new Doctor(datosDoctor2);
        var doctor3= new Doctor(datosDoctor3);
        this.hospital.registrarDoctores(doctor1);
        this.hospital.registrarDoctores(doctor2);
        this.hospital.registrarDoctores(doctor3);
        this.hospital.listarDoctores();
    
        var datosCita1 = {
            fecha: new Fecha(23,1,2020),
            hora: new Tiempo(20,40),
            doctor: new Nombre("Paola","Villa","Serratos"),
            paciente: new Nombre("Maura","Serratos","Ruiz")
        };
        var datosCita2 = {
            fecha: new Fecha(22,3,2020),
            hora: new Tiempo(20,10),
            doctor: new Nombre("Pirata","Villa","Serratos"),
            paciente: new Nombre("José","Villa","Serratos")
        };
        var datosCita3 = {
            fecha: new Fecha(13,3,2020),
            hora: new Tiempo(20,20),
            doctor: new Nombre("Palomo","Villa","Serratos"),
            paciente: new Nombre("Duque","Rios","Duran")
        };
        var c1= new Cita(datosCita1);
        var c2 = new Cita(datosCita2);
        var c3 = new Cita(datosCita3);
        this.hospital.registrarCitas(c1);
        this.hospital.registrarCitas(c2);
        //this.hospital.registrarCitas(c3);
        this.hospital.listarCitas();
        console.log("--------------------");
        console.log(this.hospital.actualizarCita(c2,c3));
        this.hospital.listarCitas();
    }
}

var app =new Main();

app.testHospital();