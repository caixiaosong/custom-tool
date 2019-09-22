import { dialog, Dialog } from 'electron';
import ComHelper from './ComHelper';
/**
 * 这个只是为了不想每次都导入dialog
 */
export class DialogHelper {

    /**
     * 直接获取Electron 的 dialog
     */
    public static instance(): Dialog {
        return dialog;
    }

    /**
     * 确认面板
     * @param message 消息
     * @param yesCallback 确认回调
     * @param noCallback 取消回调
     * @param defaultYes 默认选中确认
     */
    public static showConfirm(
        message: string, yesCallback?: () => void, noCallback?: () => void,
        defaultYes: boolean = true
    ): void {
        // defaultId的Electon有bug，使用yes no 的时候defaultId无效，所以用中文
        const defaultId: number = defaultYes ? 0 : 1;
        const seletId: number =
            dialog.showMessageBoxSync({
                message,
                buttons: ['确认', '取消'],
                defaultId
            });
        switch (seletId) {
            case 0:
                ComHelper.applyFunc(yesCallback);
                break;
            case 1:
                ComHelper.applyFunc(noCallback);
                break;
        }
    }

}
