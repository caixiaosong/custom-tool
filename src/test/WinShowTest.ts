import { DecoratorTest0 } from './DecoratorTest0';
import { GlobalVar } from '../global/GlobalVar';
import { DialogHelper } from '../helper/DialogHelper';
import { dialog } from 'electron';
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
        // DialogHelper.instance.
        DialogHelper.showConfirm('yes or not ',
            () => {
                dialog.showMessageBox({ message: 'yes' });
            },
            () => {
                dialog.showMessageBox({ message: 'no' });
            }, false
        );

    }
}
