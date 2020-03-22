/* eslint-disable jest/valid-expect */

const Code = require('@hapi/code');
const Lab = require('@hapi/lab');

const getServer = require('../../server');

const { expect } = Code;
const { it, describe, before } = (exports.lab = Lab.script());

describe('POST /users', () => {
  let server;

  before(async () => {
    server = await getServer();
    await server.initialize();
  });

  const makeRequest = payload =>
    server.inject({
      method: 'POST',
      url: '/users',
      payload,
    });

  it('responds with 200 and a user object', async () => {
    const res = await makeRequest({
      first_name: 'Test',
      last_name: 'User',
      email: 'test@getyesterday.dev',
      password: 'password1',
    });
    console.log(res.result);
    expect(res.statusCode).to.equal(200);
  });
});
