const request = require('supertest');
 
 
const app = require('./server')
 

 
it('should return user data', (done) => {
request(app)
  .get('/')
  .expect(200)
  .end(done)
});
