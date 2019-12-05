import XMathUtils from './XMathUtils';
import { XBitUtils } from './XBitUtils';
export class XArrayUtils {

    /**
     * 创建指定数量的数组
     * @param num 创建的数量
     * @param start 开始的数值
     * @param incr 数值增量
     * @example createNumArr(10, 0) =>[0,9)
     * @example createNumArr(10, 0,0) => 10个0
     */
    public static createNumArr(num: number, start: number = 0, incr: number = 1): number[] {
        const nums: number[] = [];
        for (let i = 0; i < num; ++i) {
            nums.push(start + i * incr);
        }
        return nums;
    }

    /**
     * 对传入的数组进行洗牌
     * @param arr 源数组
     * @param shuffTime 洗牌的次数
     */
    public static shuffArr(arr: any[], shuffTime: number = 20): void {
        for (let i: number = 0; i < shuffTime; ++i) {
            const spliteValue = arr.splice(XMathUtils.randNum(0, arr.length - 1))[0]
            arr.push(spliteValue);
        }
    }

    /**
     *  将传入的数组转成位表示，长度最多32，超过尾数不会返回
     * @param arr 传入数组
     */
    public static arrToBit(arr: number[]): number {
        let bitState: number = 0;
        if (arr == null) {
            return bitState;
        }
        const maxLength: number = Math.min(arr.length, XBitUtils.MAX_BIT_FOR_NUM);
        for (let i = 0; i < maxLength; ++i) {
            if (arr[i] > 0) {
                bitState = XBitUtils.setBit(bitState, i);
            }
        }
        return bitState;
    }
}
