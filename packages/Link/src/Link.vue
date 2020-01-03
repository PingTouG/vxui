<template>
  <a
    class="x-link"
    :class="[
      `x-link--${type}`,
      { 'is-disabled': disabled },
      { 'is-underline': !underline }
    ]"
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

<style lang="scss">
@import '../../styles/variables';
@import '../../styles/mixin';

.x-link {
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  position: relative;
  text-decoration: none;
  outline: none;
  cursor: pointer;
  padding: 0;
  font-size: 14px;
  font-weight: 500;
  color: $defaultColor;

  &:hover {
    color: $primaryColor;
  }

  @include is-disabled($defaultColor, link);

  &.is-underline,
  &.is-underline:hover {
    text-decoration: none;
  }

  @each $type,
    $color
      in (
        (primary, $primaryColor),
        (success, $successColor),
        (warning, $warningColor),
        (danger, $dangerColor),
        (info, $infoColor)
      )
  {
    &--#{$type} {
      color: $color;

      &:hover {
        color: rgba($color, 0.8);
      }

      @include is-disabled($color, link);
    }
  }
}
</style>
