let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should(); 
let server = "http://18.181.184.53/getmessage.php"; // "http://webapp";
chai.use(chaiHttp);

describe('/getmessage.php', () => {
    it('it should GET the hello message', (done) => {
        chai.request(server)
            .get('/getmessage.php')
//            .send(book)
            .end((err, res) => {

                if (err) {
                    console.log('Response status:', err.status);
                    console.log('Response body:', err.body);
                }
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('response');
                res.body.response.should.eql('hello');
//                res.body.should.have.property.eql('hello');
                done();
           });
    });
});
