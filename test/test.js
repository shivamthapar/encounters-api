var request = require('supertest');
var restify = require('restify');
var api = request('http://localhost:3000/');

var client = restify.createJsonClient({
  url: 'http://localhost:3000',
  version: '~1.0'
});
describe('POST', function(){
  it('responds with a json success message', function(done){
    api
    .post('/users')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .send({'name': 'Shivam Thapar', 'fbId': '609771870'})
    .expect(200, done);
  });
});
