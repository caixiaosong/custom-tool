# custom-tool

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

###  build electron app
```
yarn electron:build
```

### install electron-build dependency
```
yarn postinstall
```

### uninstall electron-build dependency
```
yarn postuninstall
```




### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### WinShowTest.ts是为了断点测试而存在
注意每次修改后测试前要先关闭任务：electron-debug。因为要重新开始任务才会加载修改内容

如果是页面的的内容因为是采用webPack的hotUpdate,自动更新的。所以不需要重新开始任务electron-debug。直接在reload就可以看到内容