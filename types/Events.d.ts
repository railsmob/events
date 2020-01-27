export default class Events {
  SEP: string;
  ANY: string;
  /**
   * @param {string} categoryOrId
   * @param {string} id
   */
  id: (categoryOrId: string, id: string) => string;
  /**
   * @param {string} id
   */
  parse: (id: string) => string[];
  /**
   * @type {{ [name: string]: Array<{ id: string, fn: Function }> }}
   */
  listeners: {
    [name: string]: Array<{
      id: string;
      fn: Function;
    }>;
  };
  /**
   * @param {string} eventId
   * @param {Function} fn
   */
  on: (eventId: string, fn: Function) => void;
  /**
   * @param {string} eventId
   * @param {Function} [fn]
   */
  off: (eventId: string, fn?: Function | undefined) => void;
  /**
   * @param {string} eventId
   * @param {Function} fn
   */
  once: (eventId: string, fn: Function) => void;
  /**
   * @param {string} eventId
   * @param {any} [args]
   */
  emit: (eventId: string, args?: any) => void;
}
