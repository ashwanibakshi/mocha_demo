const chai  = require('chai');
const calculator = require('./cal');
const chaiHttp = require('chai-http');
const express  = require('express');

chai.use(chaiHttp);

const server = ()=>{
const app = express();
 app.get('/',(req,res)=>{
     res.status(200);
 });
 app.listen(3000,()=>console.log('test server'+3000));
 return app;
}

describe('demos',()=>{
 describe('get',()=>{
    let fakeServer
    beforeEach(() => {
         fakeServer =  server()
    }) 
  it('get',()=>{
    chai.expect(calculator.calc.add(1,1)).is.equal(2);
    chai.request(fakeServer).get('/').end((err,res)=>{
       chai.expect(res).to.have.status(200);
    });
  });
 });
});

