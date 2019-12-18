export default class Events {
  SEP = ':';
  ANY = 'any';

  /**
   * @param {string} name
   * @param {string} id
   */
  id = (name, id) => name + this.SEP + id;

  /**
   * @type {{ [name: string]: Array<{ id: string, fn: Function }> }}
   */
  listeners = {};

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
   * @param {Function} [fn]
   */
  off = (eventId, fn) => {
    const [name, id] = this.parse(eventId);
    if (this.listeners[name] === undefined) return;
    this.listeners[name] = this.listeners[name].filter(listener =>
      !!fn
        ? !(listener.id === id && fn === listener.fn)
        : !(listener.id === id || id === this.ANY)
    );
  };

  /**
   * @param {string} eventId
   * @param {any} [args]
   */
  emit = (eventId, args) => {
    const [name, id] = this.parse(eventId);
    if (this.listeners[name] === undefined) return;
    this.listeners[name].forEach(listener => {
      if (listener.id === id || listener.id === this.ANY || id === this.ANY)
        listener.fn(args);
    });
  };

  /**
   * @param {string} eventId
   */
  parse = eventId => {
    const [name, id = this.ANY] = eventId.split(this.SEP);
    return [name, id];
  };
}
