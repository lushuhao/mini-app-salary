# mini-app-salary
五险一金及税后工资计算器

![gh_729a44593426_258](https://user-images.githubusercontent.com/23313879/44907966-719c7980-ad4c-11e8-80c7-162a45607eb6.jpg)

## 开始上手

### 安装

```shell
npm i
```

### 编译
```shell
npm run watch // 监听文件改动
npm run dev   // 打包，监听文件改动
npm run build // 压缩文件，打包，提交审核前执行
npm run clean // 清空dist目录
npm run lint  // eslint修复
```

### 新建页面
```shell
*.js *.json *.scss *.wxml // 会将scss转成wxss，px自动转rpx
```

### mock数据
* 社保缴费比例一般在每年7月更新
```shell
npm run server // node server/index.js
```
```js
// server/index.js
// 将注释的代码放开，运行npm run server


// genCityListJson()
//   .then(() => {
//     genAllCityBaseJson()
//   })

// genAllCityBaseJson()

// genAllCityScaleJson()
```
