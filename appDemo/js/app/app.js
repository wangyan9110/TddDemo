/**
 * FileName:
 *
 * Author:wangyan
 * Date:2013-11-30 18:56
 * Version:V1.0.0.0
 * Email:yywang1991@gmail.com
 * Describe: 请描述本文件功能
 *
 * Change Record:
 * {        date    name    describe}
 *
 */

window.app = {};

app.run = function () {
    var remote = new app.wordRd(),
        ctr = new app.wordCtr();
    remote.getRes(function (data) {
        ctr.display(data);
    });
}