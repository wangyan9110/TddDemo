/**
 * FileName:
 *
 * Author:wangyan
 * Date:2013-11-30 19:38
 * Version:V1.0.0.0
 * Email:yywang1991@gmail.com
 * Describe: 请描述本文件功能
 *
 * Change Record:
 * {        date    name    describe}
 *
 */

var wordRd = null;
module('romote test', {
    setup: function () {
        wordRd = new app.wordRd();
        ok(wordRd != null, 'romte obj create');
    }
});

asyncTest('test get data', function () {
    stop();
    wordRd.getRes(function (data) {
        var words = '[{"word":"uk","mp3":"uk.mp3"},{"word":"china","mp3":"china.mp3"}]';
        equal(words, data, '获取资源成功');
        start();
    });
});

var wordCtr = null;
module('word ctr', {
    setup: function () {
        wordCtr = new app.wordCtr();
        ok(wordCtr != null, 'wordCtr create');
    }
});

test('view the test', function () {
    var data = '[{"word":"uk","mp3":"uk.mp3"},{"word":"china","mp3":"china.mp3"}]';
    wordCtr.display(data);
    notEqual($('#content').html(), '', 'display the word list');
});

test('test reset', function () {
    var objs = [
        {word: 'uk', score: 100},
        {word: 'china', score: 90}
    ];
    wordCtr.reset(objs);
    ok($('#content').find('.score').length>0,'test reset the word');
    equal($('#content').find('.score')[0].innerText,'100','test reset the word value');
});