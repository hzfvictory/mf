<template>
  <div id="app">
    --
    <Header name="app2" code='new ModuleFederationPlugin({
      name: "app2",
      // 一个映射管理，将其他远程的名称映射成本地的别名。例如上面的我们将其他远程项目 app1 映射成了本地的 app_one
      remotes: {
        app_one: "app1@http://localhost:3000/remoteEntry.js",
      } '/>
  </div>
</template>
<script>
const Header = () => import("app_one/Header");
export default {
  components: {
    Header
  }
};
</script>

<style>
.mf {
  font-size: 16px;
  color: red;
}
</style>