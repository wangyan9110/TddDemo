/**
 * FileName:
 *
 * Author:wangyan
 * Date:2013-11-30 19:55
 * Version:V1.0.0.0
 * Email:yywang1991@gmail.com
 * Describe: 请描述本文件功能
 *
 * Change Record:
 * {        date    name    describe}
 *
 */
(function (app) {

    var wordRd = (function () {

        function wordRd() {

        }

        wordRd.prototype = {
            constructor: wordRd,
            getRes: function (callback) {
                var isMock = true;
                if (isMock) {
                    $.mockjax({
                        url: '/word/test',
                        status: 200,
                        responseTime: 900,
                        responseText: '[{"word":"uk","mp3":"uk.mp3"},{"word":"china","mp3":"china.mp3"}]'
                    });
                }

                $.ajax({
                    url: '/word/test',
                    success: function (data) {
                        callback(data);
                    }
                });
            }
        };

        return wordRd;
    })();

    app.wordRd = wordRd;
})(window.app);