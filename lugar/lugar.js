



const axios = require('axios');
const getLugar= async(dir)=>{

    const encodedUrl=encodeURI(dir);
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        headers: {'X-RapidAPI-Key':'4d7cb7222amsh7f54268318b7e49p19a6c1jsn42c1586d1fde'}
      });
    
    const resp= await instance.get();

    if (resp.data.Results.length == 0){
        throw new Error('no hay resultados')
    }
    const data= resp.data.Results[9];
    const direccion=data.name;
    const lat=data.lat;
    const log=data.lon;


    return{
        direccion,
        lat,
        log
    }
    
}

module.exports={
    getLugar
}



   