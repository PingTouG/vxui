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
