### Module Federation

Module federation 与 qiankun 以及 single-spa 的区别

共同点：
- 都能实现微前端。

不同点：
- qiankun 与 single-spa 是基于应用的，而 mf 是基于组件的。
- mf 对于无限套娃模式支持比较友好，
- mf 对于老项目不太友好，需要升级对应的 webpack，不能直接使用.html文件。
- 与 single-spa 一样，不支持沙盒环境，需要自己进行实现。
- 第一次需要将引用的依赖前置，会导致加载时间变长的问题。