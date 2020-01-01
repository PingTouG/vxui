<template>
  <button
    class="x-button"
    :class="[
      type? `x-button--${type}`:'',
      size?`x-button--${size}`:'',
      {
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle,
        'is-disabled': disabled || loading,
      }
    ]"
    :type="nativeType"
    :disabled="disabled || loading"
    @click="handleClick"
  >
    <span class="x-button-loading" v-if="loading" />
    <x-icon :name="icon" v-if="icon" />
    <template v-if="!circle">
      <span class="x-button__text" v-if="!$slots.default">{{ text }}</span>
      <slot />
    </template>
  </button>
</template>

<script>
import XIcon from '../../Icon'

export default {
  name: 'XButton',
  props: {
    text: String,
    type: {
      type: String,
      validator: value =>
        ['primary', 'success', 'info', 'warning', 'danger', 'text'].indexOf(
          value
        ) !== -1
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    icon: String,
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      validator: value => ['medium', 'small', 'mini'].indexOf(value) !== -1
    },
    loading: {
      type: Boolean,
      default: false
    },
    nativeType: {
      type: String,
      default: 'button'
    }
  },
  components: {
    XIcon
  },
  methods: {
    handleClick(e) {
      this.$emit('click', e)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/button.scss';
</style>
