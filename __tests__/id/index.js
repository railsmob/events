import Events from '../../src/Events';

describe('Events', () => {
  describe('.id', () => {
    it('should join category and id with a colon', () => {
      const events = new Events();
      expect(events.id('category', 'id')).toBe('category:id');
    });

    it('should return category if no id was provided', () => {
      const events = new Events();
      expect(events.id('category')).toBe('category');
    });

    it('should throw an error if arguments are not strings', () => {
      const events = new Events();
      expect(() => events.id()).toThrowError(
        new Error('categoryOrId should be a string')
      );
      expect(() => events.id('hello', 123)).toThrowError(
        new Error('id should be a string')
      );
    });
  });
});
