<template>
  <button
    class="x-button"
    :class="[
      type ? `x-button--${type}` : '',
      size ? `x-button--${size}` : '',
      {
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle,
        'is-disabled': disabled || loading,
        'is-block': block,
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
    },
    block: {
      type: Boolean,
      default: false
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

<style lang="scss">
@import '../../styles/variables';
@import '../../styles/mixin';

.x-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  border: 1px solid #dcdfe6;
  color: #606266;
  background: #fff;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  font-size: 14px;
  border-radius: 4px;
  @include button-size;

  &__text {
    vertical-align: text-top;
  }

  &:hover {
    color: $primaryColor;
    background-color: rgba($primaryColor, 0.1);
    border-color: rgba($primaryColor, 0.2);
  }

  &.is-plain:hover {
    color: $primaryColor;
    border-color: $primaryColor;
    background-color: #fff;
  }

  &.is-disabled {
    color: #c0c4cc;
    cursor: not-allowed;
    background-image: none;
    background-color: #fff;
    border-color: #ebeef5;

    &:hover {
      color: #c0c4cc;
      background-color: #fff;
      border-color: #ebeef5;
    }
  }

  &.is-round {
    border-radius: 20px;
  }

  &.is-block {
    width: 100%;
  }

  @include is-circle();

  &--primary {
    @include button($primaryColor);
    @include is-plain($primaryColor);
    @include is-disabled($primaryColor, button);
  }

  &--success {
    @include button($successColor);
    @include is-plain($successColor);
    @include is-disabled($successColor, button);
  }

  &--info {
    @include button($infoColor);
    @include is-plain($infoColor);
    @include is-disabled($infoColor, button);
  }

  &--warning {
    @include button($warningColor);
    @include is-plain($warningColor);
    @include is-disabled($warningColor, button);
  }

  &--danger {
    @include button($dangerColor);
    @include is-plain($dangerColor);
    @include is-disabled($dangerColor, button);
  }

  &--text {
    color: $primaryColor;
    background-color: transparent;
    border-color: transparent;

    &:hover {
      color: $primaryColor;
      background-color: transparent;
      border-color: transparent;
    }

    &.is-disabled {
      cursor: not-allowed;
      color: #c0c4cc;
      background-color: transparent;
      border-color: transparent;

      &:hover {
        color: #c0c4cc;
        background-color: transparent;
        border-color: transparent;
      }
    }
  }

  &-loading {
    animation: rotating 2s linear infinite;

    &::before {
      content: '';
      display: inline-block;
      width: 1em;
      height: 1em;
      margin-right: 0.5em;
      color: #fff;
      border: 1px solid #fff;
      border-radius: 50%;
      vertical-align: -10%;
      clip-path: polygon(0% 0%, 100% 0%, 100% 30%, 0% 30%);
      animation: rotating 1s linear infinite;
    }
  }

  &--medium {
    @include button-size(10px);
  }

  &--small {
    @include button-size(9px, 15px);
  }

  &--mini {
    @include button-size(7px, 15px);
  }
}

@keyframes rotating {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(1turn);
  }
}
</style>
