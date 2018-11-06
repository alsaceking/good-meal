<template>
  <div class="scroll-nav">
    <scroll ref="scroll" class="nav" :data="classify" :scrollX="true">
      <ul ref="navGroup">
        <li class="nav-item"
            v-for="(item, index) in classify" :key="index"
            :class="{'active':currentIndex === index}"
            @click="switchNav(index)">
          <span class="txt">{{item.name}}</span>
        </li>
      </ul>
    </scroll>
  </div>
</template>

<script>
import Scroll from '@/base/scroll/scroll'
export default {
  props: {
    classify: {
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
  activated() {
    this.$refs.scroll.refresh()
  },
  methods: {
    // 派发nav点击时的激活状态
    switchNav(index) {
      this.$emit('switchNav', index)
    },
    // 设置nav的宽度进行横向滚动
    _setNavWidth() {
      this.children = this.$refs.navGroup.children
      let width = 0
      for (let i = 0; i < this.children.length; i++) {
        let child = this.children[i]
        let navWidth = child.clientWidth
        width += navWidth
      }
      this.$refs.navGroup.style.width = `${width + 1}px`
    }
  },
  components: {
    Scroll
  },
  watch: {
    classify(newClassify) {
      if (newClassify) {
        setTimeout(() => {
          this._setNavWidth()
          this.$refs.scroll.refresh()
        }, 20)
      }
    }
  }
}
</script>

<style scoped lang="less">
  @import "~@/common/less/variable";
  .scroll-nav {
    position: relative;
    width: 100%;
    height: 0.22rem;
    border-bottom: 1px solid #dcdcdc;
    .nav {
      position: absolute;
      top: 0rem;
      left: 0rem;
      right: 0rem;
      bottom: 0;
      overflow: hidden;
      .nav-item {
        display: inline-block;
        font-size: @font-size-medium;
        .txt {
          display: inline-block;
          padding: 0 0.05rem 0.05rem;
        }
        &:first-child {
          padding-left: 0.10rem;
        }
        &:last-child {
          padding-right: 0.10rem;
        }
        &+.nav-item {
          padding-left: 0.25rem;
        }
        &.active {
          color: @color-theme;
          .txt {
            border-bottom: 2px solid @color-theme;
          }
        }
      }
    }
  }
</style>
