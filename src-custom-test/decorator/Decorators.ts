export function DName(name: string) {
    return function (target: any) {
        target.DName = name;
    }
}
