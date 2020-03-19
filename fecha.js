export default class Fecha{

    /**
    * @param {Dia} dia
    * @param {Mes} mes
    * @param {año} año
    */
   
      constructor(dia,mes,año){
          this.fecha = new Date(año, mes-1, dia);
          this.diaSemana = ["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"];
      }
   
      getAños(){
          let a = Date.now()-this.fecha;
          let b = 1000*60*60*24*365;
          let fechaActual = Math.trunc(a/z);
          return `La diferencia es de ${fechaActual} años`;
      }
   
      getMeses(){
          let a = Date.now()-this.fecha;
          let b = 1000*60*60*24*7*4;
          let fechaActual = Math.trunc(a/b);
          return `La diferencia es de ${fechaActual} meses`;
      }
   
      getSemanas(){
          let a = Date.now()-this.fecha;
          let b = 1000*60*60*24*7;
          let fechaActual = Math.trunc(a/b);
          return `La diferencia es de ${fechaActual} semanas`;
      }
   
      getDias(){
          let a = Date.now()-this.fecha;
          let b = 1000*60*60*24;
          let fechaActual = Math.trunc(a/b);
          return `La diferencia es de ${fechaActual} días`;
      }
   
      getFecha(){
          return `${this.fecha.getDate()}/${this.fecha.getMonth()+1}/${this.fecha.getFullYear()}`;
      }
      getDiaFecha(){
          return `${this.diaSemana[this.fecha.getDay()]}`
      }
   }