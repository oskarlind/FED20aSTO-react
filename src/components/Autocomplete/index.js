import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Autocomplete = (props) => {
    if (props.suggestions.length > 0) {
        return <ul>
            {props.suggestions.map((suggestion) => (
                <li key={suggestion.id}>
                    <Link to={"/recipe/" + suggestion.id}>{suggestion.title}</Link>
                </li>
            )
            )}
        </ul>
    } else {
        return <div></div>
    }
}

Autocomplete.PropTypes = {
    suggestions: PropTypes.array
}

export default Autocomplete