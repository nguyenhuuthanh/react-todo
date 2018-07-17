import React from 'react'
import { JobItem } from './JobItem';
import PropTypes from 'prop-types';

export const JobList = (props) => (
    <div className="Job-List">
        <ul>
            {props.jobs.map(job => <JobItem handleToogle={props.handleToogle} key={job.id} {...job} handleRemove={props.handleRemove}/>)}
        </ul>
    </div>
)

JobList.propTypes = {
    jobs: PropTypes.array.isRequired
}