import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import TaskList from './TaskList'
import ErrorHandling from './ErrorHandling'

InboxScreen.propTypes = {
    error: PropTypes.string,
}

InboxScreen.defaultProps = {
    error: null,
}

export function InboxScreen({ error }) {
    if (error) {
        return (
            <ErrorHandling />
        )
    }

    return (
        <div className="page lists-show">
            <nav>
                <h1 className="title-page">
                    <span className="title-wrapper">Taskbox</span>
                </h1>
            </nav>
            <TaskList />
        </div>
    )
}

export default connect(({ error }) => ({ error }))(InboxScreen);
