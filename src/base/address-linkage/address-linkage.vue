<template>
  <div class="linkage">
    <div class="top-title">
      <div class="back" @click.stop="goBack"><i class="fa fa-angle-left fa-2x"></i></div>
      <h1 class="title">地区选择</h1>
    </div>
    <scroll class="region-wrapper" :bounce="false" :scrollbar="true">
      <div>
        <ul v-if="level === 1">
          <li class="region-item" v-for="(item, index) in provinceList" :key="index" @click.stop="selectCity(item)">
            {{item.ProName}}<i class="fa fa-angle-right" style="float: right;"></i>
          </li>
        </ul>
        <ul v-if="level === 2">
          <li class="region-item" v-for="(item, index) in subCity" :key="index" @click.stop="selectCounty(item)">
            {{item.CityName}}<i class="fa fa-angle-right" style="float: right;"></i>
          </li>
        </ul>
        <ul v-if="level === 3">
          <li class="region-item" v-for="(item, index) in subCounty" :key="index" @click.stop="selected(item.DisName)">
            {{item.DisName}}<i class="fa fa-angle-right" style="float: right;"></i>
          </li>
        </ul>
      </div>
    </scroll>
  </div>
</template>

<script>
import getCityCode from '@/common/js/city-code'
import Scroll from '@/base/scroll/scroll'
export default {
  data() {
    return {
      provinceList: [],
      cityList: [],
      countyList: [],
      // 显示联动级别 province1级 city2级 county3级
      level: 1,
      // 当前选择的省下的子城市
      subCity: [],
      // 当前选择的市下子县
      subCounty: [],
      // 选择的地址数组
      addressArry: []
    }
  },
  created() {
    this.provinceList = getCityCode().provinceList
    this.cityList = getCityCode().cityList
    this.countyList = getCityCode().countyList
  },
  methods: {
    goBack() {
      switch (this.level) {
        case 1:
          this.$emit('retreat')
          break
        case 2:
          this.level = 1
          break
        case 3:
          this.level = 2
      }
    },
    selectCity(item) {
      let cityArry = []
      for (let cityID in this.cityList) {
        if (this.cityList[cityID].ProID === item.ProID) {
          cityArry.push(this.cityList[cityID])
        }
      }
      this.subCity = cityArry.slice(0)
      this.addressArry[0] = item.ProName
      this.level = 2
    },
    selectCounty(item) {
      let countyArry = []
      for (let countyID in this.countyList) {
        if (this.countyList[countyID].CityID === item.CityID) {
          countyArry.push(this.countyList[countyID])
        }
      }
      this.subCounty = countyArry.slice(0)
      this.addressArry[1] = item.CityName
      this.level = 3
    },
    // 选择地址完成
    selected(name) {
      this.addressArry[2] = name
      this.$emit('selected', this.addressArry)
    }
  },
  components: {
    Scroll
  }
}
</script>

<style scoped lang="less">
  @import "~@/common/less/variable";
  .linkage {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #fff;
    z-index: 100;
    .top-title {
      position: relative;
      height: 0.45rem;
      text-align: center;
      background-color: @color-background-d;
      border-bottom: 1px solid @color-border-background;
      .title {
        height: 0.45rem;
        line-height: 0.45rem;
        padding-left: 0.50rem;
        text-align: left;
        font-size: @font-size-large;
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
    .region-wrapper {
      position: absolute;
      top: 0.46rem;
      left: 0;
      right: 0;
      bottom: 0;
      overflow: hidden;
      .region-item {
        padding: 0.18rem 0.15rem;
        border-bottom: 1px solid @color-border-background;
      }
    }
  }
</style>
