module.exports = {
  title: 'VXUI',
  description: '基于Vue开发的组件库',
  base: '/',
  head: [
    ['link', { rel: 'icon', href: 'favicon.ico' }],
    ['script', { src: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js' }],
    [
      'script',
      { src: 'https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js' }
    ]
  ],
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
            children: [['/components/button', 'Button 按钮']]
          }
        ]
      }
    ]
  },
  plugins: ['demo-block']
}
