import app from '../lib/app.js';
import supertest from 'supertest';
import creatures from '../data/creatures.js';
const request = supertest(app);

// If a GET reqest is made to /api/cats
// does the server respond with status of 200
// and body matching the cats data?
it('GET /data/creatures', async () => {
  const expected = creatures;

  const response = await request.get('/data/creatures');

  expect(response.status).toBe(200); // 200 = OK
  expect(response.body).toEqual(expected);

});


it('GET /data/creatures/1', async () => {
  const expected =   {
    url:
      'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg',
    title: 'UniWhal',
    description: 'A unicorn and a narwhal nuzzling their horns',
    keyword: 'narwhal',
    horns: 1
  };

  const response = await request.get('/data/creatures/1');

  expect(response.status).toBe(200); // 200 = OK
  expect(response.body).toEqual(expected);

});
