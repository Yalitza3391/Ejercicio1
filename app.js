
const lugar=require('./lugar/lugar');
const clima=require('./clima/clima');

const argv= require('yargs').options({
    direccion:{
        alias:'d',
        demand:true,
        desc:'Cuidad'
    }
    
    }).argv;


const getinfo =async(direccion) => {

try{
const data = await lugar.getLugar(direccion)
const resp= await clima.getclima(data.lat, data.log)
return(resp)
}
catch(e){
return ('error')
}
return resp;
}

getinfo(argv.direccion)
.then (console.log)
.catch(console.log);
