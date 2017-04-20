const request = require('superagent');
const apiKey = process.env.API_KEY || 'f7325f05bef0a047112942af02b76460';

module.exports = (req, res) => {
	const cityName = req.params.cityName;
	const url = 'http://api.openweathermap.org/data/2.5/forecast?q='+cityName+'&appid='+apiKey;
	request
		.get(url)
		.set("content-type","application/json")
		.end((err, res1) => {
			if(err) { console.log('Err:', err); return; }
			transformPayload(res1.body, res);
		});
}

function transformPayload(weatherReport, res) {
	const serverCityName = {
		name :  weatherReport.city.name,
		country: weatherReport.city.country
	}
	// Day wise Array For weather report
	let reports = [];
	let firstDay = true;
	let counter = 0;
	for(let i=0; i <5 ; i++) {
		let dayWiseReport = [];
		if(firstDay) {
			for(let j=0; j < (weatherReport.list.length % 8); j++) {
				dayWiseReport.push(weatherReport.list[counter]);
				counter++;
			}
			firstDay = false;
			} else {
			for(let j=0; j < 8 ; j++) {
				dayWiseReport.push(weatherReport.list[counter]);
				counter++;
			}
		}
		reports.push(dayWiseReport);
	}
	res.json({serverCityName, reports: reports, showCity: true});
}
