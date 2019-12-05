export default class XMathUtils {

    /**
     * 随机数值[start ,start + maxIncrValue)
     * @param start 开始数值
     * @param maxIncrValue 最大增量
     * @param isInt 是否是整数，如果是整数，会向下取整
     */
    public static randNum(start: number, maxIncrValue: number, isInt: boolean = true): number {
        let num: number = start + Math.random() * maxIncrValue;
        if (isInt) {
            num = Math.floor(num);
        }
        return num;
    }
}
