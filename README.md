### 表单设计器组件数据结构

1.文本
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
2.输入框
```
{
	"type": "input",
	"id": "comp1565142559077",
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
	"actualValue": "",
	"common": {
		"label": "输入框",
		"mark": "",
		"ReadOnly": false,
		"MustFill": false,
		"TextMode": "SingleLine",
		"Rows": 3,
		"regex": "",
		"zdyRegex": "",
		"onlyId": "comp1565142559077",
		"name": ""
	},
	"data": {
		"DataMember": "",
		"DataValueField": "",
		"BindDataField": "",
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
3.下拉框
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
4.单选框
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
5.复选框
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
6.日期
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

7.表格
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
		"SerialNumber": false
	},
	"data": {
		"DataMember": "",
		"FillingMode": "AutomaticFilling",
		"AssociatedControlsID": "",
		"BindDataSetConditions": ""
	},
	"style": null,
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