import Events from '../src/Events';

describe('Events', () => {
  it('should has listeners as an empty object', () => {
    const events = new Events();
    expect(events.listeners).toEqual({});
  });

  it('should has a sepatator', () => {
    const events = new Events();
    expect(events.SEP).toBe(':');
  });

  it('should has any event', () => {
    const events = new Events();
    expect(events.ANY).toBe('any');
  });
});
