<template>
  <i class="iconfont" :class="`icon-${name}`" />
</template>

<script>
export default {
  name: 'XIcon',
  props: {
    name: String
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/iconfont/iconfont.css';
</style>
