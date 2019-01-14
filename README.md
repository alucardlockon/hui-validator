# hui-validator
简单的js验证组件

```
npm i hui-validator
```

规则示例
```javascript
import huiValidator from 'hui-validator'

const rules = [
 {prop:'usernmae',name:'用户名', type:'notnull', max: 10, min: 3, message:'用户名不能为空'},
 {prop:'age',name:'number', type:'regexp', regexp: /\d+/, nullable: true }
]

// 参数分别为验证对象,验证规则，失败回调(用来显示消息)
huiValidator(valueObj,rules,console.log)

```

## 非空
`nullable`表示这个属性不能为null

## 内置规则(type)

```
    非空 notnull
    整形数字 number
    小数 float
    数字或小数 nmmberOrFloat
    身份证 idCard
    手机号 phone
    日期 yyyy-MM-dd date
    日期时间 yyyy-MM-dd hh:mm:ss
    扩展: 正则 regexp,需要参数regexp
```


## onValidateFail回调
```
三个参数分别为默认消息，验证规则和验证值
```
