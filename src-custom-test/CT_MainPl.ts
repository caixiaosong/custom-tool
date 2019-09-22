import { CT_Decorator } from './CT_Decorator';
class CT_MainPl {
    public run() {
        // this.testNumber();
        // this.testNullOrUndefined();
        // this.testNickFuncName();
        // this.testFuncParm();
        // this.testArrLike();
        // this.testProxy();
        // this.testYeildStar();
        // this.testYieldFunc();
        // this.testThis();
        new CT_Decorator().run();
    }

    private testThis(): void {
        console.log(this);
        // let testFunc = function () {
        //     var obj: Object = this;
        // }
        let arrFunc = () => {
            console.log(this);
        }

        // testFunc();
        arrFunc();

    }

    private testYieldFunc(): void {
        let num: number = 0;
        let generator = function* () {
            yield function () {
                ++num;
                return num;
            }();//定义后直接调用
            yield function () {
                ++num;
                return num;
            }();//定义后直接调用
            return ++num;
        }

        var gen = generator();
        console.log(gen.next());
        console.log(gen.next());
        console.log(gen.next());
    }

    /**
     * for ...of 会自动调用生成器。
     * for...in 不会自动调用生成器。
     * 
     * yield*是生成器中调用另外一个生成器。每次nextd的时候自动调用另外一个生成器的next
     * yield*后面跟的是一个可遍历的结构，它会调用该结构的遍历器接口。
     * 
     * yield 以下三个都会调用yield
     * next(value:obj)
     * throw(value:obj)，内部try catch 后可以继续，没有try则会进入{value:undefined,done:true}
     * return(value:obj),如果有try final 则会直接进入final状态，如果final还有yield则会在next掉所有yield的时候在调用传入的value
     */
    private testYeildStar(): void {
        let generator = function* () {
            yield { msg: 'msg' }
            yield 1;
            yield* [2, 3, 4];
            yield 5;
        };

        var iterator = generator();

        console.log(iterator.next());// { value: { msg: 'msg' }, done: false }
        console.log(iterator.next());// { value: 1, done: false }
        console.log(iterator.next());// { value: 2, done: false }
        console.log(iterator.next());// { value: 3, done: false }
        console.log(iterator.next());// { value: 4, done: false }
        console.log(iterator.next());// { value: 5, done: false }
        console.log(iterator.next());// { value:  undefined, done: true }
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