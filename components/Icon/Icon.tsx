import * as React from 'react'
const objectAssign: any = require('object-assign')
import 'isomorphic-fetch'

export interface Props {
  src: any
  color?: string
  width?: number
  height?: number
  className?: string
  rotate?: number
  stroke?: boolean
  strokeWidth?: number
  [key: string]: any
}

export interface State {
  src: string | null
}

export default class Icon extends React.PureComponent<Props, State> {
  constructor(props) {
    super(props)

    let src = this.props.src

    const match = src.match(/data:image\/svg[^,]*?(;base64)?,(.*)/)
    if (match && match[1] && match[2]) {
      src = atob(match[2])
    }

    if (src.match(/\.svg$/)) {
      src = null
      this.fetch()
    }

    this.state = {
      src,
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.src && nextProps.src.match(/\.svg$/)) {
      this.fetch(nextProps)
    } else {
      this.setState({src: nextProps.src})
    }
  }

  fetch(props = this.props) {
    fetch(props.src)
      .then(res => res.text())
      .then((src) => {
        this.setState({src})
      })
  }

  render() {
    const {src} = this.state
    if (!src) {
      return null
    }
    const width = this.props.width || 16
    const height = this.props.height || 16

    const color = this.props.color || '#000'
    const stroke = this.props.stroke || false
    const strokeWidth = this.props.strokeWidth || 1
    const rotate = this.props.rotate || 0

    const fillCode = !stroke ? `fill="${color}"` : 'fill="none"'
    const strokeCode = stroke ? `stroke="${color}" stroke-width="${strokeWidth}px"` : 'stroke="none"'
    const styleCode = `style="width: ${width}px; height: ${height}px;"`

    const html = src.replace(/<svg/, `<svg ${strokeCode} ${fillCode} ${styleCode}`)

    const restProps = objectAssign({}, this.props)
    delete restProps.width
    delete restProps.height
    delete restProps.stroke
    delete restProps.strokeWidth
    delete restProps.color
    delete restProps.src
    delete restProps.className

    return (
      <i
        {...restProps}
        className={this.props.className}
        style={{
          transform: `rotate(${rotate}deg)`,
          WebkitTransform: `rotate(${rotate}deg)`,
          display: 'flex',
        }}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    )
  }
}
