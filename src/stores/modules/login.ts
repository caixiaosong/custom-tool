import GlobalEventEmitter from '../../global/GlobalEventEmitter';
import GlobalEvent from '../../global/GlobalEvent';

/**
 * store模版，为了方便创建而存在，每次拷贝模版
 */
export default {
    namespaced: true,
    // 导入子模块
    modules: {

    },
    // 成员变量设置
    state: {

    },
    // 外部可以获取得到的配置
    getters: {

    },
    // 同步方法配置
    mutations: {

    },
    // 异步方法配置
    actions: {
        handleLogin(userName: string, passward: string) {
            GlobalEventEmitter.getInstance().emit(GlobalEvent.Modal, {
                title: "loginstore sss",
                content: "对话框内容:你好ssss"
            });
            return Promise.resolve()
        }
    }
}
