<template>
  <button
    class="x-button"
    :class="[
      `x-button--${type}`,
      {
        'is-plain': plain
      }
    ]"
  >
    <span v-if="!$slots.default">{{ text }}</span>
    <slot />
  </button>
</template>

<script>
export default {
  name: 'XButton',
  props: {
    text: String,
    type: {
      type: String,
      default: 'default',
      validator: value =>
        ['default', 'primary', 'success', 'info', 'warning', 'danger'].indexOf(
          value
        ) !== -1
    },
    plain: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/button.scss';
</style>
