export function SetName(name: string) {
    return function (target: any) {
        target.nameDecorator = name;
    }
}
