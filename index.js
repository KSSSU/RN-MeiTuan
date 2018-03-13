import { AppRegistry } from 'react-native';
import App from './src/App';

/*
    注册入口组件

    AppRegistry：负责注册运行ReactNative应用程序的 JavaScript入口，
    registerComponent注册应用程序的入口组件。告知 ReactNative哪一个组件被注册为应用的根容器。

    第一个参数'test'要与 AppDelegate里注册的 moduleName一致，

    第二个参数是入口组件，即上面定义的Component类，使用了ES6语法，箭头函数：
    {} => App
    返回的必须是定义的组件类的名字，

    定价于
    function() {return App}
*/

AppRegistry.registerComponent('meituan', () => App);
