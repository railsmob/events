declare module "src/Events" {
    /**
     * @typedef {(args: any) => any} ListenerFn
     * @typedef {{ id: string, fn: ListenerFn }} Listener
     */
    export default class Events {
        static SEP: string;
        static ANY: string;
        /**
         * @param {string} name
         * @param {string} id
         */
        static id: (name: string, id: string) => string;
        /**
         * @type {{ [name: string]: Array<Listener> }}
         */
        listeners: {
            [name: string]: Array<Listener>;
        };
        id: (name: string, id: string) => string;
        SEP: string;
        ANY: string;
        /**
         * @param {string} eventId
         * @param {ListenerFn} fn
         */
        on: (eventId: string, fn: (args: any) => any) => void;
        /**
         * @param {string} eventId
         * @param {ListenerFn} fn
         */
        once: (eventId: string, fn: (args: any) => any) => void;
        /**
         * @param {string} eventId
         * @param {ListenerFn} fn
         */
        off: (eventId: string, fn: (args: any) => any) => void;
        /**
         * @param {string} eventId
         * @param {any} args
         */
        emit: (eventId: string, args: any) => void;
        /**
         * @param {string} eventId
         */
        parse: (eventId: string) => string[];
    }
    export type ListenerFn = (args: any) => any;
    export type Listener = {
        id: string;
        fn: (args: any) => any;
    };
}
declare module "index" {
    export { Events };
    var _default: Events;
    export default _default;
    import Events from "src/Events";
}
