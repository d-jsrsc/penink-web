import type { EventData } from "../types";
const datas: EventData[] = [
  // {
  //   time: "2021-07-22",
  //   title: "“双减”来袭，我被裁员",
  //   content: "“双减”是一切的起点，没有这个起点，也不会有接下来的机缘巧合。",
  // },
  {
    time: "2021-08",
    title: "想法",
    content: `在一些交流中了解到 h5 页面搭建。大意就是可以让运营能很快的搭建出 <code>H5</code> 页面来，于是就想着我似乎也可以搞一个出来。`,
  },
  {
    time: "2021-08-22",
    title: "网页编辑器项目初始化",
    content: "因为整个 8 月都在忙，所以才到月底才开始实施。",
    img: "/events/initproj.png",
  },
  {
    time: "2021-11-01",
    title: "网页编辑器雏形",
    content:
      "在网页编辑器雏形完成后，我录制了视频。还上传了 bilibili作为留念。",
    img: "/events/projbili.png",
    imgClick: "https://www.bilibili.com/video/BV1KR4y1t7Eu/",
  },
  {
    time: "2021-11",
    title: "还差一个富文本编辑器",
    content:
      "简单网页是可以做出来，再能和我写的文章关联一下就好了。这样就可以做到自定义网页，并且能和文章关联，就可以很像 Medium 了。",
  },
  {
    time: "2021-11-06",
    title: "富文本编辑调研",
    content: `之前已经用 draftjs 及周边写过一个富文本 notestory 
          <a href="http://download.wesy.club/">
            http://download.wesy.club/
          </a>
          。但是这次坚决不用了，毕竟坑太多了。再一系列的对比后，最后选定
          Prosemirror。`,
  },
  {
    time: "2021-11-09",
    title: "支持 bilibili",
    content: "要在富文本能支持 bilibili 视频分享",
  },
  {
    time: "2021-11-19",
    title: "支持代码高亮",
    content: "要在富文本能支持支持代码高亮",
  },
  {
    time: "2021-11-21",
    title: "解决二级域名",
    content:
      "既然能编辑页面了，那二级域名是必不可少的。不过这对现在我来说已经不是问题了。Nodejs 太擅长做这件事儿了。",
  },
  {
    time: "2021-12-06",
    title: "网站和二级网站",
    content:
      "原本想着直接拿 Pug 做的，毕竟到了页面这一层也就剩渲染和 SEO 了，这些 Pug 解决似乎就足够了，但最后还是被我用 Nextjs 替换了。替换为 Nextjs，直接改了之前的网络架构，所以也拿视频记录了下。",
    imgClick: "https://www.bilibili.com/video/BV13P4y1G7YS/",
    img: "/events/chstructure.png",
  },
  // {
  //   time: "以后",
  //   title: "迭代，完善",
  //   content:
  //     "网页编辑器还可以再做些模版，富文本编辑器再支持下 table 和 latex。",
  // },
];
export default datas;
