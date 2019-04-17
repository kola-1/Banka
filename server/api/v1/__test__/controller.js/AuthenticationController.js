import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../../app';

chai.use(chaiHttp);
const { expect } = chai;

describe('Authentication controller methods', () => {
    it('should signup a new user account', (done) => {
        chai.request(app)
            .post('/api/v1/auth/signup')
            .send({
                firstName: 'afirstname', lastName: 'alastname', email: 'newUser@mail.com', password: '12345678', type: 'client'
            })
            .end((err, res) => {
                expect(res.body).to.have.property('data');
                expect(res.body.data).to.have.property('id');
                expect(res.body.data).to.have.property('firstName');
                expect(res.body.data).to.have.property('lastName');
                expect(res.body.data).to.have.property('email');
                expect(res.body.data).to.have.property('token');
                expect(res.status).to.equal(201);
                done();
            });
    });
});
