import React from 'react'
import PropTypes from 'prop-types';

export const JobForm = (props) => (
    <form onSubmit={props.handleSubmit}>
        <input type="text" 
            onChange={props.handleInputChange}
            value={props.currentJob}/>
    </form>
)

JobForm.propTypes = {
    currentJob: PropTypes.string.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
}