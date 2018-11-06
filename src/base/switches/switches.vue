<template>
  <ul class="switches">
    <li class="switch-item" v-for="(item,index) in switches" :key="index" @click="switchItem(index)">
      <span :class="{'active':currentIndex === index}">{{item.name}} </span>
    </li>
  </ul>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    switches: {
      type: Array,
      default: function() {
        return []
      }
    },
    currentIndex: {
      type: Number,
      default: 0
    }
  },
  methods: {
    switchItem(index) {
      this.$emit('switch', index)
    }
  }
}
</script>

<style scoped lang="less" rel="stylesheet/less">
  @import "~@/common/less/variable";

  .switches {
    display: flex;
    align-items: center;
    .switch-item {
      flex: 1;
      padding: 0.14rem;
      text-align: center;
      color: @color-text-d;
      span {
        padding:0.08rem 0.12rem;
        &.active {
          color: @color-theme;
          border-bottom: 2px solid @color-theme;
        }
      }
    }
  }
</style>