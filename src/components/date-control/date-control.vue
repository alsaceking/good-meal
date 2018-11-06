<template>
  <div class="date-control">
    <slider ref="slider" :loop="false" :autoPlay="false">
      <div class="date-list">
        <div @click.stop="selectDate(index)" v-if="index < 7" class="date-item" :class="{disable: day.disable, today: day.day === today, active: index === currentDateIndex}" v-for="(day, index) in dateList" :key="index">
          <div class="week">{{day.week}}</div>
          <div class="day">{{day.day}}</div>
        </div>
      </div>
      <div class="date-list">
        <div @click.stop="selectDate(index)" v-if="index > 6" class="date-item" :class="{disable: day.disable, active: index === currentDateIndex}" v-for="(day, index) in dateList" :key="index">
          <div class="week">{{day.week}}</div>
          <div class="day">{{day.day}}</div>
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
    today: {
      type: Number,
      default: 0
    },
    dateList: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    ...mapGetters([
      'currentDateIndex'
    ])
  },
  methods: {
    selectDate(index) {
      this.$emit('selectDate', index)
    },
    goToPaging(index) {
      this.$refs.slider.goToIndex(index)
    }
  },
  components: {
    Slider
  }
}
</script>

<style scoped lang="less">
  @import '~@/common/less/variable.less';

  .date-control {
    position: relative;
    width: 100%;
    background-color: @color-highlight-background;
    overflow: hidden;
    .date-list {
      padding: 0.05rem;
      .date-item {
        display: inline-block;
        padding-top: 0.01rem;
        &+.date-item {
          margin-left: 0.18rem;
        }
        &.disable {
          color: @color-text-d;
        }
        &.today {
          .day {
            color: @color-theme;
          }
        }
        &.active {
          .day {
            border-radius: 50%;
            background-color: @color-theme;
            color: #fff !important;
          }
        }
        .week {
          font-size: @font-size-small;
        }
        .day {
          margin-top: 0.18rem;
          font-size: @font-size-large;
          font-weight: 100;
          width: 0.30rem;
          height: 0.30rem;
          line-height: 0.30rem;
          font-family: SF Pro Text,sans-serif;
        }
      }
    }
  }
</style>
