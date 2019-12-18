import { XArrayUtils } from '../utils/XArrayUtils';
import { XBitUtils } from '../utils/XBitUtils';


export class NormalTest {

    public run(): void {
        // this.testcreateArr();
        this.testBitUtil();
    }

    private testcreateArr(): void {
        const arr = XArrayUtils.createNumArr(10, 0, 1);

        const arrCopy = arr.reduce(function (sum, value) {
            return sum + value;
        }, 100)
    }

    private testBitUtil(): void {
        const arr = XBitUtils.bitToArr(Math.pow(2, 5) - 1);
        console.log(arr);

    }
}