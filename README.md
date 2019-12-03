# vue_training

## Objective & Key Results
- O1: 理解Modern Web Application的原理
    - KR1.1: 自己完成Vue环境搭建并初始化一个Vue项目
    - KR1.2: 实现父子组件之间的数据通讯
- O2: 掌握大规模Web应用的基本用法
    - KR2.1：用VueRouter实现一个跨页面应用
    - KR2.2：用VueX实现跨页面组件的状态共享

## Take Aways
- SPA vs. 服务器端渲染
- 单个组件：
    - 模版
        - 绑定文本值
        - 绑定属性值
        - 绑定事件
        - 分支判断
        - 循环
        - 关键生命周期钩子mounted & updated
    - 脚本
        - data
            - Vue.set / Vue.delete
        - computed
        - methods
            - 异步方法
    - 样式
        - less / scss / css
- 多组件
    - 模版
        - 下发数据
        - 监听&触发事件
        - ref
    - 脚本
    - 样式
        - scoped
- 多页面
    - 路由
    - 状态存储
        - state
        - mutations
        - actions
- 其他建议了解的技术：
    - es6语法 & babel
    - fetch API
    

## 场景
- 做个TODO列表


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
