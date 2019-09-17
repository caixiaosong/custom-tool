class CT_MainPl {
    public run() {
        this.testNumber();
        this.testNullOrUndefined();
    }


    private testNumber(): void {
        //浮点数相加不能使用===
        console.log(`0.1 + 0.2 === 0.3 :${(0.1 + 0.2 === 0.3)}`);
        // Number.EPSILON,最小精确度
        console.log(`0.1 + 0.2 - 0.3 < Number.EPSILON :${(Math.abs(0.1 + 0.2 - 0.3) < Number.EPSILON)}`);

        console.log("整数相加可以采用===" + (3 - 1 === 2));
    }

    private testNullOrUndefined(): void {
        var i;//undefined
        console.log("i === null : " + (i === null));
        console.log("Number(null) :" + Number(null));
    }
}

new CT_MainPl().run();