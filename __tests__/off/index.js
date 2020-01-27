import Events from '../../src/Events';

describe('Events', () => {
  describe('.off', () => {
    it('should return if no listeners found', () => {
      const events = new Events();
      expect(events.off('hello')).toBeUndefined();
    });

    it('should remove listener by eventId', () => {
      const events = new Events();

      const fn1 = () => {};
      const fn2 = () => {};
      const fn3 = () => {};

      events.listeners.blur = [
        { id: '1', fn: fn1 },
        { id: '2', fn: fn2 },
        { id: events.ANY, fn: fn3 },
      ];

      events.listeners.focus = [
        { id: '3', fn: fn1 },
        { id: '4', fn: fn2 },
        { id: events.ANY, fn: fn3 },
      ];

      events.off('focus:3');
      expect(events.listeners.focus).toEqual([
        { id: '4', fn: fn2 },
        { id: events.ANY, fn: fn3 },
      ]);

      events.off('focus');
      expect(events.listeners.focus).toEqual([]);

      events.off('blur:2');
      expect(events.listeners.blur).toEqual([
        { id: '1', fn: fn1 },
        { id: events.ANY, fn: fn3 },
      ]);

      events.off('blur');
      expect(events.listeners.blur).toEqual([]);
    });

    it('should remove specific handler it it was provided', () => {
      const events = new Events();
      const handler1 = jest.fn();
      const handler2 = jest.fn();
      events.on('hello', handler1);
      events.on('hello', handler2);
      expect(events.listeners).toEqual({
        hello: [
          {
            id: 'any',
            fn: handler1,
          },
          {
            id: 'any',
            fn: handler2,
          },
        ],
      });
      events.off('hello', handler1);
      expect(events.listeners).toEqual({
        hello: [
          {
            id: 'any',
            fn: handler2,
          },
        ],
      });
    });
  });
});
