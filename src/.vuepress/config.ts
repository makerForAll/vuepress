

import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";
import theme from "./theme.js";
// import { searchPlugin } from "@vuepress/plugin-search";
import { searchProPlugin } from "vuepress-plugin-search-pro";
export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "数据文档",
  description: "文档",
  theme,
  plugins: [
    searchProPlugin({
      indexContent: true,
      locales: { "/": { placeholder: "搜索文档..." } },
    }),
  ]
  // theme: hopeTheme({
  //   // 禁用“编辑此页”链接
  //   editLink: false,

  //   // 禁用“上一篇/下一篇”链接
  //   prevLink: true,
  //   nextLink: false,

  //   // 或者直接禁用整块 page meta（包含编辑此页、更新时间、分类标签等）
  //   // pageMeta: false,
  // }),

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
