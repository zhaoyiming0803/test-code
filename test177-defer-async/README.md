在服务端，1.js 都是延迟 1s 返回。

在 async.html 中，标记 async 的脚本，不会考虑执行顺序的问题，加载并解析完成后就立即执行。

在 defer.html 中，标记 defer 的脚本，【肯定】会 【先于】 DOMContentLoaded 事件执行。
