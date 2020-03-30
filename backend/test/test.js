var app = require('../app');
var chai = require('chai');
chai.use(require('chai-http'));
var expect = require('chai').expect;

var agent = require('chai').request.agent(app);

describe('Canvas test', function(){
    it('POST /login - Incorrect email',function(done){
        const data = {
            email :"n@gmail.com",
            password:"123456",
        }
        agent.post('/api/account/login',data)
             .send(data)
            .then(function(res){
                expect(res.body.success).to.equal(0);
                expect(res.status).to.equal(400);
                done();
            })
            .catch((e) => {
                done(e);
            });
    });
    it('POST /login - Incorrect password',function(done){
        const data = {
            email :"narain@gmail.com",
            password:"1234567",
        }
        agent.post('/api/account/login',data)
            .send(data)
            .then(function(res){
                expect(res.body.success).to.equal(0);
                expect(res.status).to.equal(400);
                done();
            })
            .catch((e) => {
                done(e);
            });
    });
    it('POST /login - Correct Credentials',function(done){
        const data = {
            email : 'narain@gmail.com',
            password: '123456',
        }
        agent.post('/api/account/login')
            .send(data)
            .then(function(res){
                expect(res.body.success).to.equal(1);
                done();
            })
            .catch((e) => {
                done(e);
            });
    });
})