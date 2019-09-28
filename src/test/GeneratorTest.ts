export default class GeneratorTest {

    public run() {

        function* generator() {
            yield 1;
        }
        const g = generator();
        const str0 = typeof generator; // function
        const str1 = typeof g; // object
    }
}
