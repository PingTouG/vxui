import Button from './Button'

const components = [Button]

const install = Vue => {
  components.map(component => Vue.component(component.name, component))
}

export default {
  version: '0.0.1',
  install,
  Button
}
