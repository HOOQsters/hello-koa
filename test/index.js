import http from 'http';
import { app } from '../boot';
import { agent } from 'supertest-as-promised';

describe('Test', () => {

    let tester;
    beforeEach(async () => {
        tester = agent(http.createServer(app.callback()));
    });

    it('should be ok', async () => {
        tester.get('/')
              .expect(200);
    });
});

