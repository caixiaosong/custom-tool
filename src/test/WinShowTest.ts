import { DecoratorTest0 } from './DecoratorTest0';
import { GlobalVar } from '../global/GlobalVar';
import GeneratorTest from './GeneratorTest';
import { NormalTest } from './NormalTest';
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

    // 为了断点测试而存在
    private runTest(): void {
        // new DecoratorTest0().run();
        // new GeneratorTest().run();
        new NormalTest().run();
    }
}
