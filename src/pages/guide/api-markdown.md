
# 1. 登录

## 1.1 登录

### 1.1.1 功能描述

提供登录的方式。

### 1.1.2 请求说明

> 请求方式：POST

请求URL ：[/login](https://mkd.idns.link/login)

### 1.1.3 请求参数

| 字段            | 字段类型 | 字段说明 |
| --------------- | -------- | -------- |
| public_key      | int      | 手机号   |
| application_key | string   | 密码     |
| signature       | string   | 密码     |
| nonce           | string   | 密码     |

### 1.1.4 返回结果
```json  

```

### 1.1.5 返回参数

| 字段  | 字段类型 | 字段说明 |
| ----- | -------- | -------- |
| token | string   | token值  |

### 1.1.6 错误状态码
| 状态码 | 说明               |
| ------ | ------------------ |
| 3001   | 其他认证错误信息！ |
| 3002   | 用户不存在！       |
| 3003   | 用户名或密码有误！ |

# 2. 应用用户值存储

## 2.1 取值

### 2.1.1 功能描述

提供给应用获取用户值的方法。

### 2.1.2 请求说明

> 请求方式：GET

请求URL ：[/kv/get](https://mkd.idns.link/kv/get)

### 2.1.3 请求参数

| 字段  | 字段类型 | 字段说明                                   |
| ----- | -------- | ------------------------------------------ |
| token | string   | 在请求的Header中的Token，Authorization字段 |

### 2.1.4 返回结果
值的内容，例如
```
QmYmoWH9rLQAZHEKGdA7PjC4PCBKTUn8XMHVfAUxPVD39e
```

### 2.1.5 返回参数

| 字段  | 字段类型 | 字段说明   |
| ----- | -------- | ---------- |
| value | string   | 值（0-64） |

### 2.1.6 错误状态码
| 状态码 | 说明               |
| ------ | ------------------ |
| 3001   | 其他认证错误信息！ |
| 3002   | 用户不存在！       |
| 3003   | 用户名或密码有误！ |


## 2.2 简单存储值

### 2.2.1 功能描述

提供应用保存用户的值。

### 2.2.2 请求说明

> 请求方式：GET

请求URL ：[/kv/set/{value}](https://mkd.idns.link/kv/set/QmYmoWH9rLQAZHEKGdA7PjC4PCBKTUn8XMHVfAUxPVD39e)

例如：https://mkd.idns.link/kv/set/QmYmoWH9rLQAZHEKGdA7PjC4PCBKTUn8XMHVfAUxPVD39e
### 2.2.3 请求参数

| 字段    | 字段类型 | 字段说明                                       |
| ------- | -------- | ---------------------------------------------- |
| token   | string   | 在请求的Header中的Token，Authorization字段     |
| version | number   | 在请求的Header中的Version，idns-kv-version字段 |

### 2.2.4 返回结果
```

```

### 2.2.5 返回参数

| 字段  | 字段类型 | 字段说明 |
| ----- | -------- | -------- |
| token | string   | token值  |

### 2.2.6 错误状态码
| 状态码 | 说明               |
| ------ | ------------------ |
| 3001   | 其他认证错误信息！ |
| 3002   | 用户不存在！       |
| 3003   | 用户名或密码有误！ |


## 2.3 高级存储值

### 2.3.1 功能描述

提供应用保存用户的值，提供更多的选项。

### 2.3.2 请求说明

> 请求方式：POST

请求URL ：[/kv/set](https://mkd.idns.link/kv/set)

例如：https://mkd.idns.link/kv/set
### 2.3.3 请求参数

| 字段    | 字段类型 | 字段说明                                       |
| ------- | -------- | ---------------------------------------------- |
| token   | string   | 在请求的Header中的Token，Authorization字段     |
| version | number   | 在请求的Header中的Version，idns-kv-version字段 |
| data    | string   | 在请求的json中data                             |
| public  | string   | public protect private                         |

### 2.3.4 返回结果
```

```

### 2.3.5 返回参数

| 字段  | 字段类型 | 字段说明 |
| ----- | -------- | -------- |
| token | string   | token值  |

### 2.3.6 错误状态码
| 状态码 | 说明               |
| ------ | ------------------ |
| 3001   | 其他认证错误信息！ |
| 3002   | 用户不存在！       |
| 3003   | 用户名或密码有误！ |


# 5.其他

## 5.1 获取随机数

### 5.1.1 功能描述

提供登录的方式。

### 5.1.2 请求说明

> 请求方式：POST

请求URL ：[/login](https://mkd.idns.link/login)

### 5.1.3 请求参数

| 字段            | 字段类型 | 字段说明 |
| --------------- | -------- | -------- |
| public_key      | int      | 手机号   |
| application_key | string   | 密码     |
| signature       | string   | 密码     |
| nonce           | string   | 密码     |

### 5.1.4 返回结果
```json  

```

### 5.1.5 返回参数

| 字段  | 字段类型 | 字段说明 |
| ----- | -------- | -------- |
| token | string   | token值  |

### 5.1.6 错误状态码
| 状态码 | 说明               |
| ------ | ------------------ |
| 3001   | 其他认证错误信息！ |
| 3002   | 用户不存在！       |
| 3003   | 用户名或密码有误！ |
