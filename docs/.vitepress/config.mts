import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "编程小白",
  description: "编程学习",
  lastUpdated: true,
  base: '/',
  themeConfig: {
    docFooter: {
      prev: "上一篇", //Next page
      next: "下一篇", //Previous page
    },
    search: {
      provider: 'algolia',
      options: {
        appId: '178HCSX9QV',
        apiKey: 'f7bb0c8dde031f493be81a5b51b10975',
        indexName: '178HCSX9QV'
      }
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '编程', link: '/guide/', activeMatch: '/guide/' },
      { text: 'AI', link: '/ai/', activeMatch: '/ai/' },
      { text: '杂记', link: '/document/', activeMatch: '/document/' },
      {
        text: '常用站点',
        items: [
          { text: 'Github', link: 'https://github.com/' },
          { text: 'Gitee', link: 'https://gitee.com/' },
          { text: '菜鸟教程', link: 'https://www.runoob.com/' }
        ]
      }
    ],

    sidebar: {
      '/guide/': [
        {
          text: '编程',
          items: [
            { text: '环境准备', link: '/guide/path' },
            { text: '软件', link: '/guide/ide' },
            {
              text: 'Java',
              collapsed: true,
              items: [
                { text: '基础', link: '/guide/java' }
              ]
            }
          ]
        },
        // {
        //   text: '面试题',
        //   items: [
        //     { text: '环境准备', link: '/guide/path' },
        //     { text: '软件', link: '/guide/ide' }
        //   ]
        // }
      ],
      '/ai/': [
        {
          text: 'AI',
          items: [
            { text: '常用工具', link: '/ai' },
          ]
        }
      ],
      '/document/': [
        {
          text: 'vitepress 搭建教程',
          items: [
            {
              items: [
                { text: '快速开始', link: '/document/vitepress' }
              ]
            },
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ZL0013/codeblog' }
    ]
  }
})
