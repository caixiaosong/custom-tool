import { XArrayUtils } from '../utils/XArrayUtils';


export class ArrayTest {

    public run(): void {
        this.createArr();
    }

    private createArr(): void {
        const arr = XArrayUtils.createNumArr(10, 0, 1);

        const arrCopy = arr.reduce(function (sum, value) {
            return sum + value;
        }, 100)
    }
}