<template>
  <a
    class="x-link"
    :class="[`x-link--${type}`,{'is-disabled':disabled},{'is-underline':!underline}]"
    :href="href"
    :target="target"
  >
    <x-icon :name="icon" v-if="icon" />
    <span class="x-link__text">
      <slot />
    </span>
  </a>
</template>

<script>
import XIcon from '../../Icon'

export default {
  name: 'XLink',
  props: {
    type: {
      type: String,
      default: 'default',
      validator: value =>
        ['default', 'primary', 'success', 'warning', 'danger', 'info'].indexOf(
          value
        ) !== -1
    },
    underline: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    href: String,
    icon: String,
    target: String
  },
  components: {
    XIcon
  }
}
</script>
