import Row from './Row'
import Col from './Col'
import Icon from './Icon'
import Button from './Button'
import Link from './Link'

const components = {
  XRow: Row,
  XCol: Col,
  xIcon: Icon,
  XButton: Button,
  XLink: Link
}

const install = Vue => {
  for (const key in components) {
    const component = components[key]

    Vue.component(component.name, component)
  }
}

export default {
  version: '0.0.1',
  install,
  ...components
}
