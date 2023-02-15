module.exports = {
    title: '济南KUG',
    description: '这里是北京 Kotlin 用户组，欢迎所有对 Kotlin 感兴趣的开发者加入用户组',
    lang: 'zh-CN',
    head: [['link', { rel: 'icon', type: 'image/svg+xml', href: 'kug.png' }]],
    themeConfig: {
        repo: 'jinan-kug/.github',
        repoLabel: 'GitHub',
        docsDir: 'docs',
        docsBranch: 'main',
        editLinks: true,
        editLinkText: '欢迎交流!',
        lastUpdated: '最近更新时间',
        nav: [
            { text: 'Kotlin官方', link: 'https://kotlinlang.org/' },
            { text: 'Kotlin中文', link: 'https://www.kotlincn.net/' },
            { text: 'GitHub社区', link: 'https://github.com/jinan-kug/'}
        ],
        sidebar: {
            '/': [
                {
                    text: '首页',
                    link: '/'
                },
                {
                    text: '简介',
                    link: '/intro/index.md'
                },
                {
                    text: '快速开始',
                    link: '/start/index.md'
                },
                {
                    text: '协程',
                    link: '/coroutine/index.md'
                },
                {
                    text: '关于我们',
                    link: '/about/index.md'
                }
            ]
        }
    }
}