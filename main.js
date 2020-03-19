import Paciente from "./paciente.js";
import Fecha from "./fecha.js";
import Tiempo from "./tiempo.js";
import Doctor from "./doctor.js";
import Nombre from "./nombre.js";
import Cita from "./cita.js";
import Hospital from "./hospital.js";

class Main {
  constructor() {
    this.hospital = new Hospital("Hospital", "KEVS");
  }

  probarCita() {
    let pruebaCita = new Cita (new Fecha(22, 1, 2001), 
new Tiempo(6, 45, 'PM'), 
new Doctor(new Nombre("Juan", "Michel", "Vargas")), 
new Paciente(new Nombre("Kenia", "Villa", "Serratos")));

    console.log(pruebaCita.getCita());
  }

  agregarDoctor() {   //print
    let doctor1 = new Doctor(new Nombre("Juan", "Michel", "Vargas"),
"Pediatra",
7687983,
3128857676);
    let doctor2 = new Doctor(new Nombre("Alexander", "Velasco", "Jimenez"),
"Neurologo",
6567897,
3145567898);

    this.hospital.registrarDoctor(doctor1);
    this.hospital.registrarDoctor(doctor2);
    this.hospital.listarDoctores();
  }

  agregarCita() {
    let cita1 = new Cita(new Fecha(29, 2, 2020),
new Tiempo(8, 15, "PM"),
new Doctor(new Nombre("Juan", "Michel", "Vargas")),
new Paciente(new Nombre("Kenia", "Villa", "Serratos"))
);
let cita2 = new Cita(new Fecha(1, 3, 2020),
new Tiempo(6, 45, "PM"),
new Doctor(new Nombre("Alexander", "Velasco", "Jimenez")),
new Paciente(new Nombre("Jonathan", "Rodriguez", "De Villa"))
);
    this.hospital.registrarCita(cita1);
    this.hospital.registrarCita(cita2);
    this.hospital.listarCitas();
  }
}

let app = new Main();
app.agregarDoctor();
app.agregarCita();
