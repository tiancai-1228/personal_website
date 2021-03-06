import Aprd from "../image/aprd.png";
import Ecomart from "../image/ecomart.png";
import BLOG from "../image/BLOG.png";
import Coffee from "../image/coffee.png";
import MESSAGE from "../image/MESSAGE.png";
import TAIPEI from "../image/TAIPEI.png";
import Chat from "../image/chat.png";
import { useTranslation } from "react-i18next";

const project = [
  {
    img: Ecomart.src,
    title: "HKTVmall - Ecomart EESE",
    text: "在HKTVmall主題商城中的二手交易平台Ecomart EESE 的NGO情報頁面開發，主要為各個文章與小編推薦，以及橫幅廣告輪播等等，還有上傳、編輯、刪除帖子及流言等等的功能開發與串接api，建立可重用、調整的共用compoent。",
    Stack:
      "所用技術: Next.js  | React.js | Ionic Framework | Storybook | TailwindCSS | TypeScript |Redux toolkit +Redux Saga",
    Visit: "https://ecomart.hktvmall.com/#",
    SourceCode: "",
  },
  {
    img: Aprd.src,
    title: "APRD CMS-Category",
    text: "公司專案APRD後台CMS Category部分，負責管理與顯示前台app商品不同層級的類別，與每個類別有多少商品 。",
    Stack:
      "所用技術 : Gatsby js | React.js | Storybook | Antd | TailwindCSS | Typescript |Redux toolkit +Redux Saga",
    Visit: "",
    SourceCode: "",
  },
  {
    img: BLOG.src,
    title: "Personal Website",
    text: "個人靜態網站，純css動畫特效與個人資料作品集。",
    Stack: "所用技能:React.js + Next.js + 18n + TypeScript + CSS + HTML + RWD",
    Visit: "https://personal-website-eta-rosy.vercel.app/",
    SourceCode: "https://github.com/tiancai-1228/personal_website",
  },
  {
    img: Chat.src,
    title: "chat_blog",
    text: "以node.js來完成user登入/註冊以及確認登入狀態api，與websocket的server端都部屬於heroku，再以前端練習簡單的websocket與server串接練習實現簡易的即時聊天室，與user註冊登入登出認證等功能",
    Stack:
      "所用技能:React.js + Redux toolkit + Redux Saga + Next.js + axios+ HTML5 + CSS + TypeScript + node.js + websocket + Antd",
    Visit: "https://next-eight-gray.vercel.app/",
    SourceCode: "https://github.com/tiancai-1228/Chat_Blog",
  },
  {
    img: Coffee.src,
    title: "coffee購物網站",
    text: "個人練習作品，主要為練習Vue.js框架使用的一個購物網站，包含基本的網頁切版以及商品點選存取到購物車等功能。",
    Stack: "所用技能:Vue.js + HTML5 + CSS + JavaScript +RWD",
    Visit: "https://tiancai-1228.github.io/coffee/",
    SourceCode: "https://github.com/tiancai-1228/coffee",
  },
  {
    img: TAIPEI.src,
    title: "台北各區人口統計",
    text: "個人練習作品，主要為串接政府api 以及 Victory圖表套件",
    Stack:
      "所用技能:React.js + Next.js + HTML5 + CSS + TypeScript + axios + Victory + RWD",
    Visit: "https://taipei-statistics.vercel.app/",
    SourceCode: "https://github.com/tiancai-1228/taipei_statistics",
  },

  {
    img: MESSAGE.src,
    title: "留言板",
    text: "於最上層的輸入框中輸入留言內容送出後將顯示在留言列中最新發布的留言,排越上面每一則留言下方皆會有回覆框, 可針對此留言做回覆 (越新的回覆排越上方)資料存在於 localStorage",
    Stack: "所用技能:React.js + HTML5 + CSS + TypeScript ",
    Visit: "https://codesandbox.io/s/github/tiancai-1228/react_ts_codesamdbox",
    SourceCode: "https://github.com/tiancai-1228/react_commentList_codesamdbox",
  },
];
export default project;
