# csdn
## 注册
**简要描述：** 

- 首页接口

**请求URL：** 
- ` http://my.blog.com/index.php?c=user&a=doReg `
  
**请求方式：**
- POST

**参数：** 

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|phone |是  |string |电话号|
|password |是  |string |密码|
|uname |是  |string |用户名|
|format |是  |string |类型 接口调用传json|

 **返回示例**

``` 
  {
    "error_code": 0,
    "message": "success",
    "data": {
    }
  }
```
## 登录
**简要描述：** 

- 首页接口

**请求URL：** 
- ` http://my.blog.com/index.php?c=user&a=doLogin `
  
**请求方式：**
- POST

**参数：** 

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|phone |是  |string |电话号|
|password |是  |string |密码|
|format |是  |string |类型 接口调用传json|

 **返回示例**

``` 
  {
    "error_code": 0,
    "message": "success",
    "data": {
        "user" : 
            {
                "userid"   : "",
                "username" : "",
                "userimg"  : "",
            },
    }
  }
```
## 首页
**简要描述：** 

- 首页接口

**请求URL：** 
- ` http://my.blog.com/index.php?c=blog&a=lists`
  
**请求方式：**
- GET

**参数：** 

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|cate |否  |int |分类id|


 **返回示例**

``` 
  {
    "error_code": 0,
    "message": "success",
    "data": {
        "banner" : [
           {
              "id" : 10,
              "img" : "",
              "title" : "",
              "url" : "",
           },
        ],
        "blog" : [
            {
                "id" : 1,
                "title" : "",
                "category_id" : "",
                "category_name" : "",
                "username" : "",
                "read_num":"",
                "createtime" : "",
            }
        ],
        "cate" : [
         	{
         		id: "1",
				name: "php",
				pid: "0"
         	}
        ],
    }
  }
```
## 详情页
**简要描述：** 

- 首页接口

**请求URL：** 
- ` http://my.blog.com/index.php?c=blog&a=info `
  
**请求方式：**
- GET

**参数：** 

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|id |是  |int |博客id|

 **返回示例**

``` 
  {
    "error_code": 0,
    "message": "success",
    "data": {
        "info" : 
            {
                "id" : 1,
                "title" : "",
                "category_id" : "",
                "category_name" : "",
                "content" : "",
                "userid"   : "",
                "username" : "",
                "userimg"  : "",
                "read_num":"",
                "createtime" : "",
            },
    }
  }
```
## 添加收藏
**简要描述：** 

- 收藏接口

**请求URL：** 
- ` http://my.blog.com/index.php?c=collect&a=doAdd `
  
**请求方式：**
- POST

**参数：** 

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|user_id |是  |string |用户id|
|blog_id |是  |string |博客id|

 **返回示例**

``` 
  {
    "error_code": 0,
    "message": "success",
    "data": {
    }
  }
```
## 我的收藏
**简要描述：** 

- 我的收藏接口

**请求URL：** 
- ` http://my.blog.com/index.php?c=collect&a=myLists `
  
**请求方式：**
- POST

**参数：** 

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|user_id |是  |string |用户id|

 **返回示例**

``` 
  {
    "error_code": 0,
    "message": "success",
    "data": {
    	 "blog" : [
            {
                "id" : 1,
                "title" : "",
                "category_id" : "",
                "category_name" : "",
                "username" : "",
                "read_num":"",
                "createtime" : "",
            }
        ],
    }
  }
```
## 发布博客页面
**简要描述：** 

- 发布博客页面接口

**请求URL：** 
- ` http://blog.com/api/blog/add`
  
**请求方式：**
- GET

**参数：**  

user_id 必须 int 当前登录用户id

**返回示例**

``` 
  {
    "error_code": 0,
    "message": "success",
    "data": {
      classify_lists: [
        {
          classify_id: "", //分类id
          classify_name: ""//分类名
        },
        {
        classify_id: "",
        classify_name: ""
        },
      ]
    }
  }
```

## 发布博客按钮
**简要描述：** 

- 发布博客按钮接口

**请求URL：** 
- `  http://blog.com/api/blog/doAdd`
  
**请求方式：**
- POST

**参数：**  

user_id 必须 int 当前登录用户id
title 必须  string 博客title
content 必须 string 博客内容
classify_id 必须 int 博客分类id

**返回示例**

``` 
  {
    "error_code": 0,
    "message": "success",
    "data": {
    }
  }
```

## 更新按钮
**简要描述：** 

- 更新按钮接口

**请求URL：** 
- ` http://blog.com/api/blog/doEdit`
  
**请求方式：**
-   POST

**参数：** 

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|user_id |是  |int |当前登录用户id|
|blog_id |是  |int |更新博客id|
|title  |是  |string ||
|content |是  |string ||
classify_id|是  |int |分类id|


 **返回示例**

``` 
  {
    "error_code": 0,
    "message": "success",
    "data": {
    }
  }
```
## 个人博客中心
**简要描述：** 

- 个人博客中心接口

**请求URL：** 
- `  http://blog.com/api/blog/myBlog `
  
**请求方式：**
- POST

**参数：** 

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|user_id |是  |int |当前登陆用户id|

 **返回示例**

``` 
  {
    "error_code": 0,
    "message": "success",
    "data": {
      my_blog_lists: [
        {
          id: "35",   //这条博客的id
          title: "1111",//这条博客的title
          classify_id: "5",//这条博客的分类id
          date: "2017-11-05 15:35:52",//这条博客发布时间
          read_num: 101,//这条博客浏览量
          classify_name: "日记"//这条博客分类名
        },
        {
          id: "36",
          title: "11112",
          classify_id: "5",
          date: "2017-11-05 15:35:59",
          read_num: 101,
          classify_name: "日记"
        }
      ]
    }
  }
  
```
## 个人博客中心删除博客
**简要描述：** 

- 个人博客中心删除博客接口

**请求URL：** 
- `  http://blog.com/api/blog/del`
  
**请求方式：**
- POST

**参数：**  

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|user_id |是  |int |当前登陆用户id|
|blog_id |是  |int |删除blog的id|

**返回示例**

``` 
  {
    "error_code": 0,
    "message": "success",
    "data": {
      
    }
  }
```

