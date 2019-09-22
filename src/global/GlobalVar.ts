

type AUTH_KEY = 'isDev';

/**
 * 想要增加类型必须在KEY中增加，不允许未授权就添加任意的key
 */
export class GlobalVar {
    private static _instance: GlobalVar = new GlobalVar();
    private map: Map<AUTH_KEY, any> = new Map<AUTH_KEY, any>();

    public static get instance(): GlobalVar {
        return GlobalVar._instance;
    }


    public isDev(): any {
        return this.getVaule('isDev');
    }

    /**
     * 获取指定key的值
     * @param key 指定的key
     */
    public getVaule(key: AUTH_KEY): any {
        return GlobalVar.instance.map.get(key);
    }

    /**
     * 设置对应的key为指定的值
     * @param key 对应的key
     * @param value 指定的值
     */
    public setValue(key: AUTH_KEY, value: any): any {
        const oldValue = this.getVaule(key);
        GlobalVar.instance.map.set(key, value);
        return oldValue;
    }
}
