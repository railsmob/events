export default class Events {
  SEP = ':';
  ANY = 'any';

  /**
   * @param {string} categoryOrId
   * @param {string} id
   */
  id = (categoryOrId, id) => {
    if (typeof categoryOrId !== 'string')
      throw Error('categoryOrId should be a string');
    if (id === undefined) return categoryOrId;
    if (typeof id !== 'string') throw Error('id should be a string');
    return categoryOrId + this.SEP + id;
  };

  /**
   * @param {string} id
   */
  parse = id => {
    if (typeof id !== 'string') throw Error('id should be a string');
    const [categoryOrId, name = this.ANY] = id.split(this.SEP);
    return [categoryOrId, name];
  };

  /**
   * @type {{ [name: string]: Array<{ id: string, fn: Function }> }}
   */
  listeners = {};

  /**
   * @param {string} eventId
   * @param {Function} fn
   */
  on = (eventId, fn) => {
    if (typeof fn !== 'function') throw Error('fn should be a function');
    const [categoryOrId, id] = this.parse(eventId);
    if (this.listeners[categoryOrId] === undefined)
      this.listeners[categoryOrId] = [];
    this.listeners[categoryOrId].push({ id, fn });
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
   * @param {Function} fn
   */
  once = (eventId, fn) => {
    if (typeof fn !== 'function') throw Error('fn should be a function');
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
}
