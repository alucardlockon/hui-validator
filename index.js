export default function (valueObj, rules, onValidateFail) {
  for (let i = 0; i < rules.length; i++) {
    const rule = rules[i]
    const value = valueObj[rule.prop] != null ? valueObj[rule.prop] + '' : ''
    let reg
    let msg = ''
    switch (rule.type) {
      // 非空
      case 'notnull':
        reg = /^.+$/
        msg = '不能为空'
        break
      // 正则
      case 'regexp':
        reg = rule.regexp
        msg = '不符合要求'
        break
      // 数字
      case 'number':
        reg = /^\d+$/
        msg = '需要为数字'
        break
      // 小数
      case 'float':
        reg = /^\d+[.]\d+$/
        msg = '需要为小数'
        break
      // 数字
      case 'nmmberOrFloat':
        reg = /^\d+([.]\d+)?$/
        msg = '需要为整数或小数'
        break
      // 身份证
      case 'idCard':
        reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
        msg = '需要符合身份证格式'
        break
      // 手机号
      case 'phone':
        reg = /^1[34578]\d{9}$/
        msg = '需要为手机号'
        break
      // 日期 yyyy-MM-dd
      case 'date':
        reg = /^\d{4}-\d{2}-\d{2}$/
        msg = '需要为日期(yyyy-MM-dd)'
        break
      // 日期时间 yyyy-MM-dd hh:mm:ss
      case 'datetime':
        reg = /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/
        msg = '需要为日期(yyyy-MM-dd hh:mm:ss)'
        break
    }

    // 可为空
    if (rule.nullable && value === '') {
      return true
    }

    // 长度检查
    if (rule.max && rule.max < value.length) {
      onValidateFail(rule.name + '的最大长度为' + rule.max, rule, value)
      return false
    }
    if (rule.min && rule.min > value.length) {
      onValidateFail(rule.name + '的最大长度为' + rule.max, rule, value)
      return false
    }

    // 验证
    if (!reg.test(value)) {
      onValidateFail(rule.message ? rule.message : (rule.name + msg), rule, value)
      return false
    }

  }
  return true;
}
