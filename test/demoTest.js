const chai       = require('chai');
const chaiHttp   = require('chai-http');
const fakeServer = require('../index');

chai.should();
chai.use(chaiHttp);


describe('testing Apis',()=>{
 describe('dataApis',()=>{
      it('testing the get all user',(done)=>{
         chai.request(fakeServer).get('/user/addUser').end((err,res)=>{
             res.should.have.status(200);
             res.body.should.be.a('array');
             done();
         });
      });
      it('testing the add user api',(done)=>{
        chai.request(fakeServer).post('/user/addUser').type('form').send({username:'demo11',email:'demo11@d.com',password:'1234567'}).end((err,res)=>{
            res.should.have.status(200);
            // res.body.should.be.property('username');
            res.body.should.be.a('object');
            done();
        });
      });
    });
});

