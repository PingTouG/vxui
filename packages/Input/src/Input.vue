<template>
  <div
    class="x-textarea"
    v-if="type === 'textarea'"
    @mouseenter="focused = true"
    @mouseleave="focused = false"
  >
    <textarea
      class="x-textarea__inner"
      ref="textarea"
      :name="name"
      :value="vModel"
      :rows="rows"
      :maxlength="maxlength"
      :minlength="minlength"
      :placeholder="placeholder"
      :disabled="disabled"
      :autocomplete="autocomplete"
      :readonly="readonly"
      @input="handleInput"
      @focus="hovering = true"
      @blur="hovering = false"
    />
    <span class="x-textarea__suffix" v-if="isRenderSuffix">
      <span class="x-textarea__suffix-inner" v-show="isShowSuffix">
        <span class="x-textareat__count" v-if="showWordLimit && maxlength">
          <span class="x-textarea__count-now">{{vModel.length}}</span>
          <span class="x-textarea__count-max" v-if="maxlength">/ {{maxlength}}</span>
        </span>
      </span>
    </span>
  </div>
  <div
    class="x-input"
    :class="[{ 'is-disabled': disabled }, { 'x-input--suffix': isRenderSuffix }]"
    @mouseenter="focused = true"
    @mouseleave="focused = false"
    v-else
  >
    <input
      class="x-input__inner"
      :style="suffixInnerPaddingRight"
      :type="nativeType"
      :name="name"
      :value="vModel"
      :maxlength="maxlength"
      :minlength="minlength"
      :placeholder="placeholder"
      :disabled="disabled"
      :autocomplete="autocomplete"
      :readonly="readonly"
      @input="handleInput"
      @focus="hovering = true"
      @blur="hovering = false"
    />
    <span class="x-input__suffix" v-if="isRenderSuffix">
      <span class="x-input__suffix-inner" v-show="isShowSuffix">
        <i
          class="iconfont icon-close-circle x-input__clear"
          @click="handleClear"
          v-if="clearable"
          v-show="vModel"
        />
        <i
          class="iconfont icon-browse x-input__show-password"
          v-if="showPassword"
          v-show="isShowShowPasswordIcon"
          @click="handleToggleShowPassword"
        />
        <i
          class="iconfont icon-notvisible x-input__show-password"
          v-if="showPassword"
          v-show="!isShowShowPasswordIcon"
          @click="handleToggleShowPassword"
        />
        <span class="x-input__count" v-if="showWordLimit && maxlength">
          <span class="x-input__count-now">{{vModel.length}}</span>
          <span class="x-input__count-max" v-if="maxlength">/ {{maxlength}}</span>
        </span>
      </span>
    </span>
  </div>
</template>

<script>
import { throttle } from '../../utils//tools'

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
    showWordLimit: {
      type: Boolean,
      default: false
    },
    rows: {
      type: Number,
      default: 3
    },
    size: {
      type: String,
      validator: value => ['medium', 'small', 'mini'].indexOf(value) !== -1
    },
    autocomplete: {
      type: String,
      default: 'off',
      validator: value => ['on', 'off'].indexOf(value) !== -1
    },
    name: String,
    readonly: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      vModel: this.value ? this.value : '',
      focused: false,
      hovering: false,
      isShowPassowrd: false,
      nativeType: this.type,
      autoScrollTop: null
    }
  },
  computed: {
    isRenderSuffix() {
      return this.clearable || this.showPassword || this.showWordLimit
    },
    isShowSuffix() {
      return this.focused || this.hovering
    },
    isShowShowPasswordIcon() {
      return this.type === 'password' && this.isShowPassowrd
    },
    suffixInnerPaddingRight() {
      let right = 5

      if (this.clearable) {
        right += 20
      }

      if (this.showPassword) {
        right += 20
      }

      if (this.showWordLimit) {
        right += 50
      }

      if (this.maxlength > 99) {
        right += 15
      }

      if (this.vModel.length > 99) {
        right += 5
      }

      return {
        'padding-right': `${right}px`
      }
    }
  },
  methods: {
    handleInput(e) {
      if (this.autoScrollTop) {
        this.autoScrollTop()
      }
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
  },
  created() {
    if (this.type === 'textarea') {
      // 节流
      this.autoScrollTop = throttle(() => {
        this.$refs['textarea'].scrollTop = this.$refs['textarea'].scrollHeight
      }, 200)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/mixin';
$height: 40px;

.x-input {
  @include input(40px, 0 15px);
}

.x-textarea {
  @include input(auto, 5px 5px 15px 5px, textarea);
}
</style>
