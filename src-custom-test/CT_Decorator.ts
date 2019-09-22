import { DName } from "./decorator/Decorators";

@DName('CT_Decorator_Name')
export class CT_Decorator {
    [x: string]: any;


    public run() {
        console.log(this.DName);
    }
}

