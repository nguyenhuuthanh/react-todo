import React from 'react'
import PropTypes from 'prop-types';
import {partial} from '../../lib/util'

export const JobItem = (props) => {
    const handleToogle = partial(props.handleToogle, props.id)
    const handleRemove = partial(props.handleRemove, props.id)
    return (
        <li>
            <span className="delete-item"><a href="#" onClick={handleRemove}>X</a></span>
            <input type="checkbox" onChange={handleToogle} 
            checked={props.isApprove}/>{props.name}
        </li>
    )
}

JobItem.propTypes = {
    name: PropTypes.string.isRequired,
    isApprove: PropTypes.bool,
    id: PropTypes.number.isRequired
}