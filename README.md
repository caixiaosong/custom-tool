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

### updateAllPackage 慎用更新所有包。或许你应该只更新某个包yarn upgarde [指定包]
```
"updateAllPackage": "yarn upgrade-interactive && syncyarnlock" 
更新：package.json 的所有包，更新后的所有包依赖 package.json.yarn（新包）。如果确认无误，即可使用package.json.yarn替换旧的package.json（旧包）
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### 自定义的TypeScript测试（与vue，iview无关的）添加
1 在src-custom-test中添加
2 通过debug的:自定义TS测试。开启测试


