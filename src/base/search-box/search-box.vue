<template>
  <div class="search-box">
    <i class="fa fa-search icon-search"></i>
    <input ref="query" v-model="query" class="box" :placeholder="placeholder"/>
    <i @click="clear" v-show="query" class="fa fa-times icon-dismiss"></i>
  </div>
</template>

<script>
import {debounce} from '@/common/js/util'
export default {
  name: 'search-box',
  props: {
    placeholder: {
      type: String,
      default: '搜索歌曲、歌手'
    }
  },
  data () {
    return {
      query: ''
    }
  },
  created() {
    this.$watch('query', debounce((newQuery) => {
      this.$emit('query', newQuery)
    }, 300))
  },
  methods: {
    clear() {
      this.query = ''
    },
    setQuery(query) {
      this.query = query
    },
    blur() {
      this.$refs.query.blur()
    }
  }
}
</script>

<style lang="less" scoped>
  @import "~@/common/less/variable";

  .search-box {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    padding: 0 0.06rem;
    height: 0.30rem;
    background: @color-border-background;
    border-radius: 6px;
    .icon-search {
      font-size: 0.18rem;
      color: @color-background;
    }
    .box {
      flex: 1;
      margin: 0 0.05rem;
      line-height: 0.18rem;
      background: @color-border-background;
      color: @color-text;
      font-size: @font-size-medium;
      outline: 0;
      &::placeholder {
        color: @color-text-d;
      }
    }
    .icon-dismiss {
      font-size: 0.18rem;
      color: @color-background;
    }
  }
</style>