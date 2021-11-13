<template>
  <div>
    <h1>{{name}}</h1>
    <p class="mf">联邦模块、联邦模块、联邦模块...</p>
    <Code :code="code" />
  </div>
</template>
<script>
import Code from "./Code.vue";
export default {
  components: { Code },
  props: {
    name: {
      type: String,
      default: ""
    },
    code: {
      type: String,
    }
  }
};
</script>
<style scoped>
.mf {
  font-size: 16px;
  color: palevioletred;
}
</style>