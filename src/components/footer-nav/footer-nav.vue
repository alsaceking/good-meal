<template>
  <div class="footer-nav">
    <router-link tag="div" class="nav-item" :to="{name: 'order'}">
      <span class="nav-icon"><i class="fa fa-cutlery"></i></span>
      <p class="nav-name">点餐</p>
    </router-link>
    <router-link tag="div" class="nav-item" :to="{name: 'pay'}">
      <span class="nav-icon"><i class="fa fa-credit-card"></i></span>
      <p class="nav-name">支付</p>
    </router-link>
    <router-link tag="div" class="nav-item" :to="{name: 'message'}">
      <span class="nav-icon"><i class="fa fa-commenting-o"></i></span>
      <p class="nav-name">通知</p>
    </router-link>
    <router-link tag="div" class="nav-item" :to="{name: 'user'}">
      <span class="nav-icon"><i class="fa fa-user-o"></i></span>
      <p class="nav-name">我</p>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'footer-nav',
  data () {
    return {

    }
  }
}
</script>

<style lang="less" scoped>
  @import '~@/common/less/variable.less';

  .footer-nav {
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 0.60rem;
    background-color: @color-highlight-background;
    .nav-item {
      position: relative;
      flex: 1;
      text-align: center;
      font-size: @font-size-small;
      color: @color-text-d;
      .nav-icon {
        display: inline-block;
        padding-top: 0.08rem;
        height: 0.20rem;
        font-size: @font-size-large;
      }
      .nav-name {
        position: absolute;
        height: 0.12rem;
        line-height: 0.12rem;
        padding-bottom: 0.10rem;
        bottom: 0;
        left: 0;
        right: 0;
        color: @color-text-l;
      }
      &.router-link-active {
        color: @color-theme;
        .nav-name {
          color: @color-theme;
        }
      }
    }
  }
</style>