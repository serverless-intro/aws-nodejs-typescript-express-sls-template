/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore: esModuleInterop flag set in tsconfig.json
import request from 'supertest';
// @ts-ignore: esModuleInterop flag set in tsconfig.json
import app from '../src/app';

describe('App', () => {
  it('responds with 200 on /hello', (done) => {
    request(app).get('/hello')
      .expect(200, done);
  });
  it('responds with 404 on /fake-url', (done) => {
    request(app).get('/fake-url')
        .expect(404, done);
  });
});
