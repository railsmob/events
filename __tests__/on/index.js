import Events from '../../src/Events';

describe('Events', () => {
  describe('.on', () => {
    it('should throw if fn is not a function', () => {
      const events = new Events();
      expect(() => events.on('category')).toThrowError(
        new Error('fn should be a function')
      );
    });

    it('should create a new array for category in listeners if was no one', () => {
      const events = new Events();
      expect(events.listeners.category).toEqual(undefined);
      events.on('category', () => {});
      expect(Array.isArray(events.listeners.category)).toBeTruthy();
    });

    it('should add listener with category name parsed from eventId', () => {
      const events = new Events();
      expect(events.listeners).toEqual({});
      const fn1 = () => {};
      events.on('focus:id1', fn1);
      expect(events.listeners).toEqual({
        focus: [{ id: 'id1', fn: fn1 }],
      });
      const fn2 = () => {};
      events.on('blur:id2', fn2);
      expect(events.listeners).toEqual({
        focus: [{ id: 'id1', fn: fn1 }],
        blur: [{ id: 'id2', fn: fn2 }],
      });
      const fn3 = () => {};
      events.on('blur:id3', fn3);
      expect(events.listeners).toEqual({
        focus: [{ id: 'id1', fn: fn1 }],
        blur: [
          { id: 'id2', fn: fn2 },
          { id: 'id3', fn: fn3 },
        ],
      });
    });

    it('should add any listener if eventId was not splitted', () => {
      const events = new Events();
      expect(events.listeners).toEqual({});
      const fn = () => {};
      events.on('focus', fn);
      expect(events.listeners).toEqual({
        focus: [{ id: events.ANY, fn }],
      });
    });
  });
});
