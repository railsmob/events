import Events from '../../src/Events';

describe('Events', () => {
  describe('.emit', () => {
    it('should return if no listener found', () => {
      const events = new Events();
      expect(events.emit('something')).toBeUndefined();
    });

    it('should run all listeners with corresponding id', () => {
      const events = new Events();

      const fn1 = jest.fn();
      const fn2 = jest.fn();
      const fn3 = jest.fn();

      events.listeners.focus = [
        { id: '1', fn: fn1 },
        { id: '2', fn: fn2 },
        { id: events.ANY, fn: fn3 },
      ];

      events.emit('focus:1');
      expect(fn1).toBeCalled();
      expect(fn2).not.toBeCalled();
      expect(fn3).toBeCalled();

      events.emit('focus:2');
      expect(fn2).toBeCalled();
    });

    it('should run all listeners with corresponding event name', () => {
      const events = new Events();

      const fn1 = jest.fn();
      const fn2 = jest.fn();
      const fn3 = jest.fn();

      events.listeners.focus = [
        { id: '1', fn: fn1 },
        { id: '2', fn: fn2 },
        { id: events.ANY, fn: fn3 },
      ];

      events.emit('focus');
      expect(fn1).toBeCalled();
      expect(fn2).toBeCalled();
      expect(fn3).toBeCalled();
    });
  });
});
