/**
 * FileName:
 *
 * Author: yywang5
 * Email: yywang5@iflytek.com
 * Date: 2013-11-28 14:00
 * Version: V1.0.0.0
 * Describe: {请描述功能}
 */

(function (simpleDemo) {
    var form = (function () {

        function form() {

        }

        form.prototype = {
            constructor: Form,

            checkNumber: function (num) {
                return true;
            }
        };


        return form;
    })();

    simpleDemo.form = form;
})(window.simpleDemo);
