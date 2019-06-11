<template>
  <div>
    <ul class="tabbar">
      <router-link :to="tab.href" tag="li"
      v-for="tab in tabs"
      :key="tab.id"
      active-class="dian">
        <i :class="['iconfont', tab.icon]"></i>
        <span>{{ tab.name }}</span>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Tabbar',
  props: {
    tabs: Array
  }
}
</script>

<style lang="less" scoped>
@import '~@/styles/common/variable.less';
// @import '~@/styles/common/mixins.less';

  .tabbar {
    position: fixed;
    bottom: 0;
    width: 100%;
    display: flex;
    padding: 0;
    margin: 0;
    z-index: 100;
    background-color: #fff;
    list-style: none;

    li {
      flex: 1;
      height: 50px;
      display: flex;
      flex-direction: column;
      align-items: center;
      color: @tabcolor;
      &.dian {
        color: @tabcolordj;
      }
    }
    .iconfont {
      font-size: 20px;
      margin: 8px 0 4px;
    }
    span {
      font-size: 12px;
    }

  }
</style>
