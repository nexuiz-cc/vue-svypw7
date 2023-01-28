import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import postCssPxToRem from "postcss-pxtorem";

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 8081,
  },
  css:{
    postcss:[
      postCssPxToRem({
        // rootValue: 100, // 转换倍率 1rem=100px
        // rootValue: 37.5, // 转换倍率 1rem=37.5px
        //针对newApp 640宽100倍率，vant使用375宽设计稿，重新计算基础字号
        rootValue({file}){
          return file.indexOf('vant')!==-1 ?58.5938 : 100; //针对 自行封装lib-flexible.js 640/100/100倍
        },
        propList: ["*"], // 需要转换的属性，这里选择全部都进行转换
      })
    ]
  }
});
