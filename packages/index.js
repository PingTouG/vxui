import autoImport from './utils/autoImport'

const components = autoImport()

const install = Vue => {
  for (const key in components) {
    Vue.component(key, components[key])
  }
}

export default {
  version: '0.0.1',
  install,
  ...components
}
