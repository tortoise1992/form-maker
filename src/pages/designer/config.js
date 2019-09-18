// 定义各个组件的基本数据结构，后续需要通过这个遍历得到属性
export default [
    {
        // 组件id
        "id":new Date().getTime()+Math.random(),
        // 组件类型
        "type":"TEXT",
        // 组件实际填报的值，预置
        "actualValue":"",
        // 组件的常规属性
        "common":{},
        // 组件的样式属性
        "style":{},
        // 组件的数据属性
        "data":null
    },
    {
        "id":new Date().getTime()+Math.random(),
        "type":"INPUT",
        "actualValue":"",
        "common":{},
        "style":{},
        "data":{}
    },
    {
        "id":new Date().getTime()+Math.random(),
        "type":"TEXTAREA",
        "actualValue":"",
        "common":{},
        "style":{},
        "data":{}
    },
    {
        "id":new Date().getTime()+Math.random(),
        "type":"SELECT",
        "actualValue":"",
        "common":{},
        "style":{},
        "data":{}
    },
    {
        "id":new Date().getTime()+Math.random(),
        "type":"CHECKBOX",
        "actualValue":"",
        "common":{},
        "style":{},
        "data":{}
    },
    {
        "id":new Date().getTime()+Math.random(),
        "type":"RADIO",
        "actualValue":"",
        "common":{},
        "style":{},
        "data":{}
    },
    {
        "id":new Date().getTime()+Math.random(),
        "type":"DATE",
        "actualValue":"",
        "common":{},
        "style":{},
        "data":{}
    },
    {
        "id":new Date().getTime()+Math.random(),
        "type":"TABLE",
        "actualValue":[],
        "common":{},
        "style":{},
        "data":{},
        "children":[{
            "id":new Date().getTime()+Math.random(),
            "type":"TABLECHILD",
            "actualValue":"",
            "common":{},
            "style":{},
            "data":{}
        }]
    }
]