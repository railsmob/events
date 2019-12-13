export default class Events {
  static SEP = ':';
  static ANY = 'any';

  /**
   * @param {string} name
   * @param {string} id
   */
  static id = (name, id) => name + Events.SEP + id;

  /**
   * @type {{ [name: string]: Array<{ id: string, fn: Function }> }}
   */
  listeners = {};

  // aliases
  id = Events.id;
  SEP = Events.SEP;
  ANY = Events.ANY;

  /**
   * @param {string} eventId
   * @param {Function} fn
   */
  on = (eventId, fn) => {
    const [name, id] = this.parse(eventId);
    if (this.listeners[name] === undefined) this.listeners[name] = [];
    this.listeners[name].push({ id, fn });
  };

  /**
   * @param {string} eventId
   * @param {Function} fn
   */
  once = (eventId, fn) => {
    /**
     * @type {(args: any) => any}
     */
    const handler = args => {
      fn(args);
      this.off(eventId, handler);
    };
    this.on(eventId, handler);
  };

  /**
   * @param {string} eventId
   * @param {Function} fn
   */
  off = (eventId, fn) => {
    const [name, id] = this.parse(eventId);
    if (this.listeners[name] === undefined) return;
    this.listeners[name] = this.listeners[name].filter(listener =>
      !!fn
        ? !(listener.id === id && fn === listener.fn)
        : !(listener.id === id || id === Events.ANY)
    );
  };

  /**
   * @param {string} eventId
   * @param {any} args
   */
  emit = (eventId, args) => {
    const [name, id] = this.parse(eventId);
    if (this.listeners[name] === undefined) return;
    this.listeners[name].forEach(listener => {
      if (listener.id === id || listener.id === Events.ANY || id === Events.ANY)
        listener.fn(args);
    });
  };

  /**
   * @param {string} eventId
   */
  parse = eventId => {
    const [name, id = Events.ANY] = eventId.split(Events.SEP);
    return [name, id];
  };
}
