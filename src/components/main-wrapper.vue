<template>
  <div class="main-wrapper">
    <div class="wrapper">
      <vHeader />
      <hr />
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <vFooter />
  </div>
</template>

<script>
import vHeader from "./layuots/header.vue";
import vFooter from "./layuots/footer.vue";

export default {
  name: "mainWrapper",
  components: {
    vHeader,
    vFooter,
  },
};
</script>

<style scoped lang="scss">
.main-wrapper {
  margin: 0 auto;
}

.wrapper {
  min-height: calc(100vh - 60px);
}
</style>
