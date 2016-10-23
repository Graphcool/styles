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

export default class Icon extends React.Component<Props, {}> {
  render() {
    const width = this.props.width || 16
    const height = this.props.height || 16

    const color = this.props.color || '#000'
    const stroke = this.props.stroke || false
    const strokeWidth = this.props.strokeWidth || 1
    const rotate = this.props.rotate || 0

    const fillCode = !stroke ? `fill="${color}"` : 'fill="none"'
    const strokeCode = stroke ? `stroke="${color}" stroke-width="${strokeWidth}px"` : 'stroke="none"'
    const styleCode = `style="width: ${width}px; height: ${height}px;"`
    const html = this.props.src.replace(/<svg/, `<svg ${strokeCode} ${fillCode} ${styleCode}`)

    const restProps = objectAssign({}, this.props)
    delete restProps.width
    delete restProps.height
    delete restProps.stroke
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
