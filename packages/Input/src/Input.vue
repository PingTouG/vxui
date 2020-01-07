<template>
  <div
    class="x-input"
    :class="[{ 'is-disabled': disabled }, { 'x-input--suffix': clearable||showPassword }]"
    @mouseenter="focused = true"
    @mouseleave="focused = false"
  >
    <input
      class="x-input__inner"
      :type="nativeType"
      :value="vModel"
      :maxlength="maxlength"
      :minlength="minlength"
      :placeholder="placeholder"
      :disabled="disabled"
      @input="handleInput"
      @focus="hovering = true"
      @blur="hovering = false"
      :style="suffixInnerPaddingRight"
    />
    <span class="x-input__suffix" v-show="showClearIcon">
      <span class="x-input__suffix-inner">
        <i
          class="iconfont icon-browse x-input__show-password"
          v-show="showPassword && isShowPassowrd"
          @click="handleToggleShowPassword"
        />
        <i
          class="iconfont icon-notvisible x-input__show-password"
          v-show="showPassword && !isShowPassowrd"
          @click="handleToggleShowPassword"
        />
        <i class="iconfont icon-close-circle x-input__clear" @click="handleClear" />
      </span>
    </span>
  </div>
</template>

<script>
export default {
  name: 'XInput',
  props: {
    type: {
      type: String,
      default: 'text'
    },
    value: [String, Number],
    maxlength: Number,
    minlength: Number,
    showWordLimit: {
      type: Boolean,
      default: false
    },
    placeholder: String,
    clearable: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      validator: value => ['medium', 'small', 'mini'].indexOf(value) !== -1
    }
  },
  data() {
    return {
      vModel: this.value,
      focused: false,
      hovering: false,
      isShowPassowrd: false,
      nativeType: this.type
    }
  },
  computed: {
    showClearIcon() {
      return this.clearable && this.vModel && (this.focused || this.hovering)
    },
    showShowPasswordIcon() {
      return this.type === 'password' && this.showPassword && this.vModel
    },
    suffixInnerPaddingRight() {
      let right = 5

      if (this.clearable) {
        right += 20
      }

      if (this.showPassword) {
        right += 20
      }

      return {
        'padding-right': `${right}px`
      }
    }
  },
  methods: {
    handleInput(e) {
      this.changeValue(e.target.value)
    },
    handleClear() {
      this.changeValue('')
    },
    handleToggleShowPassword() {
      this.isShowPassowrd = !this.isShowPassowrd
      this.nativeType = this.isShowPassowrd ? 'text' : 'password'
    },
    changeValue(value) {
      this.vModel = value
      this.$emit('input', value)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/variables';
$height: 40px;

.x-input {
  position: relative;
  font-size: 14px;
  display: inline-block;
  width: 100%;

  &__inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    display: inline-block;
    font-size: inherit;
    height: $height;
    line-height: $height;
    outline: none;
    padding: 0 15px;
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    width: 100%;

    &::-webkit-input-placeholder {
      color: rgba($infoColor, 0.5);
    }

    &::-moz-placeholder {
      color: rgba($infoColor, 0.5);
    }

    &:-ms-input-placeholder {
      color: rgba($infoColor, 0.5);
    }

    &:focus {
      outline: none;
      border-color: $primaryColor;
    }
  }

  &.is-disabled &__inner {
    background-color: #f5f7fa;
    border-color: #e4e7ed;
    color: #c0c4cc;
    cursor: not-allowed;
  }

  &__suffix {
    position: absolute;
    height: 100%;
    right: 5px;
    top: 0;
    text-align: center;
    color: rgba($infoColor, 0.5);
    transition: all 0.3s;
    pointer-events: none;

    &-inner {
      font-size: 16px;
      pointer-events: all;
      line-height: 2.5;
      user-select: none;

      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>
