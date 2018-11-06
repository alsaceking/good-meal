<template>
  <div class="loading">
    <img src="./loading.gif">
    <p class="desc">{{title}}</p>
  </div>
</template>

<script>
export default {
  name: 'loading',
  props: {
    title: {
      type: String,
      default: '正在载入...'
    }
  }
}
</script>

<style lang="less" scoped>
  
  @import '~@/common/less/variable';

  .loading {
    width: 100%;
    text-align: center;
    img {
      width: 0.36rem;
      height: 0.36rem;
    }
    .desc {
      margin-top: 10px;
      line-height: 0.20rem;
      font-size: @font-size-small;
      color: @color-text-l;
    }
  }
</style>