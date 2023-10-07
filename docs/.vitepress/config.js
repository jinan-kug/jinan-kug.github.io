module.exports = {
    title: '济南KUG',
    description: '这里是济南 Kotlin 用户组，欢迎所有对 Kotlin 感兴趣的开发者加入用户组',
    lang: 'zh-CN',
    head: [['link', { rel: 'icon', type: 'image/svg+xml', href: 'kug.png' }]],
    themeConfig: {
        logo: { src: 'kug.png', width: 24, height: 24 },
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
        socialLinks: [
            { icon: 'github', link: 'https://github.com/jinan-kug/jinan-kug.github.io' }
        ],
        sidebar: {
            '/resources': [
                {
                    text: '简介',
                    link: '/resources/intro/index.md'
                },
                {
                    text: '快速开始',
                    link: '/resources/start/index.md'
                },
                {
                    text: '协程',
                    link: '/resources/coroutine/index.md'
                },
                {
                    text: '关于我们',
                    link: 'resources/about/index.md'
                }
            ]
        },
        footer: {
            copyright: 'Copyright © 2023 jinan-kug Powered by VitePress'
        },
        search: {
            provider: 'local'
        }
    }
}
