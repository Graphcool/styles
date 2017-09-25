import * as React from 'react'
import Icon from '../components/Icon/Icon'
import * as variables from '../variables/variables'

const example = '<svg width="50" height="50" viewBox="0 0 50 50"><path d="M48 21h-5.71c-.4-1.58-.91-3.33-1.56-4.66l4.06-4.06a.99.99 0 0 0 .29-.71c0-.27-.11-.52-.29-.71L39.14 5.2a.996.996 0 0 0-1.41 0l-4.06 4.06c-1.34-.64-3.09-1.15-4.67-1.55V2c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1v5.71c-1.58.4-3.33.91-4.66 1.55L12.27 5.2a.996.996 0 0 0-1.41 0L5.2 10.86a.996.996 0 0 0 0 1.41l4.07 4.07c-.65 1.32-1.16 3.08-1.56 4.66H2c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h5.71c.4 1.58.91 3.34 1.56 4.66L5.2 37.73c-.19.19-.29.44-.29.71s.11.52.29.71l5.66 5.66c.38.38 1.04.38 1.41 0l4.07-4.06c1.32.65 3.08 1.15 4.66 1.56V48c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-5.71c1.58-.4 3.34-.91 4.66-1.56l4.07 4.06c.39.39 1.02.39 1.41 0l5.66-5.66a.996.996 0 0 0 0-1.41l-4.06-4.07c.65-1.33 1.16-3.08 1.56-4.66H48c.55 0 1-.45 1-1v-6a1 1 0 0 0-1-.99M25 33c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8"/></svg>'

export default class App extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <h1>Exhibition</h1>
        <Icon
          src={example}
          stroke={true}
          color={variables.black}
          strokeWidth={2}
        />
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
