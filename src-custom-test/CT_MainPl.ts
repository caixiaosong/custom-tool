
class CT_MainPl {
    public run() {
        console.log(`0.1 + 0.2 === 0.3 :${(0.1 + 0.2 === 0.3)}`);
        console.log(`0.1 + 0.2 - 0.3 <Number.EPSILON :${(Math.abs(0.1 + 0.2 - 0.3) < Number.EPSILON)}`);
        console.log((-0 === 0));

        var i;
        console.log((i === null) + "null :" + Number(null));
    }

}

new CT_MainPl().run();