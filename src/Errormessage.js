import React from 'react';
import PropTypes from 'prop-types'

const Errormessage = (props) => {
    return <div><span className="error">{props.message}</span></div>
}

Errormessage.propTypes = {
    message: PropTypes.string
}

export default Errormessage

