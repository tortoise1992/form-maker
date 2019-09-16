
// ref: https://umijs.org/config/
const path=require('path')
export default {
  treeShaking: true,
  // 启用hash路由
  history: 'hash',
  // 兼容性配置
  targets: {
    ie: 9,
  },  
  "disableCSSModules": true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: false,
      dynamicImport: { webpackChunkName: true },
      title: 'create',
      dll: true,
      // 打开国际化配置项
      locale: {
        enable: true,
      },
      routes: {
        exclude: [        
          /components\//,
        ],
      },
    }],
  ],
  // 配置antd的主题色
  "theme": {
    // "@primary-color": "#fccf00", // 全局主色
    // "@link-color": "#fccf00", // 链接色
    // "@success-color": "#02de7a", // 成功色
    // "@warning-color": "#faad14", // 警告色
    // "@error-color": "#fe0000", // 错误色
    // "@font-size-base": "14px", // 主字号
    // "@heading-color": "#000", // 标题色
    // "@text-color": "#333", // 主文本色
    // "@text-color-secondary" : "#999", // 次文本色
    // "@disabled-color" : "rgba(0, 0, 0, .25)", // 失效色
    // "@border-radius-base": "8px", // 组件/浮层圆角
    // "@border-color-base": "#d3d3d3", // 边框色
    // "@box-shadow-base": "0 2px 8px rgba(0, 0, 0, 0.15)" // 浮层阴影
  },
  alias: {
    '@': path.resolve(__dirname, 'src')
  }
}
