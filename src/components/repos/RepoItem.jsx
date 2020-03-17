import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const DATE_OPTIONS = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };

export const RepoItem = ({ repo }) => {
    return (
        <Fragment>
        <div className="card grid-3">
            <h3>
            <i className="fab fa-github" /> | <a href={repo.html_url}>{repo.name}</a>
            </h3>
            <p>Description: {repo.description}</p>
            <ul>
                <li><strong>Created at:</strong> {(new Date(repo.created_at)).toLocaleDateString('en-US', DATE_OPTIONS)}</li> 
                <li><strong>Last update:</strong> {(new Date(repo.updated_at)).toLocaleDateString('en-US', DATE_OPTIONS)}</li>
            </ul>
        </div>
        </Fragment>
    )
}

RepoItem.propTypes = {
    repo: PropTypes.object.isRequired
}

export default RepoItem