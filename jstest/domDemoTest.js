/**
 * FileName:
 *
 * Author: yywang5
 * Email: yywang5@iflytek.com
 * Date: 2013-11-28 13:49
 * Version: V1.0.0.0
 * Describe: {请描述功能}
 */

var form = null;
module('form test', {
    setup: function () {
        form = new simpleDemo.form();
        ok(form !== null, '创建form对象成功');
    }
});

test('text is number',function(){

    ok(form.checkNumber(1),'输入框是否是数字测试');

});