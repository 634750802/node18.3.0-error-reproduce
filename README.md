#### 本机复现方法

```bash
nvm use 18.3.0 # 这个是阿里云 FC 的 node18 版本
npm run dev
```

访问页面会有一个 CLICK ME 按钮，点击之后触发异常

##### 正常情况

```bash
nvm use v18.16.0 
nvm use v16.17.0 # 这个是阿里云 FC 的 node16 版本
```

点击按钮后服务端会打印 `hello workd`
