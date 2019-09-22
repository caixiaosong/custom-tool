import { isNullOrUndefined } from 'util';

export default class ComHelper {

    /**
     * 调用成功返回true,失败返回false
     * @param func 要调用的函数，与上下文无关，空参数 ()=>void
     */
    public static applyFunc(func: any): boolean {
        if (isNullOrUndefined(func)) {
            return false;
        }
        if (func instanceof Function) {
            func();
        }
        return true;
    }
}
