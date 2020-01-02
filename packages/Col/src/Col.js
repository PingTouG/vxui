export default {
  name: 'XCol',
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    span: {
      type: Number,
      default: 24,
      validator: value => value % 1 === 0 && value > 0 && value <= 24
    },
    offset: {
      type: Number,
      default: 0,
      validator: value => value % 1 === 0 && value >= 0 && value <= 24
    },
    push: {
      type: Number,
      default: 0,
      validator: value => value % 1 === 0 && value >= 0 && value <= 24
    },
    pull: {
      type: Number,
      default: 0,
      validator: value => value % 1 === 0 && value >= 0 && value <= 24
    }
  },
  computed: {
    spanClass() {
      return this.span !== 24 ? `x-col-span-${this.span}` : ''
    },
    gutter() {
      const parent = this.$parent

      while (parent && parent.$options.name !== 'XRow') {
        parent = parent.$parent
      }

      return parent ? parent.gutter : 0
    },
    style() {
      const style = {}

      if (this.gutter) {
        style.paddingRight = style.paddingLeft = `${this.gutter / 2}px`
      }

      return style
    },
    offsetClass() {
      return this.offset ? `x-col-offset-${this.offset}` : ''
    },
    pushClass() {
      return this.push ? `x-col-push-${this.push}` : ''
    },
    pullClass() {
      return this.pull ? `x-col-pull-${this.pull}` : ''
    }
  },
  render(h) {
    return h(
      this.tag,
      {
        class: [
          'x-col',
          this.spanClass,
          this.offsetClass,
          this.pushClass,
          this.pullClass
        ],
        style: this.style
      },
      this.$slots.default
    )
  }
}
