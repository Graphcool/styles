import * as React from 'react'
const objectAssign: any = require('object-assign')

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

interface State {
  src: string
}

export default class Icon extends React.Component<Props, State> {
  constructor(props) {
    super(props)

    let src = this.props.src

    const match = src.match(/data:image\/svg[^,]*?(;base64)?,(.*)/)
    if (match && match[1] && match[2]) {
      src = atob(match[2])
    }

    if (src.match(/\.svg$/)) {
      this.fetch()
    }

    this.state = {
      src,
    }
  }

  componentWillReceiveProps(nextProps) {
    this.fetch(nextProps)
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
