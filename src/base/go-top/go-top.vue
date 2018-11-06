<template>
  <div class="go-top" @click.stop="goTop">
    <i class="fa fa-angle-up fa-2x"></i>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    goTop() {
      this.$emit('backTop')
    }
  },
  components: {

  }
}
</script>

<style scoped lang="less">
  .go-top {
    position: fixed;
    right: 0.15rem;
    bottom: 0.63rem;
    width: 0.38rem;
    height: 0.38rem;
    border-radius: 50%;
    text-align: center;
    z-index: 200;
    opacity: 1;
    box-shadow: 0 0 6px #dcc0de;
    background-color: #fff;
    &.gotop-enter-active, &.gotop-leave-active {
      transition: all .3s;
    }
    &.gotop-enter, &.gotop-leave-active {
      opacity: 0;
    }
  }
</style>
