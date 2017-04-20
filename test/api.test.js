const request = require('superagent');
const config = require('../src/config');
require('should');

describe('Check Express Server Running or not', (done)=> {
	//run Express Server
	before(()=> {
		require('../server/bin/app.js');
	});

	it('Check on port', (done)=> {
		request
			.get(config.serverUrl+'/')
			.end((err, response) => {
				response.should.have.property('statusCode');
				response.statusCode.should.be.exactly(200);
				done();
			});
	});
});

describe('CHeck weather Report', (done)=> {
	//run Express Server
	before(()=> {
		require('../server/bin/app.js');
	});
	// If the City Name is Given
	it('Check weather report by City Name', (done)=> {
		request
			.get(config.serverUrl+'/city/London')
			.end((err, response) => {
				response.should.have.property('statusCode');
				response.statusCode.should.be.exactly(200);
				done();
			});
	});

		// If the City Name is Not Given
	it('Check weather report if city Name not Given', (done)=> {
		request
			.get(config.serverUrl+'/city')
			.end((err, response) => {
				response.should.have.property('statusCode');
				response.statusCode.should.be.exactly(404);
				done();
			});
	});
});
