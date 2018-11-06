<template>
  <div class="cart-control">
    <h2>购买数量</h2>
    <div class="count-minus" :class="{'disable': buyCount < 2}" @click.stop="minus"><i class="fa fa-minus"></i></div>
    <div class="buy-count">{{buyCount}}</div>
    <div class="count-plus" @click.stop="plus"><i class="fa fa-plus"></i></div>
  </div>
</template>

<script>
export default {
  props: {
    buyCount: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {

    }
  },
  methods: {
    minus() {
      this.$emit('countMinus')
    },
    plus() {
      this.$emit('countPlus')
    }
  }
}
</script>

<style scoped lang="less">
  @import "~@/common/less/variable";
  .cart-control {
    display: flex;
    padding: 0.35rem 0.10rem 0 0;
    font-size: @font-size-medium-x;
    align-items: center;
    text-align: center;
    height: 0.25rem;
    line-height: 0.25rem;
    h2 {
      flex: 1;
      text-align: left;
    }
    .count-minus {
      width: 0.25rem;
      border-radius: 50%;
      color: @color-theme-d;
      border: 1px solid @color-theme-d;
      &.disable {
        color: @color-text-l;
        border-color: @color-text-l;
      }
    }
    .buy-count {
      width: 0.35rem;
      margin: 0 0.05rem;
      font-size: @font-size-large;
    }
    .count-plus {
      width: 0.25rem;
      border-radius: 50%;
      color: @color-text-f;
      background-color: @color-theme-d;
    }
  }
</style>
