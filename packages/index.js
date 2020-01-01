import Button from './Button'
import Icon from './Icon'
import Row from './Row'
import Col from './Col'

const components = [Button, Icon, Row, Col]

const install = Vue => {
  components.map(component => Vue.component(component.name, component))
}

export default {
  version: '0.0.1',
  install,
  Button,
  Icon,
  Row,
  Col
}
