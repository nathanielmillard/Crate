import request from 'supertest';
import testServer from '../../../../utils/test_helper/test_server'

describe('test the truth', () => {
  let server;
  beforeAll(() => {
    server = testServer;
  })
  it('returns stuff', async (done) => {
    const response = await request(server)
    .post('/graphql')
    .send({query: '{users { email } }'})
    .expect(200)
    // console.log(response.body)
    expect(response.body.data.users.length).toBe(2);
    expect(response.body.data).toMatchObject(
      {
        users: [
          { email: 'AA@email.com' }, { email: 'user@crate.com' }
        ]
      }
    )
    done();
  })
})

// to only run one test, do 'it.only(...)'
