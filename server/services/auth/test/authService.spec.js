'use strict';

// Locals
import testUtils from './../../../utils/testUtils';
import authService from './../authService';


// Access the test app's supertest object
let requester = testUtils.requester;
let testUser = testUtils.testUser;


describe('Auth: ', () => {
  
  // LOG IN

  describe('Logging In: ', () => {

    let user;
    let token;
    let logInUrl = authService.url + '/login';

    beforeAll((done) => {
      console.log('');
      console.log('Starting auth service tests');

      testUtils.clearLocalTestDatabase()
        .then(() => testUtils.addTestUser())
        .then((testUser) => {
          user = testUser;
          done();
        });
    });

    afterAll((done) => {
      testUtils.clearLocalTestDatabase()
      .then(() => {
        done();
      });
    });


    it('does not log in a user that cannot be found', (done) => {
      let nonExistentUser = { email: 'someValid@email.com', password: 'somepassw0rd' };

      requester
        .post(logInUrl)
        .send(nonExistentUser)
        .expect(404)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          expect(res.body.message).toBe('user not found');
          expect(res.body.status).toBe(404);
          done();
        });
    });

    it('logs in an existing valid user', (done) => {
      requester
        .post(logInUrl)
        .send({ email: user.email.email, password: testUser.password })
        .expect(404)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          expect(res.body.token).toBeDefined();
          expect(res.body.user).toBeDefined();
          done();
        });
    });
  });  

});
