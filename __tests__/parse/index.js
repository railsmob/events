import Events from '../../src/Events';

describe('Events', () => {
  describe('.parse', () => {
    it('should split eventId into categoryOrName and name', () => {
      const events = new Events();
      const [categoryOrId, id] = events.parse('focus:1');
      expect(categoryOrId).toEqual('focus');
      expect(id).toEqual('1');
    });

    it("should assign 'any' id if the eventId can't be splitted", () => {
      const events = new Events();
      const [categoryOrId, id] = events.parse('blur');
      expect(categoryOrId).toEqual('blur');
      expect(id).toEqual(events.ANY);
    });

    it('should throw if an eventId is not a string', () => {
      const events = new Events();
      expect(() => events.parse(123)).toThrowError(
        new Error('id should be a string')
      );
    });
  });
});
