import { DecoratorTest0 } from './DecoratorTest0';
import { GlobalVar } from '../global/GlobalVar';
export default class WinReadyTest {

    /**
     * run
     */
    public run(): void {

        this.tryRunTest();
    }

    /**
     * 开发环境下才会跑测试
     */
    private tryRunTest(): void {
        if (!GlobalVar.instance.isDev()) {
            return;
        }
        this.runTest();
    }

    private runTest(): void {
        new DecoratorTest0().run();

    }
}
