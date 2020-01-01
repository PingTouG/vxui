module.exports = {
  title: 'VXUI',
  description: '基于Vue开发的组件库',
  base: '/',
  head: [['link', { rel: 'icon', href: 'favicon.ico' }]],
  themeConfig: {
    nav: [
      { text: '指南', link: '/installation' },
      { text: 'GitHub', link: 'https://github.com/PingTouG/vxui' }
    ],
    sidebar: [
      {
        title: '开发指南',
        collapsable: false,
        children: [
          ['/installation', '安装'],
          ['/quickstart', '快速开始']
        ]
      },
      {
        title: '组件',
        collapsable: false,
        children: [
          {
            title: 'Basic',
            collapsable: false,
            children: [
              ['/components/icon', 'Icon 图标'],
              ['/components/button', 'Button 按钮']
            ]
          }
        ]
      }
    ],
    sidebarDepth: 0
  },
  plugins: [
    [
      'demo-code',
      {
        showText: '显示代码',
        hideText: '隐藏代码',
        minHeight: 0,
        onlineBtns: {
          codepen: false,
          jsfiddle: false,
          codesandbox: false
        },
        demoCodeMark: 'demo'
      }
    ]
  ]
}
