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
      </div>
    )
  }
}
