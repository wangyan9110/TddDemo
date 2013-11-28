/**
 * FileName:
 *
 * Author: yywang5
 * Email: yywang5@iflytek.com
 * Date: 2013-11-28 20:15
 * Version: V1.0.0.0
 * Describe: {请描述功能}
 */

(function (simpleDemo) {

    var ajaxDemo = (function () {

        function ajaxDemo() {

        }

        ajaxDemo.prototype = {
            constructor: ajaxDemo,
            get: function (callback) {
                $.mockjax({
                    url: '/user/test',
                    status: 200,
                    responseTime: 300,
                    responseText: 'hello word'
                });
            }
        };


        return ajaxDemo;
    })();


    simpleDemo.ajaxDemo = ajaxDemo;
})(window.simpleDemo);