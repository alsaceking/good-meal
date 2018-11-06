<template>
  <div class="top-title">
    <div v-if="showBack">
      <div class="back" @click.stop="goBack"><i class="fa fa-angle-left fa-2x"></i></div>
    </div>
    <h1 class="title">{{title}}</h1>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '雨街美餐'
    },
    showBack: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
    }
  },
  methods: {
    goBack() {
      this.$router.back()
    }
  },
  components: {
  }
}
</script>

<style scoped lang="less">
  @import "~@/common/less/variable";
  .top-title {
    position: relative;
    height: 0.45rem;
    text-align: center;
    background-color: @color-highlight-background;
    .title {
      height: 0.45rem;
      line-height: 0.45rem;
      color: @color-text-ll;
      font-size: @font-size-medium-x;
    }
    .back {
      position: absolute;
      top: 0.06rem;
      left: 0.10rem;
      height: 0.30rem;
      width: 0.30rem;
      border-radius: 50%;
      text-align: center;
    }
  }
</style>
