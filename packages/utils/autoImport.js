export default () => {
  const requireComponent = require.context(
    '../',
    true,
    /^.\/[A-Z]{1}\w+\/index\.js$/
  )

  const components = {}

  requireComponent.keys().forEach(fileName => {
    const componentConfig = requireComponent(fileName)

    components[componentConfig.default.name] =
      componentConfig.default || componentConfig
  })

  return components
}
