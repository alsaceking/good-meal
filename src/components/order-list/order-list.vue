<template>
  <div class="order-list">
    <slider ref="slider" @scrollEnd="scrollEnd" :loop="false" :autoPlay="false" :showDot="false" :initialIndex="initialIndex">
      <div class="order-item" v-for="(item, index) in orderList" :key="index">
        <div class="content" :class="{active: item.state === 1}">
          <div class="title">
            <div class="time">{{item.time}}</div>
            <div class="name">{{item.name}}</div>
          </div>
          <div class="state">{{handleState(item.state)}}</div>
        </div>
      </div>
    </slider>
  </div>
</template>

<script>
import Slider from '@/base/slider/slider'
import { mapGetters } from 'vuex'

export default {
  props: {
    orderList: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      initialIndex: 0
    }
  },
  computed: {
    ...mapGetters([
      'currentDateIndex'
    ])
  },
  mounted() {
    this.initialIndex = this.currentDateIndex
  },
  methods: {
    scrollEnd(index) {
      this.$emit('getScrollIndex', index)
    },
    handleState(state) {
      if (state === 1) {
        return '可点餐'
      }
      return '未开放'
    }
  },
  watch: {
    currentDateIndex(newval) {
      this.$refs.slider.goToIndex(newval)
      this.$emit('getPagingIndex', newval)
    }
  },
  components: {
    Slider
  }
}
</script>

<style scoped lang="less">
  @import '~@/common/less/variable.less';

  .order-list {
    position: relative;
    width: 100%;
    overflow: hidden;
    .order-item {
      padding: 0.18rem 0.15rem 0;
      .content {
        display: flex;
        align-items: center;
        border-radius: 10px;
        background-color: @color-highlight-background-d;
        color: @color-text-l;
        overflow: hidden;
        .title {
          flex: 1;
          padding: 0.20rem 0.20rem 0.20rem 0.15rem;
          text-align: left;
          .time {
            color: @color-text-l;
            font-family: DINCond,sans-serif;
            font-size: @font-size-large-x;
            font-weight: 700;
            padding-bottom: 0.10rem;
          }
          .name {
            color: @color-text-d;
          }
        }
        .state {
          width: 0.52rem;
          border-radius: 4px;
          padding: 0.05rem 0.03rem;
          margin-right: 0.15rem;
          font-size: @font-size-small;
          background-color: @color-background-d;
        }
        &.active {
          .time {
            color: @color-theme;
          }
          .name {
            color: @color-text;
          }
          .state {
            color: @color-text;
            background-color: @color-theme;
          }
        }
      }
    }
  }
</style>
