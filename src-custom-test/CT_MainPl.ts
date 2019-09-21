class CT_MainPl {
    public run() {
        // this.testNumber();
        // this.testNullOrUndefined();
        // this.testNickFuncName();
        // this.testFuncParm();
        // this.testArrLike();
        this.testProxy();

    }


    private testProxy() {
        //被代理类
        class Count {
            public count: number = 0;
        }

        //代理处理器，只代理了get,set
        let proxyHandler: ProxyHandler<Count> = {
            get: function (target, key, receiver) {
                console.log('testPorxy get');
                return Reflect.get(target, key, receiver);
            },
            set: function (target, key, value, receiver) {
                console.log('testPorxy set');
                return Reflect.set(target, key, value, receiver);
            }
        };

        //代理实例
        var countProxy: Count = new Proxy(new Count(), proxyHandler);

        console.log(++countProxy.count);
        console.log(countProxy.count);
        console.log(`count in countProxy: ${'count' in countProxy}`);

    }

    private testArrLike() {
        let arrayLike = {
            '0': 'a',
            '1': 'b',
            '2': 'c',
            length: 3 // 必须要有length属性
        };


        // ES6的写法
        let arr2 = Array.from(arrayLike); // ['a', 'b', 'c']

        console.log("arr2 length:" + arr2);
    }

    private testFuncParm(): void {
        let fun = this.testFunc;
        fun.call([2, 3, 4]);//严格模式下传递不过去
    }
    private testFunc() {
        console.log(arguments);
    }

    private testNickFuncName(): void {
        let newFunc = function () {

        }
        console.log("newFunc:" + newFunc.name);

        let tmpFunc = newFunc;//重新赋值不会改变名字，

        console.log("newFunc:" + newFunc.name);
        console.log("tmpFunc:" + tmpFunc.name);
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