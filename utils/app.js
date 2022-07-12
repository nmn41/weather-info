const request =require('request')
const geocode=require('./utils/geocode')
const forecast=require('./utils/forecast')
const address= process.argv[2]
 if(!address){
    console.log('Please provide the address')
 }else{    
 console.log(process.argv)
 geocode(address,(error,{latitude,longitude,location}) => {
     if(error){
         return console.log(error)}

     forecast(latitude, longitude,(error,forecastData)=>{
         if(error){
             return console.log(error)
         }
             console.log(location)
             console.log(forecastData)
     })
     
})
}










// // // // http://api.weatherstack.com/current?access_key=0f19eaaba9c25f09335e3ccc40868938&query=37.8267,-122.4233
// // // // //Geocoding 
// // // // //Address -> 
// console.log('Starting')
// setTimeout(() => {
//     console.log('2 Second Timer')
// },2000)
// setTimeout(() => {
//     console.log('0 Second Timer')
// },0)

// console.log('Stopping')