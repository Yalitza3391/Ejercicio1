
const axios = require('axios');
const getclima= async(lat,lon)=>{


    const resp= await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=54ecd4b02ba3dfd3202da29219e5bee5&units=metric`);

    
    return resp.data.main.temp;
    

    
}

module.exports={
    getclima
}



   