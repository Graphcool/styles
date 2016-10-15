import * as React from 'react'

export interface Props {
  src: any
  color?: string
  width?: number
  height?: number
  className?: string
  rotate?: number
  stroke?: boolean
  [key: string]: any
}

export default class Icon extends React.Component<Props, {}> {
  render() {
    const width = this.props.width || 16
    const height = this.props.height || 16

    const stroke = this.props.stroke || false
    const rotate = this.props.rotate || 0

    const fillCode = this.props.color && !stroke ? `fill="${this.props.color}"` : ''
    const strokeCode = this.props.color && stroke ? `stroke="${this.props.color}"` : ''
    const styleCode = `style="width: ${width}px; height: ${height}px"`
    const html = this.props.src.replace(/<svg/, `<svg ${strokeCode} ${fillCode} ${styleCode}`)

    const restProps = Object.assign({}, this.props)
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

