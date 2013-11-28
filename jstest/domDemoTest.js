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

test('text is number', function () {

    ok(form.checkNumber(1), '判断数字方法');
    ok(!form.checkNumber('a'), '判断数字失败方法');
    ok(form.checkNumber(200), '判断多位数字');
    ok(form.checkNumber(1.2), '增加小数者');
    ok(!form.checkNumber('1.2.1'), '增加小数者');
});

test('dom数据同步', function () {
    form.synch();
    equal($('#number').val(), $('#textNumber').text(), '判断同步方法');
});

test('事件触发测试', function () {
    $('#number').val('23');
    $('#number').trigger('blur');
    equal($('#number').val(), $('#textNumber').text(), '判断同步方法');
    $('#number').val('ab');
    $('#number').trigger('blur');
    equal('文本框必须为数字。', $('#textNumber').text(), '异常同步方法');
    $('#number').val('');
    $('#number').trigger('blur');
    equal('', $('#textNumber').text(), '异常同步方法');
});