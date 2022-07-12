request =require('request')
const forecast=(latitude,longitude,callback)=>{
const url ='http://api.weatherstack.com/current?access_key=0f19eaaba9c25f09335e3ccc40868938&query=' + latitude + ',' + longitude + '&units=f'

request({ url, json: true }, (error,{body}) => {
    if (error) {
        callback('Unable to connect to weather service!', undefined)
    } else if (body.error) {
        callback('Unable to find location', undefined)
    } else 
    {callback(undefined,body.current.weather_descriptions[0] +'! .It is currently ' + body.current.temperature + ' degree out. It feels like ' + body.current.feelslike +' degree out')
}
})
}
module.exports=forecast