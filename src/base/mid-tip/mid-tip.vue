<template>
  <transition name="drop">
    <div class="top-tip" v-show="showFlag" @click.stop="hide">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    delay: {
      type: Number,
      default: 2000
    }
  },
  data() {
    return {
      showFlag: false
    }
  },
  methods: {
    show() {
      this.showFlag = true
      clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        this.hide()
      }, this.delay)
    },
    hide() {
      this.showFlag = false
    }
  }
}
</script>

<style scoped lang="less" rel="stylesheet/less">
  @import "~@/common/less/variable";

  .top-tip {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 500;
    opacity: 1;
    padding: 0 0.12rem;
    text-align: center;
    &.drop-enter-active, &.drop-leave-active {
      transition: all 0.5s;
    }
    &.drop-enter, &.drop-leave-to {
      opacity: 0;
    }
  }
</style>
