/**
 * FileName:
 *
 * Author: yywang5
 * Email: yywang5@iflytek.com
 * Date: 2013-11-28 20:02
 * Version: V1.0.0.0
 * Describe: {请描述功能}
 */

var ajaxDemo = null;

module('ajax setup', {
    setup: function () {
        ajaxDemo = new simpleDemo.ajaxDemo();
        ok(ajaxDemo !== null, '创建对象成功。');
    }
});

asyncTest('ajax test', function () {
    expect(2);
    ajaxDemo.get(function (value) {
        equal('hello word', value, 'ok');
        start();
    });
});