let chai = require('chai');
let chaiHttp = require('chai-http');

let server = "http://webapp";
chai.use(chaiHttp);

describe('/getmessage.php', () => {
    it('it should GET the hello message', (done) => {
        chai.request(server)
            .get('/getmessage.php')
            .send(book)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('response');
                res.body.should.have.property('response').eql('hello');
                done();
            });
    });
});
