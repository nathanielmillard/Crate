import request from 'supertest';
import testServer from '../../../../utils/test_helper/test_server'

describe('User', () => {
  let server;
  beforeAll(() => {
    server = testServer;
  })
  it('can return all users', async (done) => {
    const response = await request(server)
    .post('/graphql')
    .send({query: `{users { email } }`})
    .expect(200)
    // console.log(response.body.data);
    expect(response.body.data.users.length).toBe(2);
    expect(response.body.data).toMatchObject(
      {
        users: [
          { email: 'admin@crate.com' }, { email: 'user@crate.com' }
        ]
      }
    )
    done();
  })
})

// to only run one test, do 'it.only(...)'
