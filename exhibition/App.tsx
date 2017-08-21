import * as React from 'react'
import Icon from '../components/Icon/Icon'
import * as variables from '../variables/variables'

export default class App extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <h1>Exhibition</h1>
        <Icon
          src={require('../icons/stroke/arrowLeft.svg')}
          stroke={true}
          color={variables.black}
          strokeWidth={2}
        />
        <Icon
          src={require('../icons/stroke/arrowTop.svg')}
          stroke={true}
          color={variables.black}
          strokeWidth={2}
        />
        <Icon
          src={require('../icons/stroke/arrowRight.svg')}
          stroke={true}
          color={variables.black}
          strokeWidth={2}
        />
        <Icon
          src={'https://upload.wikimedia.org/wikipedia/commons/1/12/%D0%9F%D1%80%D0%B8%D0%BC%D0%B5%D1%80_%D1%87%D0%B5%D1%80%D1%82%D0%B5%D0%B6%D0%B0_%D0%B2_SVG_%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%82%D0%B5.svg'}
          width={500}
          height={500}
        />
      </div>
    )
  }
}
