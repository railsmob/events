import Events from '../../src/Events';

describe('Events', () => {
  describe('.once', () => {
    it('should execute and remove listener after first run', () => {
      const events = new Events();
      const handler = jest.fn();
      expect.assertions(4);
      expect(events.listeners).toEqual({});
      events.once('hello', handler);
      events.emit('hello', { hello: 'world' });
      expect(handler).toHaveBeenCalledWith({ hello: 'world' });
      expect(events.listeners).toEqual({
        hello: [],
      });
      events.emit('hello');
      events.emit('hello');
      expect(handler).toHaveBeenCalledTimes(1);
    });
  });
});
