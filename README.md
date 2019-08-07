### 表单设计器组件数据结构



1.输入框
```
{
	"type": "input",//组件类型
	"id": "comp1565142559077",//组件id
	"layout": {
		"x": 0,
		"y": 0,
		"w": 12,
		"h": 2,
		"minH": 2,
		"moved": false,
		"static": false,
		"i": "comp1565142559077"
	},
	"actualValue": "",//实际填报的值
	"common": {
		"label": "输入框",//组件label
		"mark": "",//组件备注（预留）
		"ReadOnly": false,//是否只读
		"MustFill": false,//是否必填
		"TextMode": "SingleLine",//文本框模式
		"Rows": 3,//行数
		"regex": "",//校验的正则（字符串）
		"zdyRegex": "",//自定义正则表达式（若有，字符串）
		"onlyId": "comp1565142559077",//唯一标识，可修改
		"name": ""//组件名称
	},
	"data": {
		"DataMember": "",//数据集
		"DataValueField": "",//数据集的字段
		"BindDataField": "",//实际区分的值字段
		"AssociatedControlsID": "",//关联控件id
		"BindDataSetConditions": "",//数据集条件
		"FillingMode": "Manual"//填充模式
	},
	"style": {
		"backgroundColor": "#fff",//背景颜色
		"fontFamily": "宋体",//字体
		"textDecoration": "none",//字体装饰
		"fontSize": 12,//大小
		"color": "#555",//字体颜色
		"FontBold": false,//是否粗体
		"FontItalic": false//是否斜体
	}
}
```
2.表格
```
{
	"type": "table",
	"id": "comp1565142932953",
	"layout": {
		"x": 0,
		"y": 2,
		"w": 24,
		"h": 8,
		"minH": 2,
		"moved": false,
		"static": false
	},
	"actualValue": "",
	"common": {
		"Caption": "表格标题",
		"mark": "",
		"onlyId": "comp1565142932953",
		"name": "",
		"SerialNumber": false //是否显示序号
	},
	"data": {
		"DataMember": "",
		"FillingMode": "AutomaticFilling",
		"AssociatedControlsID": "",
		"BindDataSetConditions": ""
	},
	"style": null,
        //表格的列字段
	"children": [{
		"type": "tableChild",
		"id": "tableChild1565142938164",
		"common": {
			"title": "姓名",
			"mark": "",
			"onlyId": "tableChild1565142938165"
		},
		"data": {
			"DataValueField": "",
			"FillingMode": "AutomaticFilling",
			"AssociatedControlsID": "",
			"BindDataSetConditions": "",
			"BindDataField": ""
		},
		"style": {
			"backgroundColor": "#fff",
			"fontFamily": "宋体",
			"textDecoration": "none",
			"fontSize": 12,
			"color": "#555",
			"FontBold": false,
			"FontItalic": false
		}
	}, {
		"type": "tableChild",
		"id": "tableChild1565142948205",
		"common": {
			"title": "年龄",
			"mark": "",
			"onlyId": "tableChild1565142948205"
		},
		"data": {
			"DataValueField": "",
			"FillingMode": "AutomaticFilling",
			"AssociatedControlsID": "",
			"BindDataSetConditions": "",
			"BindDataField": ""
		},
		"style": {
			"backgroundColor": "#fff",
			"fontFamily": "宋体",
			"textDecoration": "none",
			"fontSize": 12,
			"color": "#555",
			"FontBold": false,
			"FontItalic": false
		}
	}]
}
```
3.文本
```
{    
	"type": "text",
	"id": "comp1565142154301",    
	"layout": {
		"x": 0,
		"y": 0,
		"w": 12,
		"h": 2,
		"minH": 2,
		"moved": false,
		"static": false,
		"i": "comp1565142154301"
	},    
	"common": {
		"desc": "我是一段描述性的段落文字，你可以随意修改",
		"mark": ""
	},    
	"style": {
		"backgroundColor": "#fff",
		"fontFamily": "宋体",
		"textDecoration": "none",
		"fontSize": 12,
		"color": "#333",
		"FontBold": false,
		"FontItalic": false
	}
}
```
4.下拉框
```
{
	"type": "dropDown",
	"id": "comp1565142741844",
	"layout": {
		"x": 0,
		"y": 0,
		"w": 12,
		"h": 2,
		"minH": 2,
		"moved": false,
		"static": false,
		"i": "comp1565142741844"
	},
	"actualValue": "",
	"common": {
		"label": "下拉框",
		"mark": "",
		"options": "",
		"onlyId": "comp1565142741844",
		"name": ""
	},
	"data": null,
	"style": {
		"backgroundColor": "#fff",
		"fontFamily": "宋体",
		"textDecoration": "none",
		"fontSize": 12,
		"color": "#555",
		"FontBold": false,
		"FontItalic": false
	}
}
```
5.单选框
```
{
	"type": "radio",
	"id": "comp1565142810670",
	"layout": {
		"x": 0,
		"y": 0,
		"w": 12,
		"h": 2,
		"minH": 2,
		"moved": false,
		"static": false,
		"i": "comp1565142810670"
	},
	"actualValue": "",
	"common": {
		"label": "单选框",
		"mark": "",
		"options": "",
		"onlyId": "comp1565142810670",
		"name": ""
	},
	"data": null,
	"style": {
		"backgroundColor": "#fff",
		"fontFamily": "宋体",
		"textDecoration": "none",
		"fontSize": 12,
		"color": "#555",
		"FontBold": false,
		"FontItalic": false
	}
}
```
6.复选框
```
{
	"type": "checkbox",
	"id": "comp1565142850472",
	"layout": {
		"x": 0,
		"y": 0,
		"w": 12,
		"h": 2,
		"minH": 2,
		"moved": false,
		"static": false,
		"i": "comp1565142850472"
	},
	"actualValue": "",
	"common": {
		"label": "复选框",
		"mark": "",
		"options": "",
		"onlyId": "comp1565142850472",
		"name": ""
	},
	"data": null,
	"style": {
		"backgroundColor": "#fff",
		"fontFamily": "宋体",
		"textDecoration": "none",
		"fontSize": 12,
		"color": "#555",
		"FontBold": false,
		"FontItalic": false
	}
}
```
7.日期
```
{
	"type": "date",
	"id": "comp1565142891285",
	"layout": {
		"x": 0,
		"y": 0,
		"w": 12,
		"h": 2,
		"minH": 2,
		"moved": false,
		"static": false,
		"i": "comp1565142891285"
	},
	"actualValue": "",
	"common": {
		"label": "日期",
		"mark": "",
		"ReadOnly": false,
		"MustFill": false,
		"onlyId": "comp1565142891285",
		"name": ""
	},
	"data": {
		"DataMember": "",
		"DataValueField": "",
		"AssociatedControlsID": "",
		"BindDataSetConditions": "",
		"FillingMode": "Manual"
	},
	"style": {
		"backgroundColor": "#fff",
		"fontFamily": "宋体",
		"textDecoration": "none",
		"fontSize": 12,
		"color": "#555",
		"FontBold": false,
		"FontItalic": false
	}
}
```

