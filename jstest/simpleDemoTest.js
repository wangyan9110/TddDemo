/**
 * FileName:
 *
 * Author: yywang5
 * Email: yywang5@iflytek.com
 * Date: 2013-11-27 13:36
 * Version: V1.0.0.0
 * Describe: {请描述功能}
 */
var cal = null;
module('simpletest', {
    setup: function () {
        cal = new simpleDemo.calculate();
        ok(cal !== null, '开始测试，创建对象成功。');
    },
    teardown: function () {
        ok(true, '每个方法执行完成调用');
    }
});

test('测试加法', function () {

    equal(cal.add(1, 2), 3, '加法计算正确');
    notEqual(cal.add(1, -2), 4, '加法计算错误');
});

test('测试减法', function () {
    equal(cal.mul(1, 2), -1, '减法计算正确');
    notEqual(cal.mul(1, -2), 4, '减法计算错误');
});





