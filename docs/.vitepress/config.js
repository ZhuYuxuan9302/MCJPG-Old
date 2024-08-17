export default {
    head: [
        ['link', { rel: 'icon', href: '/logo2.png' }],
    ],
    title: 'MCJPG组织网站',
    lastUpdated: true,
    description: 'Minecraft服务器集体宣传组织 (MSJPG)-一个致力于Minecraft服务器宣传和技术交流社区的新兴组织',
    lang: 'zh-CN',
    themeConfig: {
        siteTitle: 'MCJPG组织', //站点标题
        logo: "/logo2.png",
        description: '一个Minecraft服务器集体宣传组织',//MCCPO
        nav: [
            { text: "成员服", link: "/" },
            { text: "规则", link: "/rules/" },
            { text: "组织架构", link: "/structure/" },
            { text: "状态监测", link: "https://status.mcjpg.org/" },
            {
              text: "友情链接",
              items: [
                { text: "随风的个人网站", link: "https://zhuyuxuan.link/" },
                { text: "金苹果论坛", link: "https://mcodw.com/" },
                { text: "笨蛋开服指南", link: "https://yizhan.wiki/NitWikit/" },
                { text: "风梨影视", link: "https://v.flweb.cn/" }
              ]
            }
        ],
        socialLinks: [
            { icon: "github", link: "https://github.com/MineJPGcraft/MCJPG" },
        ],
        footer: {
            message: 'MCJPG服务器联合组织',
            copyright: 'Copyright © 2024-present <a href="https://mcjpg.org/">MCJPG</a>— —<a href="https://github.com/MineJPGcraft/MCJPG">我们的仓库</a>'
        },
        lastUpdatedText: "最近更新时间",
        search: {
            provider: "local",
            options: {
              translations: {
                button: {
                  buttonText: "搜索文章",
                  buttonAriaLabel: "搜索文章",
                },
                modal: {
                  noResultsText: "无法找到相关结果",
                  resetButtonTitle: "清除查询条件",
                  footer: {
                    selectText: "选择",
                    navigateText: "切换",
                  },
                },
              },
            },
          },
    },
};
