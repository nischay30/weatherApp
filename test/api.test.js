const request = require('superagent');
const config = require('./config.test.js');
const path = require('path');
require('should');

describe('Check Express Server Running or not', (done)=> {
	//run Express Server
	before(()=> {
		require(path.join(__dirname,'..', 'server', 'bin', 'app'));
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

describe('Check weather Report', (done)=> {
	//run Express Server
	before(()=> {
		require(path.join(__dirname, '..', 'server', 'bin', 'app'));
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
