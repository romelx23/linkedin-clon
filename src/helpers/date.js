import moment from "moment";

// Parsear Fecha para poder ordenarla
export const convertDate = (fecha) => {
    // console.log(fecha);
    const time = new Date(fecha.seconds * 1000);
    // console.log(time);
    return time;
  };
  
  // Parsear Fecha con Moment en Español
  export const formatDate=(item)=>{
    const date=convertDate(item.date)
    // console.log(date);
    const dateParsed=moment(date).locale('es').format('LL');
    const hourParsed=moment(date).locale('es').startOf('minutes').fromNow();  
    // console.log(dateParsed);
    return {
      dateParsed,
      hourParsed
    };
  }