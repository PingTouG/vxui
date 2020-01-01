import Button from './Button'
import Icon from './Icon'
import Row from './Row'
import Col from './Col'

const components = {
  XRow: Row,
  XCol: Col,
  xIcon: Icon,
  XButton: Button
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
