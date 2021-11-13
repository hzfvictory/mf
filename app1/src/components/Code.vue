<template>
  <div class="code">
    webpack 配置项：
    <pre style="margin-left: -23px;">
     {{code}}
   </pre>
  </div>
</template>
<script>
export default {
  name: "Code",
  props: {
    code: {
      type: String,
      default: `new ModuleFederationPlugin({
      name: "app1", // 应用的名称。在其他应用查找的时候，会在这个name的作用域下去查找对应的组件。
      filename: "remoteEntry.js", // 这些对外暴露的模块存放在哪个文件中。
      // 对外暴露的模块。只有对外暴露的相应的模块功能才能被使用。
      exposes: {
        './Header': "./src/components/Header.vue",
      },
     })`
    }
  }
};
</script>
