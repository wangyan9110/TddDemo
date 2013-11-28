/**
 * FileName:
 *
 * Author: yywang5
 * Email: yywang5@iflytek.com
 * Date: 2013-11-27 13:33
 * Version: V1.0.0.0
 * Describe: {请描述功能}
 */

(function (simpleDemo) {
    var calculate = (function () {

        function calculate() {

        }

        calculate.prototype = {
            constructor: calculate,
            add: function (a, b) {
                return a + b;
            },
            mul: function (a, b) {
                return a - b;
            }
        };

        return calculate;
    })();

    simpleDemo.calculate = calculate;
})(window.simpleDemo);

