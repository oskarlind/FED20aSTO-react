import React from 'react'
import PropTypes from 'prop-types'
import Autocomplete from './components/Autocomplete'
import Loading from './components/Loading'

const Searchbar = (props) => {
    return <div>
        <input name={props.name} type="text" placeholder={props.placeholder} value={props.value} onChange={props.handleChange} />
        {/* <button type="submit" onClick={props.handleSearch}>Search</button> */}
        {props.loading && <Loading />}
        <Autocomplete suggestions={props.suggesions} />
    </div>
}

Searchbar.propTypes = {
    name: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    handleChange: PropTypes.func,
    handleSearch: PropTypes.func,
    suggesions: PropTypes.array,
    loading: PropTypes.bool
}

export default Searchbar