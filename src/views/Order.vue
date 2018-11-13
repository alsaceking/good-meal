<template>
  <div class="order">
    <top-title :title='"点餐"' :showBack='false'></top-title>
    <div class="date-wrap">
      <date-control ref="dateList" :dateList="dateList" :today="today" @selectDate="setDateIndex"></date-control>
    </div>
    <div class="orders-wrap">
      <order-list :orderList="orderList" @getScrollIndex="setCurrentScrollIndex" @getPagingIndex="setCurrentPagingIndex"></order-list>
    </div>
  </div>
</template>

<script>
import TopTitle from '@/base/top-title/top-title'
import DateControl from '@/components/date-control/date-control'
import OrderList from '@/components/order-list/order-list'
import { mapMutations } from 'vuex'
import { getWeek, getNewDate } from '@/common/js/date'

export default {
  data() {
    return {
      // 单前选择的日期索引
      currentIndex: 2,
      // 日期的分页
      paging: 7,
      // 日期数组
      dateList: [],
      // 当天的日期对象
      date: {},
      // 当天的日期
      today: 0,
      // 对应日期的订单详情
      orderList: []
    }
  },
  created() {
    this._getDate()
    this._getOrders()
    this.setCurrentDateIndex(this.currentIndex)
  },
  methods: {
    _getDate() {
      this.date = new Date()
      this.today = this.date.getDate()
      for (let i = 0; i < 14; i++) {
        let week = getWeek(this.date.getUTCDay() + i - this.currentIndex)
        let disable = week === '六' || week === '日'
        this.dateList.push({
          week: week,
          day: getNewDate(this.date.getYear(), this.date.getMonth(), this.date.getDate() + i - this.currentIndex),
          disable: disable
        })
      }
    },
    _getOrders() {
      let arr = []
      for (let i = 0; i < 14; i++) {
        let state = 0
        if ( i === this.currentIndex) {
          state = 1
        }
        arr.push({
          index: i, time: '17:20', name: '雨街晚餐', state: state
        })
      }
      this.orderList = arr
    },
    setDateIndex(index) {
      this.setCurrentDateIndex(index)
    },
    setCurrentScrollIndex(index) {
      this.setCurrentDateIndex(index)
    },
    setCurrentPagingIndex(index) {
      this.$refs.dateList.goToPaging(Math.floor(index / this.paging))
    },
    ...mapMutations({
      setCurrentDateIndex: 'SET_CURRENT_DATE_INDEX'
    })
  },
  components: {
    TopTitle, DateControl, OrderList
  }
}
</script>

<style scoped lang="less">
  @import '~@/common/less/variable.less';

  .order {
    position: absolute;
    bottom: 0.60rem;
    top: 0;
    left: 0;
    right: 0;
    .date-wrap {
      position: relative;
    }
  }
</style>
