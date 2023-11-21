import sleep from "../Problems/question3";
describe('sleep', () => {
      test('returns a promise', () => {
        const sleepPromise = sleep(1);
        expect(sleepPromise instanceof Promise).toBe(true);
      });

      test('simultaneous sleep calls', async () => {
        const delay1 = 30;
        const delay2 = 60;
        const startTime = Date.now();
      
        const sleep1 = sleep(delay1).then(() => Date.now() - startTime);
        const sleep2 = sleep(delay2).then(() => Date.now() - startTime);
      
        const results = await Promise.all([sleep1, sleep2]);
        expect(results[0]).toBeGreaterThanOrEqual(delay1);
        expect(results[1]).toBeGreaterThanOrEqual(delay2);
      });
      
      test('negative delay', async () => {
        const startTime = Date.now();
        await sleep(-50);
        const endTime = Date.now();
        // The function should return immediately without delay
        expect(endTime - startTime).toBeLessThan(50);
      });
      

      test('executes after delay', async () => {
        expect.assertions(4);
        let i = 0;
        expect(i).toBe(0);
        let now = Date.now();
        await sleep(50);
        expect(i).toBe(0);
        i++;
        expect(i).toBe(1);
        expect(Date.now() - now).toBeGreaterThan(25);
      });

      test('delay of 0', (done) => {
        expect.assertions(3);
        let i = 0;
        expect(i).toBe(0);
        sleep(0).then(() => {
          i++;
          expect(i).toBe(2);
          done();
        });
        i++;
        expect(i).toBe(1);
      });

      test('delay bigger than 0', (done) => {
        expect.assertions(3);
        let i = 0;
        expect(i).toBe(0);
        sleep(50).then(() => {
          i++;
          expect(i).toBe(2);
          done();
        });
        i++;
        expect(i).toBe(1);
      });

      test('does not block other async operations', (done) => {
        expect.assertions(4);
        let i = 0;
        expect(i).toBe(0);
        sleep(50).then(() => {
          i++;
          expect(i).toBe(3);
          done();
        });
        setTimeout(() => {
          i++;
          expect(i).toBe(2);
        }, 25);
        i++;
        expect(i).toBe(1);
      });


});