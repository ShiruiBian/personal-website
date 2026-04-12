# 学长网站的要求

项目是需要给我们复旦大学的数学系 2023 级数学系的学长卞诗瑞制作一个个人网站

- 网站最终会挂靠在 github.io 下，现在暂时不需要部署，只需要完成网页的框架和基本的界面即可。
- 采用 vue 作为技术栈
- 要求其风格完全仿照其导师林伟的主页的风格，林伟老师的主页的网址是：[林伟 WEI LIN @ Fudan | 林偉 • 復旦--Home](https://faculty.fudan.edu.cn/wlin/zh_CN/index.htm)
- 目前学长没有给我具体的内容，你使用占位符，例如 200 字的自我介绍你就重复：“这是自我介绍” 即可。
- 数据直接保存在 `src/content/**.md` 文件夹下，在 markdown 中修改文件内容就可以直接就该网页内容
  - 每一个网站都有 `**-ch.md` 和 `xx-en.md` 两个版本，下面指的所有的 `**.md` 都会缺省这里的语言标记
- 图片全部保存在 `public/images/**.md` 文件夹下，按照模块划分，请你先生成几张空白图标表示占位

## 风格介绍

### 顶部栏

顶部栏有如下的几个部分，要求中文和英文的：

1. Home：主页
2. Biography：自传
3. Research：研究
4. Academic Activities：学术活动
5. Grants & Awards：奖项

然后在顶部栏的最右侧支持中文和英文的手动切换，以下是各个页面的介绍：

### 主页

主页的上方由大头照和间接组成，大头照在 `public/images/selfie-1.jpg`，然后右侧是学长的间接

这部分完了之后是一个横条表示区分，横条右侧由学长的邮件，邮件在 `src/content/profiles.md` 中定义，其内容为：

```md
---
email: xxx@m.fudan.edu.cn
---
# BIAN ShiRui(卞诗瑞),  Ph.D. in Applied Mathematics & Complex Systems & AI Theory

|waiting for your instruction|
|waiting for your instruction|
|waiting for your instruction|

Fudan University, No. 220 Handan Road, Shanghai 200433, CHINA


Office: |wait for your office|
Phone (Office): |wait for your phone|       Fax: |wait for your fax|
E-mail Address: |wait for your email|
```

横条的 yaml 部分的 value 需要写在横条的右侧，你可以参考网站

### 自传

防止一个 `public/images/selfie-2.jpg` 在开始，然后下面是中文和英文的自我简介，在 `src/content/biography.md`

### 研究

这里的内容在 `src/content/biography.md`， 论文的标题是一级的，然后其中需要支持超链接，也就是markdown格式的超链接

### 学术活动

这里的内容在 `src/content/academic.md`

### 奖项

全部是列表形式，在 `src/content/grants.md`