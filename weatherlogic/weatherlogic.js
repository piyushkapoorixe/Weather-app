const request = require('request');

var weatherCity = (city, callback) => {
    // console.log(argv.city);  // To check to the yargs arguments

    // Encoding the city name
    var encoded = encodeURIComponent(city);
    //console.log(`Encoded City: ${encoded}`);

    // Decoding the city name
    // var decoded = decodeURIComponent(encoded);
    // console.log(`Decoded City: ${decoded}`);


    request({
        url: `http://api.openweathermap.org/data/2.5/weather?q=${encoded}&appid=a95269042f35fd480304f4a2e776096d&units=metric`,
        json: true    // Takes JSON and converts into object
    }, (error, response, body) => {
        //console.log(body);  // console.log(JSON.stringify(body, undefined, 2)); //both can be used
        if (error) {
            callback("Server Error");
        } else if (body.cod === '404') {
            callback("City not found");
        } else if (body.cod == 200) {
            callback(undefined, `City: ${body.name} \nCountry: ${body.sys.country} \nLatitude: ${body.coord.lat} \nLongitude: ${body.coord.lon} \nTemperature: ${body.main.temp}`);
        }
    });
};

module.exports.weatherCity = weatherCity;