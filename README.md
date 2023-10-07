# 济南KUG官网成员协作说明

## 请了解

> **jinan-kug.github.io仓库共有main和deploy两个分支，用GitHub Pages部署和GitHub Action持续集成。**

- main分支存放网站源码和Markdown文件
- deploy分支存放打包后的静态资源



## 使用说明

**GitHub Pages就将deploy分支的静态资源部署，地址为https://jinan-kug.github.io**

**当执行push操作时就会触发main分支的workflow工作流程，自动将push来的代码打包后放到deploy分支，实现更新**



## 使用步骤

**将本仓库的main分支fork到你自己的仓库，拉到本地编辑你的内容后提交pr，合并代码后就会触发workflow自动部署**



## 注意

1. 所有要编辑的Markdown都在main分支的docs目录下，配置文件在docs/.vitepress/config.js，打包后的文件在docs/.vitepress/dist目录下，可以先本地测试
2. 所有能用到的基本都在docs目录下，你可以编写Markdown或HTML文件，按照你的习惯创建目录，也可以将目录规范，编写好后只需要在配置文件中添加配置即可，一般来说只需要变动themeConfig.siderbar配置项，具体的配置项可参照VitePress文档，或与我讨论
3. 你可以编写HTML、Markdown或在Markdown文件中放入你的文章链接

t
