const request = require('supertest');
const match = require('chai').expect
 
const app = require('./index')
 

 
it('should return user data', (done) => {
request(app)
  .get('/fetchData')
  .expect(200)
  .expect((res) => {
      // console.log(res)
  
    match(res.body).to.have.property('title')
   
  }).end(done)
});
