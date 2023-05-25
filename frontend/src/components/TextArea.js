import React from 'react'
import PropTypes from 'prop-types'

const TextArea = (props) => {
  return (
    <div className="main-cointainer">
      <textarea rows="10" placeholder="" value={props.data} readOnly></textarea>
    </div>
  )
}

TextArea.propTypes = {
  data: PropTypes.any
}

export default TextArea
