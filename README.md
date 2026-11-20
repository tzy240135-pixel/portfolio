# 作品集网站 · 使用说明

这是一个纯静态网站，不需要服务器、不需要数据库、不需要构建。
把 `site` 文件夹里所有文件上传到任意静态托管，就能得到一个可以发给面试官的链接。

---

## 一、先在本地看一眼

直接双击 `site/index.html` 用浏览器打开即可。
视频用 `file://` 打开也能播放，只是某些浏览器（Chrome）会限制自动播放，点一下就行。

> 想更贴近线上效果，可以在 `site` 目录里开一个本地服务器：
> ```
> cd site
> python -m http.server 8000
> ```
> 然后浏览器打开 http://localhost:8000

---

## 二、必须替换的占位内容

打开 `site/index.html`，搜索以下占位符并替换：

| 占位符 | 替换成 |
|---|---|
| `EMAIL_PLACEHOLDER` | 你的邮箱（出现 2 次：右上按钮 + 底部联系区） |
| `<title>` 里的「作品集 · AIGC 动画与内容制作」 | 可改成「你的名字 · 作品集」 |

简历文件已放在 `site/resume.pdf`，如果想换版本，直接覆盖这个文件即可（文件名不要改）。

---

## 三、三种上线方式（选一个）

### 方式 A：GitHub Pages（免费、最稳，推荐）

1. 注册/登录 GitHub，新建仓库，名字随意（比如 `portfolio`），可见性选 **Public**
2. 把 `site` 文件夹里的**所有内容**（不是 site 文件夹本身）上传到仓库根目录
3. 进入仓库 **Settings → Pages**，Source 选 `Deploy from a branch`，Branch 选 `main` / 根目录，保存
4. 等 1–2 分钟，链接就是：`https://你的用户名.github.io/portfolio/`

**注意**：仓库要 Public，否则 Pages 不开。总大小 28 MB，远低于 GitHub 1 GB 的限制。

### 方式 B：Vercel（免费，可绑自己的域名）

1. 登录 vercel.com，用 GitHub 账号一键导入这个仓库
2. Framework 选 **Other**，直接 Deploy
3. 得到类似 `https://portfolio-xxx.vercel.app` 的链接

### 方式 C：Cloudflare Pages（国内访问比前两个稍快）

1. 登录 dash.cloudflare.com → Workers & Pages → Create → Pages → Connect to Git
2. 选仓库，Build command 留空，Output directory 填 `/`
3. Deploy

> **国内访问提示**：GitHub Pages 和 Vercel 在国内偶尔会慢或被墙。
> 如果面试官主要在国内，建议同时准备一份 **ZIP 压缩包**（`portfolio-site.zip`），
> 邮件里写「在线版：链接，离线版：附件」，双保险。

---

## 四、之后怎么改

| 想改什么 | 改哪里 |
|---|---|
| 文案、项目描述 | `site/index.html` |
| 颜色、间距、深色主题 | `site/style.css` 顶部的 `:root` 变量 |
| 换视频 | 覆盖 `site/media/` 里同名的 mp4（保持文件名），封面图用同名的 jpg |
| 换简历 | 覆盖 `site/resume.pdf` |
| 加项目 | 复制一段 `<article class="work">` 改内容即可 |

**视频压缩建议**：网页用的视频控制在 10 MB 以内，720p、H.264、`+faststart`。
如果用 ffmpeg：
```
ffmpeg -i 原片.mp4 -vf "scale=720:-2" -c:v libx264 -crf 27 -preset medium \
  -movflags +faststart -c:a aac -b:a 128k 输出.mp4
```

---

## 五、文件结构

```
site/
├── index.html          页面
├── style.css           样式
├── app.js              点击播放（灯箱）
├── resume.pdf          简历
└── media/
    ├── scifan_reel.mp4 《剑碎重鸣》片花 38 秒
    ├── whale_day.mp4  《和大肥鱼的一天》60 秒
    ├── koubo60.mp4    AI 口播 62 秒
    ├── chushibiao.mp4 数字人口播 20 秒
    ├── cast.jpg       角色设定图
    ├── scene.jpg      场景设定图
    └── *.jpg          各视频封面
```
