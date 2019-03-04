const request = require('request');
const yargs = require('yargs');

const weatherlogic = require('./weatherlogic/weatherlogic.js');

const argv = yargs
    .options({
        city: {
            demand: true,
            alias: 'c',
            describe: 'Enter the city for which weather is to be computed',
            string: true    // tells yargs to always parse the argument c as string
        }
    })
    .help()
    .alias('help', 'h')
.argv;

weatherlogic.weatherCity(argv.city, (errorMessage, results) => {
    if(errorMessage) {
        console.log(errorMessage);
    } else if (results) {
        console.log(results);
    }
}); 

