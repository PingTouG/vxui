export default {
  name: 'XRow',
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    gutter: {
      type: Number,
      default: 0
    },
    type: {
      type: String,
      validator: value => value === 'flex'
    },
    justify: {
      type: String,
      default: 'start',
      validator: value =>
        ['start', 'end', 'center', 'space-around', 'space-between'].indexOf(
          value
        ) !== -1
    },
    align: {
      type: String,
      default: 'top',
      validator: value => ['top', 'middle', 'bottom'].indexOf(value) !== -1
    }
  },
  computed: {
    style() {
      const style = {}

      // 此操作是因为col根据gutter设置padding，通过此操作矫正两边间距
      if (this.gutter) {
        style.marginRight = style.marginLeft = `-${this.gutter / 2}px`
      }

      return style
    },
    typeClass() {
      return this.type === 'flex' ? `x-row--${this.type}` : ''
    },
    justifyClass() {
      return this.justify !== 'start' ? `is-justify-${this.justify}` : ''
    },
    alignClass() {
      return this.align !== 'top' ? `is-align-${this.align}` : ''
    }
  },
  render(h) {
    return h(
      this.tag,
      {
        class: ['x-row', this.typeClass, this.justifyClass, this.alignClass],
        style: this.style
      },
      this.$slots.default
    )
  }
}
