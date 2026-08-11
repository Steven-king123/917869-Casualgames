# 917869 Advanced

《917869-进阶版》是一个纯前端数字合成小游戏。

## 使用

可以直接打开 [index.html](index.html)，也可以通过本地静态服务器运行：

```bash
python3 -m http.server 8080
```

然后访问 http://localhost:8080/ 。

仓库同时提供单文件版本 [917869-advanced.html](917869-advanced.html)，无需额外目录和构建工具即可打开。

## 开发校验

需要 Node.js 18 或更高版本：

```bash
npm test
```

校验会检查拆分源码、聚合脚本、单文件版本之间的同步关系，以及公开包中不包含本地调试和实验视觉功能。
