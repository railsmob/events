export default class Events {
  static SEP: string;
  static ANY: string;
  /**
   * @param {string} name
   * @param {string} id
   */
  static id: (name: string, id: string) => string;
  /**
   * @type {{ [name: string]: Array<{ id: string, fn: Function }> }}
   */
  listeners: {
    [name: string]: Array<{
      id: string;
      fn: Function;
    }>;
  };
  id: (name: string, id: string) => string;
  SEP: string;
  ANY: string;
  /**
   * @param {string} eventId
   * @param {Function} fn
   */
  on: (eventId: string, fn: Function) => void;
  /**
   * @param {string} eventId
   * @param {Function} fn
   */
  once: (eventId: string, fn: Function) => void;
  /**
   * @param {string} eventId
   * @param {Function} [fn]
   */
  off: (eventId: string, fn?: Function | undefined) => void;
  /**
   * @param {string} eventId
   * @param {any} [args]
   */
  emit: (eventId: string, args?: any) => void;
  /**
   * @param {string} eventId
   */
  parse: (eventId: string) => string[];
}
