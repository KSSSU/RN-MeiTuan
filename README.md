# MeiTuan App Write In React-Native(0.54)

## screen shot for Android

<img src="https://github.com/KSSSU/RN-MeiTuan/screenshot/1.png">

<img src="https://github.com/KSSSU/RN-MeiTuan/screenshot/2.png">

<img src="https://github.com/KSSSU/RN-MeiTuan/screenshot/3.png">

# 仿美团 APP - React-Native(0.54)版本

## 简介

这是我第一个用 React-Native 制作的 APP，仿美团客户端。

使用了最新的 React-Native 0.54 版本，遵循 ES6 语法。

主要实现了美团的四个一级页面（团购、附近、订单、我的），以及部分二级页面（团购详情）。

这也是一个练习项目，参考另外一些项目，代码尽量简单直观并写上注释，以好自己更好地去理解和学习。

因为缺少 API，页面很多是使用同一套的接口去实现请求。

App 的页面跳转、TabBar、Navigation，全部通过[react-navigation](https://github.com/react-community/react-navigation)实现。

但也躺过不少的坑，比如用 Static 不会覆盖默认的参数配置，goBack()不会返回首页等等，自己还需要更进一步去研究学习。

学习的途径基本上是看官方文档，跟实例做，研究 Github 上的其它项目，搜索资料，然后就是投入热情、持续地去学习、练习、学习、练习。

## 学习资料

* [React 官方中文](https://doc.react-china.org/)
* [React-native 中文网](https://reactnative.cn/)
* [ES6 入门](http://es6.ruanyifeng.com/)
* [React 入门实例](http://www.ruanyifeng.com/blog/2015/03/react.html)
* [React 小书](http://huziketang.com/books/react/)

## 第三方依赖

* [react-navigation](https://github.com/react-community/react-navigation)
* [react-native-scrollable-tab-view](https://github.com/skv-headless/react-native-scrollable-tab-view)

## 安装

```
$ git clone https://github.com/KSSSU/RN-MeiTuan.git
$ cd RN-MeiTuan
$ npm install
$ react-native run-android
OR
$ react-native run-ios
```

## 最后

因为学习的兴趣，我将持续更新这个 Demo，完善各方面的内容。

如果你有任何的意见或建议，请联系我：

QQ：214472812
