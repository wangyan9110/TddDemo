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
        var _self;

        function form() {
            this._number = $('#number');
            this._textDemo = $('#textNumber');
            _self = this;

            this._bindEvents();
        }

        form.prototype = {
            constructor: form,
            checkNumber: function (num) {
                var reg = /^?\d+\.\d+$/;
                return reg.test(num);
            },
            synch: function () {
                this._textDemo.text(this._number.val());
            },
            _bindEvents: function () {
                this._number.blur(function () {
                    if ($(this).val() == '') {
                        _self._textDemo.text('');
                        return;
                    }
                    if (!_self.checkNumber($(this).val())) {
                        _self._textDemo.text('文本框必须为数字。');
                        return;
                    }
                    _self.synch();
                });
            }
        };

        return form;
    })();

    simpleDemo.form = form;
})(window.simpleDemo);
