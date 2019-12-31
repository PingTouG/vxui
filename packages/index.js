import Button from './Button'
import Icon from './Icon'

const components = [Button, Icon]

const install = Vue => {
  components.map(component => Vue.component(component.name, component))
}

export default {
  version: '0.0.1',
  install,
  Button,
  Icon
}
