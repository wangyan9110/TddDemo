/**
 * FileName:
 *
 * Author:wangyan
 * Date:2013-11-30 20:21
 * Version:V1.0.0.0
 * Email:yywang1991@gmail.com
 * Describe: 请描述本文件功能
 *
 * Change Record:
 * {        date    name    describe}
 *
 */

(function (app) {
    var wordCtr = (function () {
        function wordCtr() {
            this._romote = new app.wordRd();
            this._content=$('#content');
        }

        wordCtr.prototype = {
            constructor: wordCtr,
            display: function (data) {
                var wordObjs = this._daoToObj(data), html='', viewModel=null;
                viewModel = {
                    words: wordObjs
                };
                html = template.render('wordListtmpl', viewModel);
                this._content.html(html);
            },
            reset: function (wordObjs) {
                var viewModel=null,html='';
                viewModel={
                    words:wordObjs
                };
                html = template.render('wordListtmpl', viewModel);
                this._content.html(html);
            },
            _daoToObj: function (data) {
                var wordsObj = $.parseJSON(data),
                    wordModels = [],
                    index = 0, count = wordsObj.length;
                //转为viewmodel
                for (; index < count; index++) {
                    wordModels.push({
                        word: wordsObj[index].word
                    });
                }
                return wordModels;
            }
        };

        return wordCtr;
    })();

    app.wordCtr = wordCtr;
})(window.app);