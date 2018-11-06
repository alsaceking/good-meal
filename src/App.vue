<template>
  <div id="app" @touchmove.prevent>
    <keep-alive>
      <router-view/>
    </keep-alive>
    <footer-nav></footer-nav>
  </div>
</template>

<script>
import FooterNav from '@/components/footer-nav/footer-nav'
export default {
  name: 'app',
  components: {
    FooterNav
  }
}
</script>

<style lang="less">
</style>
