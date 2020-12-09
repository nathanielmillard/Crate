import request from 'supertest';
import testServer from '../../../../utils/test_helper/test_server'

describe('User', () => {
  let server;
  beforeAll(() => {
    server = testServer;
  })
  it('can edit a users email', async (done) => {
    const response = await request(server)
    .post('/graphql')
    .send({query: `mutation {
      userEmail(id: 1, email: "AA@email.com"){
        name
      }
    }`})
    .expect(200)
    const response2 = await request(server)
    .post('/graphql')
    .send({query: `{users { email } }`})
    console.log(response2.body.data)

    done();
  })
})
