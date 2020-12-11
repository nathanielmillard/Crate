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

    done();
  })

  it('can edit a users image URL', async (done) => {
    const response = await request(server)
    .post('/graphql')
    .send({query: `mutation {
      userImage(id: 2, image: "https://this.is.not.a.real.image.com"){
        name
      }
    }`})
    .expect(200)
    const response2 = await request(server)
    .post('/graphql')
    .send({query: `{users { email, image, id } }`})
    // console.log(response2.body.data)
    expect(response2.body.data).toMatchObject(
      {
        users: [
          { email: 'AA@email.com', image: null, id: 1 },
          {
            email: 'user@crate.com',
            image: 'https://this.is.not.a.real.image.com',
            id: 2
          }
        ]
      }
    )

    done();
  })
})
