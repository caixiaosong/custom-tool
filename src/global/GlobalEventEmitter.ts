import { EventEmitter } from "events";

export default class GlobalEventEmitter extends EventEmitter {

    public static getInstance(): GlobalEventEmitter {
        return GlobalEventEmitter._instance;
    }

    private static _instance: GlobalEventEmitter = new EventEmitter();
}
