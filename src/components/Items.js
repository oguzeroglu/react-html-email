import React, { Children } from 'react'
import PropTypes from 'prop-types'
import EmailPropTypes from '../PropTypes'
import includeDataProps from '../includeDataProps'

export default function Items(props) {
  return (
    <tr>
      {Children.map(props.children, child => (
        <td {...includeDataProps(props)} className={props.className} align={props.align} valign={props.valign} bgcolor={props.bgcolor} style={props.style}>
            {child}
        </td>
      ))}
    </tr>
  )
}

Items.propTypes = {
  bgcolor: PropTypes.string,
  align: PropTypes.oneOf(['left', 'center', 'right']),
  valign: PropTypes.oneOf(['top', 'middle', 'bottom']),
  style: EmailPropTypes.style,
  children: PropTypes.node,
  className: PropTypes.string,
}
